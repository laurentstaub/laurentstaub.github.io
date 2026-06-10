---
slug: business-plan-liste-hypotheses
title: "Un business plan est une liste d'hypothèses déguisée en tableur"
description: "Derrière chaque chiffre d'un business plan se cache un pari. Comment extraire ces paris, les formuler pour qu'ils soient testables, et les suivre dans le temps."
date: 2026-05-15
meta: "Business planning · Hypothèses"
summary: "Derrière chaque chiffre d'un business plan se cache un pari. Comment extraire ces paris, les formuler pour qu'ils soient testables — et les suivre dans le temps comme on suit un budget."
draft: false
---
Au fil des années, j'ai lu et construit un bon nombre de business plans. Des ambitieux, surtout, des prudents, rarement. Tous avaient un point commun : on parlait beaucoup de leurs chiffres, et finalement peu de ce qui les faisait tenir debout. L'ambition de cet article est de vous proposer un changement de regard : arrêter de lire un business plan comme une prédiction chiffrée, et commencer à le lire comme ce qu'il est vraiment — **une liste d'hypothèses déguisée en tableur**. Ou de paris sur le futur.


## Les chiffres ne sont que des conséquences


Mettons que vous prépariez le lancement d'un médicament. Votre business plan annonce fièrement : 50&nbsp;000 patients diagnostiqués, 20&nbsp;% d'entre eux traités par votre produit, 12 boîtes par patient et par an. Soit 120&nbsp;000 boîtes vendues chaque année. Votre tableur vous donnera ce résultat avec deux décimales s'il le faut. Il sera peut-être faux, mais il aura deux décimales.


D'où viennent ces trois nombres ? Le 50&nbsp;000 suppose que la population de patients existe, qu'elle est diagnostiquée et qu'elle est accessible. Le 20&nbsp;% suppose que les prescripteurs choisiront votre produit — et que le remboursement suivra. Le 12 suppose que les patients prendront leur traitement toute l'année, sans interruption. Trois paris. Le 120&nbsp;000, lui, n'est pas une information : c'est **une conséquence arithmétique de trois paris**.



<div class="illustration">
        <svg viewBox="0 0 680 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Trois paris déguisés en chiffres : patients, pénétration, posologie — et leur conséquence arithmétique">
          <g font-size="16" font-weight="600" text-anchor="middle">
            <rect x="20"  y="40" width="130" height="56" rx="8" fill="#ecf5e8" stroke="#4caf5e"/>
            <text x="85"  y="66" fill="#0b4912">50 000</text>
            <text x="85"  y="84" fill="#0b4912" font-size="12" font-weight="400">patients</text>
            <rect x="190" y="40" width="130" height="56" rx="8" fill="#ecf5e8" stroke="#4caf5e"/>
            <text x="255" y="66" fill="#0b4912">20 %</text>
            <text x="255" y="84" fill="#0b4912" font-size="12" font-weight="400">traités</text>
            <rect x="360" y="40" width="130" height="56" rx="8" fill="#ecf5e8" stroke="#4caf5e"/>
            <text x="425" y="66" fill="#0b4912">12 boîtes</text>
            <text x="425" y="84" fill="#0b4912" font-size="12" font-weight="400">/ patient / an</text>
            <rect x="530" y="40" width="130" height="56" rx="8" fill="#0b4912"/>
            <text x="595" y="66" fill="#ffffff">120 000</text>
            <text x="595" y="84" fill="#ffffff" font-size="12" font-weight="400">boîtes / an</text>
          </g>
          <g font-size="20" fill="#56684f" text-anchor="middle">
            <text x="170" y="74">×</text>
            <text x="340" y="74">×</text>
            <text x="510" y="74">=</text>
          </g>
          <g stroke="#4caf5e" stroke-dasharray="4 4">
            <line x1="85"  y1="96" x2="85"  y2="140"/>
            <line x1="255" y1="96" x2="255" y2="140"/>
            <line x1="425" y1="96" x2="425" y2="140"/>
            <line x1="595" y1="96" x2="595" y2="140" stroke="#56684f"/>
          </g>
          <g font-size="13" text-anchor="middle" fill="#0b4912" font-style="italic">
            <text x="85"  y="160">un pari d'épidémiologie</text>
            <text x="255" y="160">un pari d'adoption</text>
            <text x="425" y="160">un pari d'observance</text>
            <text x="595" y="160" fill="#56684f">une conséquence</text>
            <text x="595" y="178" fill="#56684f">arithmétique</text>
          </g>
        </svg>
      </div>


Et c'est vrai de chaque cellule du fichier. L'EBITDA de l'année 3 est probablement l'un des chiffres les plus regardés et les moins informatifs qui soient : c'est un empilement de dizaines de paris, multipliés les uns par les autres. Tant que ces paris restent implicites, le plan a l'air solide. C'est précisément ce qui devrait vous inquiéter.


## Le test de la cellule


Le bon réflexe tient en une question. Prenez n'importe quel chiffre du plan et demandez : **qu'est-ce qui doit être vrai pour que cette cellule dise vrai ?** Vous verrez remonter à la surface des choses que le tableur ne montre pas :



- une croissance de 20&nbsp;% par an suppose que les concurrents vous regardent faire sans réagir ;
- une marge stable suppose que vos fournisseurs n'augmenteront pas leurs prix — demandez-leur ce qu'ils en pensent ;
- un lancement au printemps suppose que tout ce qui doit être prêt avant le sera, ce qui fait déjà une dizaine d'hypothèses en cascade.


Vous remarquerez au passage que les hypothèses les plus dangereuses ne sont généralement **pas dans le tableur** : l'autorisation qui n'arrive pas, la personne clé qui s'en va, le fournisseur unique qui ferme. Le tableur ne calcule que ce qu'on lui donne.


## Une hypothèse digne de ce nom est falsifiable


Une fois les hypothèses extraites, encore faut-il les écrire correctement. La plupart des hypothèses que l'on croise dans les business plans sont inattaquables — et c'est bien le problème. « Le marché est porteur » ne peut pas être contredit par la réalité ; cette phrase ne risque rien, et ne vous apprend donc rien. Comparez :



- « Le marché est porteur » → « au moins 50&nbsp;000 patients sont diagnostiqués chaque année, et un sur cinq est éligible à notre traitement » ;
- « Les prescripteurs suivront » → « 20&nbsp;% des spécialistes cibles ont prescrit le produit au moins une fois à la fin du sixième mois » ;
- « Nous serons rapidement sur le marché » → « le prix est publié et le remboursement effectif dans les douze mois ».


La version de gauche est un slogan. La version de droite peut être contredite par la réalité — c'est exactement ce qu'on lui demande. Une hypothèse bien formulée contient **un chiffre, une échéance, et une condition d'échec** : si l'un des trois manque, vous tenez une opinion, pas une hypothèse.



> Un business plan ne meurt pas de ses calculs. Il meurt de ses hypothèses.


## Toutes les hypothèses ne se valent pas


Votre liste fera vite quinze ou vingt lignes, et vous n'aurez ni le temps ni l'argent de tout vérifier. Deux questions suffisent pour trier : **si cette hypothèse casse, le plan survit-il ?** Et : **combien coûte sa vérification ?** Une hypothèse critique et incertaine se teste tout de suite. Une hypothèse critique mais bien documentée se surveille. Une hypothèse secondaire s'inscrit sur la liste et attend son tour.


Et pour tester, inutile de commander une étude de marché à cinq chiffres. Comme pour [l'analyse de données](@root/articles/analyser-des-donnees-dans-excel.html), le minimum de données nécessaires suffit. Vous voulez vérifier le pari d'adoption ? Les bases publiques de l'Assurance Maladie vous diront combien de patients sont déjà traités, et par quoi. C'est gratuit, c'est un peu aride, et cela vaut tous les slides du monde.


## Suivre ses hypothèses comme on suit un budget


Expliciter et tester, c'est bien. Mais un business plan vit, et ses hypothèses vieillissent — certaines bien, d'autres mal. La discipline qui change tout est pourtant modeste : à chaque revue mensuelle ou trimestrielle, relisez la liste. Pour chaque hypothèse : toujours vraie, fragilisée, ou contredite. Vert, orange, rouge. Dix minutes.


Le jour où une hypothèse critique passe au rouge, la décision — poursuivre, pivoter, arrêter — n'est plus une affaire d'ego ni de rapport de force : **elle est écrite dans la liste depuis le début**. C'est cette discipline, expliciter puis tester puis suivre, qui fait la différence entre un plan qu'on subit et un plan qu'on pilote. C'est d'ailleurs le cœur de [notre approche](@root/approche.html).


La prochaine fois qu'on vous tend un business plan, résistez à l'envie de demander « combien ? ». Demandez plutôt : « qu'est-ce qui doit être vrai ? ».
