# Articles — mode d'emploi

Les articles ne s'écrivent plus en HTML. On écrit du **Markdown** ici, dans `content/`,
et un petit script (`build/build.js`) génère le HTML statique du site.

## Ajouter un article

1. Créer un dossier `content/<identifiant>/` (l'identifiant est libre, en minuscules,
   ex. `facteur-de-mensonge`).
2. Y mettre deux fichiers : `fr.md` et `en.md` (un par langue). On peut n'en mettre
   qu'un seul si l'article n'existe que dans une langue.
3. Lancer la génération :

   ```
   npm run build
   ```

4. Vérifier le rendu en ouvrant les fichiers générés, puis publier
   (commit + push vers GitHub).

Le script écrit l'article dans `articles/<slug>.html` (FR) et
`en/articles/<slug>.html` (EN), et **régénère automatiquement** les listes des pages
« À lire » et « Insights » (triées de la plus récente à la plus ancienne, brouillons
exclus).

## En-tête de fichier (front-matter)

Chaque `.md` commence par un bloc entre `---` :

```markdown
---
slug: facteur-de-mensonge
title: "Le facteur de mensonge, version business"
description: "Une phrase pour les moteurs de recherche et les aperçus de partage."
date: 2026-07-01
meta: "Données · Visualisation"
summary: "Le texte affiché sur la carte de la page d'index."
draft: false
---

Le corps de l'article, en Markdown, commence ici.
```

| Champ        | Rôle |
|--------------|------|
| `slug`       | Nom du fichier de sortie et de l'URL (`articles/<slug>.html`). Sans accents ni espaces. Peut différer entre FR et EN. |
| `title`      | Titre (balise `<title>`, `<h1>`, partages sociaux). |
| `description`| Méta-description SEO + aperçu de partage. |
| `date`       | `AAAA-MM-JJ`. Sert au tri des index. |
| `meta`       | Petit libellé sous le titre (ex. `Business planning · Hypothèses`). |
| `summary`    | Résumé affiché sur la carte de l'index. |
| `draft`      | `true` = non publié (ni page, ni entrée d'index). `false` = publié. |

Le **jumeau** de langue est simplement l'autre fichier du même dossier : le script
relie automatiquement FR ↔ EN (bouton de langue + balises `hreflang`).

## Liens internes : la règle `@root/`

Dans le corps, tout lien interne au site commence par `@root/` (la racine du site).
Le script le remplace par le bon chemin relatif selon l'emplacement de sortie.

| Pour pointer vers…            | Écrire (FR)                         | Écrire (EN) |
|-------------------------------|-------------------------------------|-------------|
| Une page                      | `@root/approche.html`               | `@root/en/approach.html` |
| Un autre article              | `@root/articles/excel.html`         | `@root/en/articles/excel.html` |
| Une image                     | `@root/public/images/articles/x.png`| `@root/public/images/articles/x.png` |

> En anglais, les pages et articles vivent sous `/en/` : leurs liens commencent donc
> par `@root/en/…`. Les images sont communes aux deux langues (`@root/public/…`).

## Brouillons

Mettre `draft: true` dans l'en-tête : l'article est ignoré par la génération (aucune
page produite, aucune entrée dans l'index). Le passer à `false` quand il est prêt,
puis relancer `npm run build`.

## Blocs visuels (SVG, figures)

Le Markdown accepte le HTML brut. Pour une figure ou un graphique SVG, on colle le
bloc HTML directement dans le `.md` (en utilisant `@root/` pour les chemins d'images).
Voir les articles existants pour des exemples.

## Rappel des commandes

```
npm install      # une seule fois, installe les 2 dépendances (marked, gray-matter)
npm run build    # régénère tout le site à partir de content/
```

Le script `build/migrate.js` a servi une fois à convertir les anciens articles HTML ;
il n'est plus utile au quotidien.
