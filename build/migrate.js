#!/usr/bin/env node
/*
 * Migration unique : transforme les articles HTML existants en content/<id>/{fr,en}.md.
 * À lancer une seule fois (npm run migrate). Conservé pour référence.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const CONTENT = path.join(ROOT, 'content');

// Métadonnées non présentes dans le HTML (date de publication, résumé pour l'index).
// Dates fabriquées de façon plausible — à ajuster librement ensuite.
const ARTICLES = [
  {
    id: 'moyennes-quartet-anscombe',
    date: '2026-06-05',
    fr: { file: 'articles/moyennes-quartet-anscombe.html',
          summary: "Quatre jeux de données, des statistiques identiques, quatre réalités opposées. La démonstration visuelle que le chiffre résumé ne suffit jamais à décider." },
    en: { file: 'en/articles/averages-anscombe-quartet.html',
          summary: 'Four datasets, identical statistics, four opposite realities. The visual proof that a summary number is never enough to decide.' },
  },
  {
    id: 'business-plan',
    date: '2026-05-15',
    fr: { file: 'articles/business-plan-liste-hypotheses.html',
          summary: "Derrière chaque chiffre d'un business plan se cache un pari. Comment extraire ces paris, les formuler pour qu'ils soient testables — et les suivre dans le temps comme on suit un budget." },
    en: { file: 'en/articles/business-plan-list-of-assumptions.html',
          summary: 'Behind every number in a business plan hides a bet. How to extract those bets, phrase them so they can be tested — and track them over time the way you track a budget.' },
  },
  {
    id: 'excel',
    date: '2026-02-01',
    fr: { file: 'articles/analyser-des-donnees-dans-excel.html',
          summary: "Les concepts fondamentaux de tout projet d'analyse : partir d'une question, utiliser le minimum de données nécessaires, séparer les données de l'analyse. Avec un outil que tout le monde possède." },
    en: { file: 'en/articles/analyzing-data-in-excel.html',
          summary: 'The fundamentals of any analysis project: start from a question, use the minimum data necessary, keep data separate from analysis. With a tool everyone already has.' },
  },
  {
    id: 'snowflake',
    date: '2026-01-15',
    fr: { file: 'articles/snowflake-industrie-pharmaceutique.html',
          summary: "Comment une plateforme cloud qui sépare stockage et calcul répond aux défis du secteur : essais cliniques, pharmacovigilance, supply chain et market access." },
    en: { file: 'en/articles/snowflake-pharmaceutical-industry.html',
          summary: "How a cloud platform that separates storage from compute answers the sector's challenges: clinical trials, pharmacovigilance, supply chain and market access." },
  },
];

const pick = (re, s) => { const m = s.match(re); return m ? m[1].trim() : ''; };

// Convertit le corps HTML d'un article en Markdown (les blocs complexes — svg,
// figure, div — sont conservés tels quels, avec liens internes réécrits en @root/).
function htmlBodyToMarkdown(html, lang) {
  // 1. Isoler le corps : entre la ligne <p class="article-meta">…</p> et le dernier back-link.
  let body = html.slice(html.indexOf('</p>', html.indexOf('article-meta')) + 4);
  body = body.slice(0, body.lastIndexOf('<a href="../'));    // coupe le back-link final
  body = body.replace(/<\/article>[\s\S]*$/, '');

  // 2. Réécrire les URLs internes en @root/
  body = body
    .replace(/(src|href)="\.\.\/\.\.\//g, '$1="@root/')      // EN articles (../../)
    .replace(/(src|href)="\.\.\//g, '$1="@root/');           // FR articles (../) et pages
  // liens article→article (./slug.html) → @root/(en/)articles/slug.html
  const artBase = lang === 'fr' ? '@root/articles/' : '@root/en/articles/';
  body = body.replace(/href="\.\/([^"]+\.html)"/g, `href="${artBase}$1"`);

  // 3. Conversion bloc par bloc. On découpe en gardant les blocs HTML "lourds" intacts.
  const HEAVY = /(<figure[\s\S]*?<\/figure>|<div class="illustration"[\s\S]*?<\/div>|<div class="image-frame"[\s\S]*?<\/div>|<blockquote>[\s\S]*?<\/blockquote>|<ul>[\s\S]*?<\/ul>|<ol>[\s\S]*?<\/ol>)/g;
  const parts = body.split(HEAVY);

  const inline = (t) => t
    .replace(/<strong>([\s\S]*?)<\/strong>/g, '**$1**')
    .replace(/<em>([\s\S]*?)<\/em>/g, '*$1*')
    .replace(/<a\s+href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g, '[$2]($1)');

  const out = [];
  for (const part of parts) {
    if (!part) continue;
    if (HEAVY.test(part)) {
      HEAVY.lastIndex = 0;
      // Blocs lourds : convertir ul/ol/blockquote en Markdown, garder figure/div/svg bruts.
      if (/^<ul>/.test(part.trim())) {
        const lis = [...part.matchAll(/<li>([\s\S]*?)<\/li>/g)].map((m) => `- ${inline(m[1].trim())}`);
        out.push(lis.join('\n'));
      } else if (/^<ol>/.test(part.trim())) {
        const lis = [...part.matchAll(/<li>([\s\S]*?)<\/li>/g)].map((m, i) => `${i + 1}. ${inline(m[1].trim())}`);
        out.push(lis.join('\n'));
      } else if (/^<blockquote>/.test(part.trim())) {
        out.push('> ' + inline(part.replace(/<\/?blockquote>/g, '').trim()));
      } else {
        out.push(part.trim());   // figure / div / svg : brut
      }
      continue;
    }
    // Texte courant : h2/h3 + paragraphes.
    let chunk = part
      .replace(/<h2[^>]*>([\s\S]*?)<\/h2>/g, (_, t) => `\n## ${inline(t.trim())}\n`)
      .replace(/<h3[^>]*>([\s\S]*?)<\/h3>/g, (_, t) => `\n### ${inline(t.trim())}\n`);
    // paragraphes
    chunk = chunk.replace(/<p>([\s\S]*?)<\/p>/g, (_, t) => `\n${inline(t.replace(/\s+/g, ' ').trim())}\n`);
    out.push(chunk);
  }

  return out.join('\n\n')
    .replace(/\n{3,}/g, '\n\n')
    .replace(/[ \t]+\n/g, '\n')
    .trim() + '\n';
}

for (const art of ARTICLES) {
  for (const lang of ['fr', 'en']) {
    const meta = art[lang];
    const html = fs.readFileSync(path.join(ROOT, meta.file), 'utf8');
    const title = pick(/<title>([\s\S]*?) — Antheos Data<\/title>/, html);
    const description = pick(/<meta name="description" content="([\s\S]*?)">/, html);
    const ogUrl = pick(/<meta property="og:url" content="([\s\S]*?)">/, html);
    const slug = ogUrl.replace(/.*\//, '').replace(/\.html$/, '');
    const label = pick(/<p class="article-meta">([\s\S]*?)<\/p>/, html);

    const fm = [
      '---',
      `slug: ${slug}`,
      `title: ${JSON.stringify(title)}`,
      `description: ${JSON.stringify(description)}`,
      `date: ${art.date}`,
      `meta: ${JSON.stringify(label)}`,
      `summary: ${JSON.stringify(meta.summary)}`,
      'draft: false',
      '---',
      '',
    ].join('\n');

    const md = fm + htmlBodyToMarkdown(html, lang);
    const dir = path.join(CONTENT, art.id);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, `${lang}.md`), md);
    console.log(`écrit content/${art.id}/${lang}.md  (${slug})`);
  }
}
