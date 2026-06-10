---
slug: moyennes-quartet-anscombe
title: "Le quartet d'Anscombe, ou pourquoi vos moyennes vous mentent"
description: "Quatre jeux de données, mêmes statistiques, quatre réalités opposées. Le quartet d'Anscombe montre pourquoi un chiffre résumé ne suffit jamais à décider."
date: 2026-06-05
meta: "Données · Visualisation · Décision"
summary: "Quatre jeux de données, des statistiques identiques, quatre réalités opposées. La démonstration visuelle que le chiffre résumé ne suffit jamais à décider."
draft: false
---
Pourquoi se donner la peine de faire un graphique ? Après tout, un tableau de statistiques bien ordonné — une moyenne, un écart-type, d'autres données statistiques — devrait suffire à se faire une idée d'un ensemble de données. Un dessin vaut un long discours, paraît-il. Mais peut-être en vaut-il plus ? La réponse nous vient d'un statisticien anglais, Francis Anscombe, qui publia en 1973 un petit article appelé à devenir célèbre.


## Quatre jeux de données, des statistiques identiques


Anscombe construit quatre ensembles de onze points chacun. Il les choisit de telle sorte qu'ils partagent **exactement les mêmes caractéristiques statistiques** : même moyenne en x, même moyenne en y, même variance, même corrélation, et donc la même droite de régression (y = 3 + 0,5 x). Sur le papier, pour n'importe quel rapport statistique, ces quatre jeux de données sont interchangeables.



<div class="image-frame" style="border:1px solid var(--line);border-radius:var(--radius-lg);padding:16px 20px;background:var(--tint);margin:2rem 0;font-size:var(--text-sm);color:var(--muted);text-align:center;">
        Pour les quatre jeux : moyenne x = 9,0 · moyenne y = 7,5 · variance x = 11,0 · variance y = 4,1 · corrélation = 0,82 · droite : y = 3 + 0,5 x
      </div>


Lisez ces chiffres aussi longtemps que vous voulez : il vous est impossible de deviner ce que les données ont dans le ventre. Maintenant, dessinons-les.



<figure>
        <svg viewBox="0 0 660 480" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Les quatre nuages de points du quartet d'Anscombe : une relation linéaire ordinaire, une courbe, une droite parfaite à une exception près, et une colonne verticale avec un point isolé. Tous partagent la même droite de régression.">
          <g>
            <rect x="0" y="0" width="320" height="230" rx="10" fill="#ffffff" stroke="#dbe8d6"/>
            <line x1="49.1" y1="163.7" x2="290.9" y2="41.0" stroke="#7ed957" stroke-width="2.5"/>
            <circle cx="154.9" cy="109.4" r="4.5" fill="#0b4912"/>
            <circle cx="124.7" cy="126.1" r="4.5" fill="#0b4912"/>
            <circle cx="200.2" cy="116.4" r="4.5" fill="#0b4912"/>
            <circle cx="139.8" cy="97.6" r="4.5" fill="#0b4912"/>
            <circle cx="170.0" cy="104.9" r="4.5" fill="#0b4912"/>
            <circle cx="215.3" cy="79.9" r="4.5" fill="#0b4912"/>
            <circle cx="94.4" cy="121.7" r="4.5" fill="#0b4912"/>
            <circle cx="64.2" cy="167.3" r="4.5" fill="#0b4912"/>
            <circle cx="185.1" cy="66.5" r="4.5" fill="#0b4912"/>
            <circle cx="109.6" cy="158.8" r="4.5" fill="#0b4912"/>
            <circle cx="79.3" cy="145.6" r="4.5" fill="#0b4912"/>
            <text x="306" y="26" text-anchor="end" font-size="14" font-weight="700" fill="#56684f">I</text>
          </g>
          <g>
            <rect x="340" y="0" width="320" height="230" rx="10" fill="#ffffff" stroke="#dbe8d6"/>
            <line x1="389.1" y1="163.7" x2="630.9" y2="41.0" stroke="#7ed957" stroke-width="2.5"/>
            <circle cx="494.9" cy="92.5" r="4.5" fill="#0b4912"/>
            <circle cx="464.7" cy="107.9" r="4.5" fill="#0b4912"/>
            <circle cx="540.2" cy="98.7" r="4.5" fill="#0b4912"/>
            <circle cx="479.8" cy="98.2" r="4.5" fill="#0b4912"/>
            <circle cx="510.0" cy="90.7" r="4.5" fill="#0b4912"/>
            <circle cx="555.3" cy="108.5" r="4.5" fill="#0b4912"/>
            <circle cx="434.4" cy="138.7" r="4.5" fill="#0b4912"/>
            <circle cx="404.2" cy="185.1" r="4.5" fill="#0b4912"/>
            <circle cx="525.1" cy="92.7" r="4.5" fill="#0b4912"/>
            <circle cx="449.6" cy="121.3" r="4.5" fill="#0b4912"/>
            <circle cx="419.3" cy="160.0" r="4.5" fill="#0b4912"/>
            <text x="646" y="26" text-anchor="end" font-size="14" font-weight="700" fill="#56684f">II</text>
          </g>
          <g>
            <rect x="0" y="250" width="320" height="230" rx="10" fill="#ffffff" stroke="#dbe8d6"/>
            <line x1="49.1" y1="413.7" x2="290.9" y2="291.0" stroke="#7ed957" stroke-width="2.5"/>
            <circle cx="154.9" cy="368.3" r="4.5" fill="#0b4912"/>
            <circle cx="124.7" cy="378.9" r="4.5" fill="#0b4912"/>
            <circle cx="200.2" cy="287.3" r="4.5" fill="#0b4912"/>
            <circle cx="139.8" cy="373.6" r="4.5" fill="#0b4912"/>
            <circle cx="170.0" cy="362.9" r="4.5" fill="#0b4912"/>
            <circle cx="215.3" cy="347.1" r="4.5" fill="#0b4912"/>
            <circle cx="94.4" cy="389.4" r="4.5" fill="#0b4912"/>
            <circle cx="64.2" cy="400.0" r="4.5" fill="#0b4912"/>
            <circle cx="185.1" cy="357.7" r="4.5" fill="#0b4912"/>
            <circle cx="109.6" cy="384.2" r="4.5" fill="#0b4912"/>
            <circle cx="79.3" cy="394.8" r="4.5" fill="#0b4912"/>
            <text x="306" y="276" text-anchor="end" font-size="14" font-weight="700" fill="#56684f">III</text>
          </g>
          <g>
            <rect x="340" y="250" width="320" height="230" rx="10" fill="#ffffff" stroke="#dbe8d6"/>
            <line x1="389.1" y1="413.7" x2="630.9" y2="291.0" stroke="#7ed957" stroke-width="2.5"/>
            <circle cx="464.7" cy="381.8" r="4.5" fill="#0b4912"/>
            <circle cx="464.7" cy="394.3" r="4.5" fill="#0b4912"/>
            <circle cx="464.7" cy="364.4" r="4.5" fill="#0b4912"/>
            <circle cx="464.7" cy="347.1" r="4.5" fill="#0b4912"/>
            <circle cx="464.7" cy="352.8" r="4.5" fill="#0b4912"/>
            <circle cx="464.7" cy="374.7" r="4.5" fill="#0b4912"/>
            <circle cx="464.7" cy="402.2" r="4.5" fill="#0b4912"/>
            <circle cx="630.9" cy="291.0" r="4.5" fill="#0b4912"/>
            <circle cx="464.7" cy="397.4" r="4.5" fill="#0b4912"/>
            <circle cx="464.7" cy="361.4" r="4.5" fill="#0b4912"/>
            <circle cx="464.7" cy="377.0" r="4.5" fill="#0b4912"/>
            <text x="646" y="276" text-anchor="end" font-size="14" font-weight="700" fill="#56684f">IV</text>
          </g>
        </svg>
        <figcaption>Les quatre jeux de données du quartet d'Anscombe. Mêmes statistiques, même droite de régression (en vert), quatre réalités sans rapport.</figcaption>
      </figure>


Et là, tout change. Le premier jeu est ce que la statistique nous laissait imaginer : un nuage banal autour d'une droite. Le deuxième n'est pas linéaire du tout — c'est une courbe parfaite, et la droite de régression passe à côté du sujet. Le troisième est une droite quasi parfaite, sauf **un seul point aberrant** qui suffit à faire pivoter toute la régression. Le quatrième est encore plus brutal : tous les x sont identiques sauf un, et c'est ce point unique, isolé à droite, qui crée à lui seul l'illusion d'une relation.


## Le résumé efface ce qui compte


Voilà l'essentiel : **quatre histoires radicalement différentes, parfaitement invisibles dans les chiffres résumés**. Si l'on vous avait remis le seul tableau de statistiques, vous auriez traité ces quatre situations de la même manière. Or elles n'appellent pas du tout les mêmes décisions. Le jeu II vous demande de changer de modèle. Le jeu III vous demande d'aller comprendre cet unique point aberrant — erreur de saisie ? cas particulier riche d'enseignements ? Le jeu IV vous dit que votre belle corrélation ne repose que sur une seule observation, et qu'elle s'effondrera à la prochaine.


Un résumé statistique, par construction, jette de l'information pour en garder une version compacte. C'est utile, mais ce n'est jamais neutre : il décide à votre place de ce qui mérite d'être vu.


> La moyenne est une opinion sur les données, pas les données.


## Ce que cela change pour qui décide


On retrouve ici, sous une forme imagée, l'idée qui traverse tout notre travail : [le chiffre n'est qu'une conséquence](@root/articles/business-plan-liste-hypotheses.html), et la décision se joue dans ce qu'il y a en dessous. Un KPI sur un tableau de bord, c'est un résumé statistique de plus. Il peut très bien cacher un jeu II, un jeu III ou un jeu IV — une tendance qui s'infléchit, un client qui pèse à lui seul toute la croissance, une moyenne qui réconcilie deux populations opposées.


La parade ne coûte presque rien. Avant de décider sur un chiffre agrégé, **regardez la distribution qu'il résume** : un nuage de points, un histogramme, la série dans le temps. Trente secondes pour vérifier que le chiffre ne ment pas par omission. C'est exactement la discipline que nous appliquons quand nous instruisons un dossier d'investissement ou que nous mettons à plat un portefeuille de projets : ne jamais laisser un indicateur seul tenir lieu de réalité.


Anscombe a eu besoin de quatre dessins là où mille mots n'auraient pas suffi. C'est un peu l'ironie de la chose : la meilleure démonstration de l'utilité des graphiques est elle-même un graphique. La prochaine fois qu'on vous tend une moyenne, ne demandez pas seulement « combien ? ». Demandez : « à quoi ressemble la distribution ? ».
