---
slug: graphique-antibiotiques-tableau
title: "Le graphique des antibiotiques, ou quand le tableau bat le dessin"
description: "Un graphique primé en 1951, magnifique et illisible. La preuve, à l'inverse du quartet d'Anscombe, qu'un simple tableau est parfois la meilleure visualisation."
date: 2026-06-09
meta: "Données · Visualisation · Décision"
summary: "Le quartet d'Anscombe montrait qu'un dessin révèle ce qu'un tableau cache. Voici le cas inverse : un graphique d'antibiotiques primé, superbe et inutilisable — que trois colonnes de chiffres rendent enfin lisible."
draft: false
---
Dans [le quartet d'Anscombe](@root/articles/moyennes-quartet-anscombe.html), nous avons vu un graphique révéler ce qu'un tableau de chiffres dissimulait. La tentation serait d'en tirer une règle&nbsp;: « toujours faire un dessin ». Ce serait aller trop vite. La bonne visualisation n'est pas la plus graphique&nbsp;; c'est celle qui répond le mieux à la question posée. Et parfois, la meilleure visualisation est un tableau. Pour le démontrer, prenons un cas d'école — un cas qui vient justement de la santé.


## Un canard primé


En 1951, le designer Will Burtin publie dans le magazine *Scope*, parrainé par le laboratoire Upjohn, un diagramme qui représente l'efficacité de trois antibiotiques — pénicilline, streptomycine, néomycine — sur une série d'espèces bactériennes. L'objet est superbe&nbsp;: circulaire, coloré, savant. Il a été primé. Pourtant il est illisible.


<figure>
        <img src="@root/public/images/articles/antibiotiques-burtin.jpg" alt="Diagramme circulaire de Will Burtin (1951) représentant l'efficacité de trois antibiotiques sur diverses bactéries : des barres de trois couleurs disposées en cercle, difficiles à comparer">
        <figcaption>Le diagramme de Will Burtin (1951)&nbsp;: primé, parrainé, magnifique — et presque impossible à lire.</figcaption>
      </figure>


Edward Tufte a un mot pour ce genre d'objet&nbsp;: un **canard**. Pas un graphique bâclé — le travail et la bonne volonté de l'auteur ne sont pas en cause — mais un graphique dont l'objectif premier a cessé d'être de servir le lecteur pour devenir une démonstration de savoir-faire. Le terme vient de l'architecture, et Tufte aime à citer le conseil de l'architecte Augustus Pugin&nbsp;: « il est juste de décorer les constructions, mais il ne faut jamais construire les décorations. » Ici, la décoration est devenue la construction.


Le même Tufte propose une mesure de ce que devrait viser tout graphique&nbsp;: le **ratio données/encre**. La donnée étant l'élément principal, elle devrait occuper la majeure partie de l'encre&nbsp;; les échelles, grilles, légendes et fioritures, le minimum. Le diagramme de Burtin fait exactement l'inverse&nbsp;: l'œil dépense tout son effort à suivre des arcs de cercle, et n'a presque rien pour comparer des valeurs.


> Il est juste de décorer les constructions, mais il ne faut jamais construire les décorations.


## Le vrai problème&nbsp;: deux dimensions


Pourquoi est-ce un exercice si difficile&nbsp;? Parce que les données ont **deux dimensions** — les bactéries d'un côté, les antibiotiques de l'autre — et qu'un graphique peine à représenter deux dimensions catégorielles sans se contorsionner. Burtin a choisi la contorsion circulaire&nbsp;; d'autres auraient empilé des barres ou multiplié les courbes. Aucune de ces solutions ne laisse le lecteur faire ce qu'il veut vraiment faire&nbsp;: comparer deux valeurs. J'ai essayé, et j'ai échoué.


Or il existe un objet conçu précisément pour croiser deux dimensions, et que peu songent à appeler une «&nbsp;visualisation&nbsp;»&nbsp;: le tableau. Reprenons les données de Burtin — la concentration minimale inhibitrice, ou CMI, c'est-à-dire la dose d'antibiotique nécessaire pour stopper la bactérie. **Plus la valeur est basse, plus l'antibiotique est efficace.** Posons cela à plat, et colorons chaque case selon l'efficacité&nbsp;: plus c'est vert, plus c'est efficace.


<div class="image-frame" style="overflow-x:auto;border:1px solid #dbe8d6;border-radius:16px;padding:16px;background:#fff;margin:2rem 0;">
        <table style="border-collapse:collapse;width:100%;font-size:0.85rem;min-width:520px;">
          <thead>
            <tr>
              <th style="text-align:left;padding:7px 10px;border-bottom:2px solid #0b4912;color:#0b4912;">Bactérie</th>
              <th style="text-align:right;padding:7px 10px;border-bottom:2px solid #0b4912;color:#0b4912;">Pénicilline</th>
              <th style="text-align:right;padding:7px 10px;border-bottom:2px solid #0b4912;color:#0b4912;">Streptomycine</th>
              <th style="text-align:right;padding:7px 10px;border-bottom:2px solid #0b4912;color:#0b4912;">Néomycine</th>
            </tr>
          </thead>
          <tbody>
            <tr><td colspan="4" style="padding:8px 10px 4px;font-size:0.72rem;letter-spacing:0.06em;text-transform:uppercase;color:#56684f;">Gram négatif</td></tr>
            <tr><td style="padding:5px 10px;font-style:italic;white-space:nowrap;">Aerobacter aerogenes</td><td style="background:#fff;color:#aab6a4;text-align:right;padding:5px 10px;">870</td><td style="background:#6cc46f;color:#07230e;text-align:right;padding:5px 10px;">1</td><td style="background:#ecf5e8;color:#56684f;text-align:right;padding:5px 10px;">1,6</td></tr>
            <tr><td style="padding:5px 10px;font-style:italic;white-space:nowrap;">Brucella abortus</td><td style="background:#6cc46f;color:#07230e;text-align:right;padding:5px 10px;">1</td><td style="background:#ecf5e8;color:#56684f;text-align:right;padding:5px 10px;">2</td><td style="background:#0b4912;color:#fff;text-align:right;padding:5px 10px;">0,02</td></tr>
            <tr><td style="padding:5px 10px;font-style:italic;white-space:nowrap;">Escherichia coli</td><td style="background:#fff;color:#aab6a4;text-align:right;padding:5px 10px;">100</td><td style="background:#6cc46f;color:#07230e;text-align:right;padding:5px 10px;">0,4</td><td style="background:#0b4912;color:#fff;text-align:right;padding:5px 10px;">0,1</td></tr>
            <tr><td style="padding:5px 10px;font-style:italic;white-space:nowrap;">Klebsiella pneumoniae</td><td style="background:#fff;color:#aab6a4;text-align:right;padding:5px 10px;">850</td><td style="background:#ecf5e8;color:#56684f;text-align:right;padding:5px 10px;">1,2</td><td style="background:#6cc46f;color:#07230e;text-align:right;padding:5px 10px;">1</td></tr>
            <tr><td style="padding:5px 10px;font-style:italic;white-space:nowrap;">Mycobacterium tuberculosis</td><td style="background:#fff;color:#aab6a4;text-align:right;padding:5px 10px;">800</td><td style="background:#ecf5e8;color:#56684f;text-align:right;padding:5px 10px;">5</td><td style="background:#ecf5e8;color:#56684f;text-align:right;padding:5px 10px;">2</td></tr>
            <tr><td style="padding:5px 10px;font-style:italic;white-space:nowrap;">Proteus vulgaris</td><td style="background:#ecf5e8;color:#56684f;text-align:right;padding:5px 10px;">3</td><td style="background:#0b4912;color:#fff;text-align:right;padding:5px 10px;">0,1</td><td style="background:#0b4912;color:#fff;text-align:right;padding:5px 10px;">0,1</td></tr>
            <tr><td style="padding:5px 10px;font-style:italic;white-space:nowrap;">Pseudomonas aeruginosa</td><td style="background:#fff;color:#aab6a4;text-align:right;padding:5px 10px;">850</td><td style="background:#ecf5e8;color:#56684f;text-align:right;padding:5px 10px;">2</td><td style="background:#6cc46f;color:#07230e;text-align:right;padding:5px 10px;">0,4</td></tr>
            <tr><td style="padding:5px 10px;font-style:italic;white-space:nowrap;">Salmonella typhosa</td><td style="background:#6cc46f;color:#07230e;text-align:right;padding:5px 10px;">1</td><td style="background:#6cc46f;color:#07230e;text-align:right;padding:5px 10px;">0,4</td><td style="background:#0b4912;color:#fff;text-align:right;padding:5px 10px;">0,008</td></tr>
            <tr><td style="padding:5px 10px;font-style:italic;white-space:nowrap;">Salmonella schottmuelleri</td><td style="background:#ecf5e8;color:#56684f;text-align:right;padding:5px 10px;">10</td><td style="background:#6cc46f;color:#07230e;text-align:right;padding:5px 10px;">0,8</td><td style="background:#0b4912;color:#fff;text-align:right;padding:5px 10px;">0,09</td></tr>
            <tr><td colspan="4" style="padding:8px 10px 4px;font-size:0.72rem;letter-spacing:0.06em;text-transform:uppercase;color:#56684f;">Gram positif</td></tr>
            <tr><td style="padding:5px 10px;font-style:italic;white-space:nowrap;">Bacillus anthracis</td><td style="background:#0b4912;color:#fff;text-align:right;padding:5px 10px;">0,001</td><td style="background:#0b4912;color:#fff;text-align:right;padding:5px 10px;">0,01</td><td style="background:#0b4912;color:#fff;text-align:right;padding:5px 10px;">0,007</td></tr>
            <tr><td style="padding:5px 10px;font-style:italic;white-space:nowrap;">Diplococcus pneumoniae</td><td style="background:#0b4912;color:#fff;text-align:right;padding:5px 10px;">0,005</td><td style="background:#fff;color:#aab6a4;text-align:right;padding:5px 10px;">11</td><td style="background:#ecf5e8;color:#56684f;text-align:right;padding:5px 10px;">10</td></tr>
            <tr><td style="padding:5px 10px;font-style:italic;white-space:nowrap;">Staphylococcus albus</td><td style="background:#0b4912;color:#fff;text-align:right;padding:5px 10px;">0,007</td><td style="background:#0b4912;color:#fff;text-align:right;padding:5px 10px;">0,1</td><td style="background:#0b4912;color:#fff;text-align:right;padding:5px 10px;">0,001</td></tr>
            <tr><td style="padding:5px 10px;font-style:italic;white-space:nowrap;">Staphylococcus aureus</td><td style="background:#0b4912;color:#fff;text-align:right;padding:5px 10px;">0,03</td><td style="background:#0b4912;color:#fff;text-align:right;padding:5px 10px;">0,03</td><td style="background:#0b4912;color:#fff;text-align:right;padding:5px 10px;">0,001</td></tr>
            <tr><td style="padding:5px 10px;font-style:italic;white-space:nowrap;">Streptococcus fecalis</td><td style="background:#6cc46f;color:#07230e;text-align:right;padding:5px 10px;">1</td><td style="background:#6cc46f;color:#07230e;text-align:right;padding:5px 10px;">1</td><td style="background:#0b4912;color:#fff;text-align:right;padding:5px 10px;">0,1</td></tr>
            <tr><td style="padding:5px 10px;font-style:italic;white-space:nowrap;">Streptococcus hemolyticus</td><td style="background:#0b4912;color:#fff;text-align:right;padding:5px 10px;">0,001</td><td style="background:#fff;color:#aab6a4;text-align:right;padding:5px 10px;">14</td><td style="background:#ecf5e8;color:#56684f;text-align:right;padding:5px 10px;">10</td></tr>
            <tr><td style="padding:5px 10px;font-style:italic;white-space:nowrap;">Streptococcus viridans</td><td style="background:#0b4912;color:#fff;text-align:right;padding:5px 10px;">0,005</td><td style="background:#ecf5e8;color:#56684f;text-align:right;padding:5px 10px;">10</td><td style="background:#fff;color:#aab6a4;text-align:right;padding:5px 10px;">40</td></tr>
          </tbody>
        </table>
        <p style="font-size:0.78rem;color:#56684f;margin:14px 0 0;font-style:italic;">CMI en µg/mL (plus la valeur est basse, plus l'antibiotique est efficace). Vert foncé&nbsp;: très efficace&nbsp;; vert clair&nbsp;: efficace&nbsp;; teinte pâle&nbsp;: peu efficace&nbsp;; blanc&nbsp;: inefficace.</p>
      </div>


En une grille, tout ce que le cercle cachait apparaît. On lit une valeur sans effort. On compare deux antibiotiques en glissant l'œil sur une ligne. On repère d'un coup les colonnes globalement plus vertes. La couleur ne décore pas&nbsp;: elle porte l'information, et un encadré pourrait même signaler le meilleur antibiotique de chaque ligne.


## Un tableau par question


Reste que cela fait encore beaucoup à embrasser d'un coup. La parade est ancienne — Florence Nightingale la pratiquait déjà&nbsp;: **un tableau par question**. Plutôt que de tout montrer, on décide de ce qu'on cherche. Posons une question précise&nbsp;: « quelle molécule choisir pour traiter cette bactérie&nbsp;? » Il suffit alors de ne garder en vert que le meilleur antibiotique de chaque ligne, et de laisser le reste en retrait.


<div class="image-frame" style="overflow-x:auto;border:1px solid #dbe8d6;border-radius:16px;padding:16px;background:#fff;margin:2rem 0;">
        <table style="border-collapse:collapse;width:100%;font-size:0.85rem;min-width:520px;">
          <thead>
            <tr>
              <th style="text-align:left;padding:7px 10px;border-bottom:2px solid #0b4912;color:#0b4912;">Bactérie</th>
              <th style="text-align:right;padding:7px 10px;border-bottom:2px solid #0b4912;color:#0b4912;">Pénicilline</th>
              <th style="text-align:right;padding:7px 10px;border-bottom:2px solid #0b4912;color:#0b4912;">Streptomycine</th>
              <th style="text-align:right;padding:7px 10px;border-bottom:2px solid #0b4912;color:#0b4912;">Néomycine</th>
            </tr>
          </thead>
          <tbody>
            <tr><td colspan="4" style="padding:8px 10px 4px;font-size:0.72rem;letter-spacing:0.06em;text-transform:uppercase;color:#56684f;">Gram négatif</td></tr>
            <tr><td style="padding:5px 10px;font-style:italic;white-space:nowrap;">Aerobacter aerogenes</td><td style="text-align:right;padding:5px 10px;color:#aab6a4;">870</td><td style="background:#0b4912;color:#fff;font-weight:700;text-align:right;padding:5px 10px;">1</td><td style="text-align:right;padding:5px 10px;color:#56684f;">1,6</td></tr>
            <tr><td style="padding:5px 10px;font-style:italic;white-space:nowrap;">Brucella abortus</td><td style="text-align:right;padding:5px 10px;color:#56684f;">1</td><td style="text-align:right;padding:5px 10px;color:#56684f;">2</td><td style="background:#0b4912;color:#fff;font-weight:700;text-align:right;padding:5px 10px;">0,02</td></tr>
            <tr><td style="padding:5px 10px;font-style:italic;white-space:nowrap;">Escherichia coli</td><td style="text-align:right;padding:5px 10px;color:#aab6a4;">100</td><td style="text-align:right;padding:5px 10px;color:#56684f;">0,4</td><td style="background:#0b4912;color:#fff;font-weight:700;text-align:right;padding:5px 10px;">0,1</td></tr>
            <tr><td style="padding:5px 10px;font-style:italic;white-space:nowrap;">Klebsiella pneumoniae</td><td style="text-align:right;padding:5px 10px;color:#aab6a4;">850</td><td style="text-align:right;padding:5px 10px;color:#56684f;">1,2</td><td style="background:#0b4912;color:#fff;font-weight:700;text-align:right;padding:5px 10px;">1</td></tr>
            <tr><td style="padding:5px 10px;font-style:italic;white-space:nowrap;">Mycobacterium tuberculosis</td><td style="text-align:right;padding:5px 10px;color:#aab6a4;">800</td><td style="text-align:right;padding:5px 10px;color:#56684f;">5</td><td style="background:#0b4912;color:#fff;font-weight:700;text-align:right;padding:5px 10px;">2</td></tr>
            <tr><td style="padding:5px 10px;font-style:italic;white-space:nowrap;">Proteus vulgaris</td><td style="text-align:right;padding:5px 10px;color:#56684f;">3</td><td style="background:#0b4912;color:#fff;font-weight:700;text-align:right;padding:5px 10px;">0,1</td><td style="background:#0b4912;color:#fff;font-weight:700;text-align:right;padding:5px 10px;">0,1</td></tr>
            <tr><td style="padding:5px 10px;font-style:italic;white-space:nowrap;">Pseudomonas aeruginosa</td><td style="text-align:right;padding:5px 10px;color:#aab6a4;">850</td><td style="text-align:right;padding:5px 10px;color:#56684f;">2</td><td style="background:#0b4912;color:#fff;font-weight:700;text-align:right;padding:5px 10px;">0,4</td></tr>
            <tr><td style="padding:5px 10px;font-style:italic;white-space:nowrap;">Salmonella typhosa</td><td style="text-align:right;padding:5px 10px;color:#56684f;">1</td><td style="text-align:right;padding:5px 10px;color:#56684f;">0,4</td><td style="background:#0b4912;color:#fff;font-weight:700;text-align:right;padding:5px 10px;">0,008</td></tr>
            <tr><td style="padding:5px 10px;font-style:italic;white-space:nowrap;">Salmonella schottmuelleri</td><td style="text-align:right;padding:5px 10px;color:#56684f;">10</td><td style="text-align:right;padding:5px 10px;color:#56684f;">0,8</td><td style="background:#0b4912;color:#fff;font-weight:700;text-align:right;padding:5px 10px;">0,09</td></tr>
            <tr><td colspan="4" style="padding:8px 10px 4px;font-size:0.72rem;letter-spacing:0.06em;text-transform:uppercase;color:#56684f;">Gram positif</td></tr>
            <tr><td style="padding:5px 10px;font-style:italic;white-space:nowrap;">Bacillus anthracis</td><td style="background:#0b4912;color:#fff;font-weight:700;text-align:right;padding:5px 10px;">0,001</td><td style="text-align:right;padding:5px 10px;color:#56684f;">0,01</td><td style="text-align:right;padding:5px 10px;color:#56684f;">0,007</td></tr>
            <tr><td style="padding:5px 10px;font-style:italic;white-space:nowrap;">Diplococcus pneumoniae</td><td style="background:#0b4912;color:#fff;font-weight:700;text-align:right;padding:5px 10px;">0,005</td><td style="text-align:right;padding:5px 10px;color:#aab6a4;">11</td><td style="text-align:right;padding:5px 10px;color:#56684f;">10</td></tr>
            <tr><td style="padding:5px 10px;font-style:italic;white-space:nowrap;">Staphylococcus albus</td><td style="text-align:right;padding:5px 10px;color:#56684f;">0,007</td><td style="text-align:right;padding:5px 10px;color:#56684f;">0,1</td><td style="background:#0b4912;color:#fff;font-weight:700;text-align:right;padding:5px 10px;">0,001</td></tr>
            <tr><td style="padding:5px 10px;font-style:italic;white-space:nowrap;">Staphylococcus aureus</td><td style="text-align:right;padding:5px 10px;color:#56684f;">0,03</td><td style="text-align:right;padding:5px 10px;color:#56684f;">0,03</td><td style="background:#0b4912;color:#fff;font-weight:700;text-align:right;padding:5px 10px;">0,001</td></tr>
            <tr><td style="padding:5px 10px;font-style:italic;white-space:nowrap;">Streptococcus fecalis</td><td style="text-align:right;padding:5px 10px;color:#56684f;">1</td><td style="text-align:right;padding:5px 10px;color:#56684f;">1</td><td style="background:#0b4912;color:#fff;font-weight:700;text-align:right;padding:5px 10px;">0,1</td></tr>
            <tr><td style="padding:5px 10px;font-style:italic;white-space:nowrap;">Streptococcus hemolyticus</td><td style="background:#0b4912;color:#fff;font-weight:700;text-align:right;padding:5px 10px;">0,001</td><td style="text-align:right;padding:5px 10px;color:#aab6a4;">14</td><td style="text-align:right;padding:5px 10px;color:#56684f;">10</td></tr>
            <tr><td style="padding:5px 10px;font-style:italic;white-space:nowrap;">Streptococcus viridans</td><td style="background:#0b4912;color:#fff;font-weight:700;text-align:right;padding:5px 10px;">0,005</td><td style="text-align:right;padding:5px 10px;color:#56684f;">10</td><td style="text-align:right;padding:5px 10px;color:#aab6a4;">40</td></tr>
          </tbody>
        </table>
        <p style="font-size:0.78rem;color:#56684f;margin:14px 0 0;font-style:italic;">Une seule question&nbsp;: le meilleur antibiotique pour chaque bactérie, en vert. Tout le reste s'efface.</p>
      </div>


La réponse saute aux yeux, ligne par ligne. Et l'on pourrait décliner d'autres tableaux pour d'autres questions&nbsp;: « pour quelles bactéries notre arsenal est-il le plus faible&nbsp;? » appellerait un retour à la couleur graduée, voire un score composite des trois molécules. Une question, un tableau.


Ce n'est pas un réflexe d'épidémiologiste en mal de rigueur. C'est exactement le choix qu'a fait [Worldometer pendant le COVID](@root/articles/tableaux-de-bord-covid.html)&nbsp;: sous son unique graphique, un simple tableau par pays, à la fois instrument de mesure et de navigation. Pendant que d'autres construisaient des cartes spectaculaires, l'objet le plus humble de la visualisation a, là aussi, gagné la partie.


Une réserve, et elle est de taille&nbsp;: ce tableau répond à *une* question — l'efficacité in vitro — et à elle seule. La décision médicale réelle en intègre bien d'autres&nbsp;: la toxicité (la néomycine, si brillante sur le papier, est trop toxique pour un usage général), le spectre, la diffusion dans l'organisme. La visualisation a éclairé une dimension&nbsp;; elle n'a pas pris la décision. C'est toujours ainsi&nbsp;: un bon visuel rend une question lisible, il ne dispense pas du jugement.


## Ce que cela change pour qui décide


Anscombe et Burtin disent, au fond, la même chose par deux chemins opposés. Anscombe&nbsp;: ne faites pas confiance à un chiffre résumé, regardez la forme. Burtin&nbsp;: ne faites pas confiance au plus joli graphique, regardez la question. Dans les deux cas, **l'outil n'est jamais bon ou mauvais dans l'absolu — il l'est par rapport à ce que vous cherchez à savoir.**


C'est exactement le réflexe qui manque à la plupart des tableaux de bord d'entreprise. On y empile des camemberts et des jauges parce que «&nbsp;ça fait visuel&nbsp;», quand une grille colorée à trois colonnes répondrait mieux — et plus vite — à la question que se pose vraiment le dirigeant. Comme [pour les tableaux de bord du COVID](@root/articles/tableaux-de-bord-covid.html), le réflexe utile n'est pas «&nbsp;quel beau graphique puis-je faire&nbsp;?&nbsp;» mais «&nbsp;quelle est la question, et qu'est-ce qui y répond le plus directement&nbsp;?&nbsp;».


La prochaine fois qu'on vous propose un graphique, ne demandez pas s'il est réussi. Demandez quelle question il aide à trancher. Parfois la réponse sera un nuage de points. Parfois, ce sera un tableau. Et ce n'est pas un aveu de défaite&nbsp;: c'est le signe qu'on a posé la bonne question.
