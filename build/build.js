#!/usr/bin/env node
/*
 * Générateur d'articles Antheos Data.
 * Lit content/<id>/{fr,en}.md (Markdown + front-matter), produit le HTML statique
 * des articles, et régénère les listes d'articles des pages d'index.
 *
 * Usage : npm run build
 * Voir content/README.md pour la convention d'écriture.
 */
'use strict';

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { marked } = require('marked');

const SITE = 'https://www.antheosdata.com';
const ROOT = path.join(__dirname, '..');          // site_2026/
const CONTENT = path.join(ROOT, 'content');
const TEMPLATES = path.join(__dirname, 'templates');

// Libellés dépendant de la langue ------------------------------------------------
const L = {
  fr: {
    outDir: path.join(ROOT, 'articles'),
    indexFile: path.join(ROOT, 'a_lire.html'),
    indexHref: (slug) => `./articles/${slug}.html`,
    readMore: "Lire l'article →",
    bodyPrefix: '../',                  // depuis articles/<x>.html, la racine est un cran au-dessus
    pageUrl: (slug) => `${SITE}/articles/${slug}.html`,
    twinUrl: (twinSlug) => `../en/articles/${twinSlug}.html`,
    twinIndex: '../en/insights.html',
  },
  en: {
    outDir: path.join(ROOT, 'en', 'articles'),
    indexFile: path.join(ROOT, 'en', 'insights.html'),
    indexHref: (slug) => `./articles/${slug}.html`,
    readMore: 'Read the article →',
    bodyPrefix: '../../',               // depuis en/articles/<x>.html, la racine est deux crans au-dessus
    pageUrl: (slug) => `${SITE}/en/articles/${slug}.html`,
    twinUrl: (twinSlug) => `../../articles/${twinSlug}.html`,
    twinIndex: '../../articles/index.html', // non utilisé en pratique (a_lire)
  },
};
L.en.twinIndex = '../../a_lire.html';

const esc = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
           .replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// 1. Charger les articles --------------------------------------------------------
function loadArticles() {
  if (!fs.existsSync(CONTENT)) return [];
  const ids = fs.readdirSync(CONTENT)
    .filter((d) => fs.statSync(path.join(CONTENT, d)).isDirectory());

  return ids.map((id) => {
    const entry = { id };
    for (const lang of ['fr', 'en']) {
      const fp = path.join(CONTENT, id, `${lang}.md`);
      if (!fs.existsSync(fp)) continue;
      const { data, content } = matter(fs.readFileSync(fp, 'utf8'));
      entry[lang] = { ...data, body: content };
    }
    return entry;
  });
}

// 2. Rendre une page article -----------------------------------------------------
function renderArticle(lang, art, twin) {
  const cfg = L[lang];
  const tpl = fs.readFileSync(path.join(TEMPLATES, `article.${lang}.html`), 'utf8');

  let body = marked.parse(art.body);
  body = body.replace(/@root\//g, cfg.bodyPrefix);     // résout les liens internes

  // Paire FR/EN (pour hreflang + bouton de langue). Si le jumeau manque ou est en
  // brouillon, on pointe vers l'index de l'autre langue et hreflang renvoie à soi.
  const twinPublished = twin && !twin.draft && twin.slug;
  const twinUrl = twinPublished ? cfg.twinUrl(twin.slug) : cfg.twinIndex;

  const frSlug = lang === 'fr' ? art.slug : (twinPublished ? twin.slug : null);
  const enSlug = lang === 'en' ? art.slug : (twinPublished ? twin.slug : null);
  const hreflangFr = frSlug ? L.fr.pageUrl(frSlug) : cfg.pageUrl(art.slug);
  const hreflangEn = enSlug ? L.en.pageUrl(enSlug) : cfg.pageUrl(art.slug);

  const html = tpl
    .replace(/{{title}}/g, esc(art.title))
    .replace(/{{description}}/g, esc(art.description))
    .replace(/{{meta}}/g, esc(art.meta || ''))
    .replace(/{{ogUrl}}/g, cfg.pageUrl(art.slug))
    .replace(/{{hreflangFr}}/g, hreflangFr)
    .replace(/{{hreflangEn}}/g, hreflangEn)
    .replace(/{{twinUrl}}/g, twinUrl)
    .replace('{{body}}', body);

  fs.mkdirSync(cfg.outDir, { recursive: true });
  fs.writeFileSync(path.join(cfg.outDir, `${art.slug}.html`), html);
  return `${art.slug}.html`;
}

// 3. Injecter la liste d'articles dans une page d'index --------------------------
// Date robuste : gray-matter peut renvoyer un objet Date (YAML non quoté) ou une
// chaîne. On normalise en 'AAAA-MM-JJ' pour un tri fiable, du plus récent au plus ancien.
function dateKey(a) {
  const d = a.date;
  if (d instanceof Date) return d.toISOString().slice(0, 10);
  return String(d || '');
}

function buildIndex(lang, published) {
  const cfg = L[lang];
  const items = published
    .slice()
    .sort((a, b) => dateKey(b).localeCompare(dateKey(a)));

  const cards = items.map((a) => `          <a href="${cfg.indexHref(a.slug)}" class="article-card">
            <h2>${esc(a.title)}</h2>
            <p>${esc(a.summary || a.description)}</p>
            <span class="read-more">${cfg.readMore}</span>
          </a>`).join('\n');

  const file = cfg.indexFile;
  let html = fs.readFileSync(file, 'utf8');
  const start = '<!-- articles:auto -->';
  const end = '<!-- /articles:auto -->';
  const re = new RegExp(`${start}[\\s\\S]*?${end}`);
  if (!re.test(html)) {
    throw new Error(`Marqueurs ${start} … ${end} introuvables dans ${path.basename(file)}`);
  }
  html = html.replace(re, `${start}\n${cards}\n          ${end}`);
  fs.writeFileSync(file, html);
  return items.length;
}

// Programme principal ------------------------------------------------------------
function main() {
  const articles = loadArticles();
  const published = { fr: [], en: [] };
  let pages = 0;

  for (const art of articles) {
    for (const lang of ['fr', 'en']) {
      const a = art[lang];
      if (!a) continue;
      if (!a.slug) { console.warn(`! ${art.id}/${lang}.md : 'slug' manquant, ignoré`); continue; }
      if (a.draft) { console.log(`· brouillon ignoré : ${art.id}/${lang}`); continue; }
      const twin = art[lang === 'fr' ? 'en' : 'fr'];
      const out = renderArticle(lang, a, twin);
      published[lang].push(a);
      pages++;
      console.log(`✓ ${lang}/${out}`);
    }
  }

  const nFr = buildIndex('fr', published.fr);
  const nEn = buildIndex('en', published.en);
  console.log(`\n${pages} pages générées · index FR : ${nFr} · index EN : ${nEn} articles.`);
}

main();
