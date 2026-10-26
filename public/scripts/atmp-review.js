/*
 * Amélioration progressive du tableau de revue de lancement des ATMP.
 *
 * Le tableau, la synthèse et la légende sont écrits dans la page au moment du
 * build (voir build/atmp-table.js). Ce script n'apporte que le confort : tri des
 * colonnes, filtres, et recalcul du bandeau de synthèse sur la sélection.
 *
 * Conséquence : si ce fichier ne charge pas, la page reste complète et lisible.
 * Aucune donnée n'est récupérée par le réseau, aucun élément n'est construit ici.
 *
 * Les deux garde-fous de METHODE.md sont conservés dans le recalcul :
 *  §3 — les durées censurées (evenement = 0) n'entrent jamais dans un délai médian ;
 *  §5 — sous le seuil, la statistique est remplacée par « effectif insuffisant ».
 */
(function () {
  'use strict';

  var racine = document.getElementById('atmp-review');
  if (!racine || !racine.querySelector('tbody')) return;

  var LANG = racine.getAttribute('data-lang') === 'en' ? 'en' : 'fr';
  var SEUIL = parseInt(racine.getAttribute('data-seuil'), 10) || 5;
  var TOTAL = parseInt(racine.getAttribute('data-total'), 10) || 0;

  var MOTS = {
    fr: { mois: 'mois', patients: 'patients', insuffisant: 'effectif insuffisant',
          sur: 'sur', vide: 'Aucune autorisation ne correspond à ces filtres.' },
    en: { mois: 'months', patients: 'patients', insuffisant: 'too few observations',
          sur: 'of', vide: 'No authorisation matches these filters.' },
  }[LANG];

  var tbody = racine.querySelector('tbody');
  var lignes = Array.prototype.slice.call(tbody.querySelectorAll('tr'));
  var stats = racine.querySelectorAll('.dz-stat');
  var etat = { categorie: '', etatSel: '', typeAmm: '', design: '', depuis: 0, q: '' };
  var tri = { cle: null, sens: 1 };

  function mediane(xs) {
    if (!xs.length) return null;
    var s = xs.slice().sort(function (a, b) { return a - b; });
    var m = Math.floor(s.length / 2);
    return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
  }

  function correspond(tr) {
    var d = tr.dataset;
    if (etat.categorie && d.categorie !== etat.categorie) return false;
    if (etat.etatSel && d.etat !== etat.etatSel) return false;
    if (etat.typeAmm && d.typeamm !== etat.typeAmm) return false;
    if (etat.design && d.design !== etat.design) return false;
    if (etat.depuis && parseInt(d.annee, 10) < etat.depuis) return false;
    if (etat.q && d.recherche.indexOf(etat.q) === -1) return false;
    return true;
  }

  // Le bandeau est réécrit dans le même gabarit que celui produit au build,
  // de sorte qu'avec ou sans script l'affichage soit identique.
  function poseStat(i, valeur, mince) {
    var bloc = stats[i];
    if (!bloc) return;
    bloc.className = 'dz-stat' + (mince ? ' dz-thin' : '');
    bloc.querySelector('.dz-v').innerHTML = valeur;
  }

  function rendreSynthese(sel) {
    var n = sel.length;
    var sorties = sel.filter(function (tr) { return tr.dataset.evenement === '1'; });

    poseStat(0, n + ' <small>' + MOTS.sur + ' ' + TOTAL + '</small>');
    poseStat(1, sorties.length + ' <small>' +
      (n ? Math.round((sorties.length / n) * 100) + ' %' : '—') + '</small>');

    if (sorties.length >= SEUIL) {
      var d = mediane(sorties.map(function (tr) { return parseFloat(tr.dataset.duree); }));
      poseStat(2, Math.round(d) + ' <small>' + MOTS.mois + '</small>');
    } else {
      poseStat(2, MOTS.insuffisant + ' (' + sorties.length + ')', true);
    }

    var effs = sel.map(function (tr) { return tr.dataset.effectif; })
                  .filter(function (v) { return v !== ''; })
                  .map(parseFloat);
    if (effs.length >= SEUIL) {
      poseStat(3, Math.round(mediane(effs)) + ' <small>' + MOTS.patients + '</small>');
    } else {
      poseStat(3, MOTS.insuffisant + ' (' + effs.length + ')', true);
    }

    var bras = sel.filter(function (tr) { return tr.dataset.brasunique === '1'; }).length;
    poseStat(4, bras + ' <small>' + (n ? Math.round((bras / n) * 100) + ' %' : '—') + '</small>');
  }

  // Lignes de la frise : mêmes attributs de filtre que le tableau. On les estompe
  // au lieu de les masquer — la frise est positionnée en absolu, retirer une ligne
  // laisserait un trou. Estomper garde la mise en page et conserve le contexte.
  var frise = Array.prototype.slice.call(racine.querySelectorAll('.dz-frise-row'));

  var messageVide = null;
  function rendre() {
    var sel = [];
    lignes.forEach(function (tr) {
      var ok = correspond(tr);
      tr.hidden = !ok;
      if (ok) sel.push(tr);
    });

    frise.forEach(function (g) {
      g.classList.toggle('is-hors-selection', !correspond(g));
    });

    if (!sel.length) {
      if (!messageVide) {
        messageVide = document.createElement('div');
        messageVide.className = 'dz-empty';
        messageVide.textContent = MOTS.vide;
        racine.querySelector('.dz-tablewrap').appendChild(messageVide);
      }
      messageVide.hidden = false;
    } else if (messageVide) {
      messageVide.hidden = true;
    }

    rendreSynthese(sel);
  }

  // ---- tri : on réordonne les <tr> existants, on n'en crée aucun
  function valeur(tr, idx) {
    var td = tr.children[idx];
    var brut = td.getAttribute('data-tri');
    if (brut !== null) {
      var n = parseFloat(brut);
      return isNaN(n) ? brut : n;
    }
    var txt = td.textContent.trim();
    var num = parseFloat(txt.replace('≥', '').trim());
    return (txt !== '—' && !isNaN(num) && /^[≥\s\d.,]+$/.test(txt)) ? num : txt.toLowerCase();
  }

  racine.querySelectorAll('thead th').forEach(function (th, idx) {
    th.addEventListener('click', function () {
      if (tri.cle === idx) tri.sens = -tri.sens;
      else { tri.cle = idx; tri.sens = 1; }

      racine.querySelectorAll('thead th').forEach(function (autre) {
        autre.removeAttribute('aria-sort');
        var fleche = autre.querySelector('.dz-arrow');
        if (fleche) fleche.textContent = '↕';
      });
      th.setAttribute('aria-sort', tri.sens === 1 ? 'ascending' : 'descending');
      var f = th.querySelector('.dz-arrow');
      if (f) f.textContent = tri.sens === 1 ? '▲' : '▼';

      lignes.sort(function (a, b) {
        var va = valeur(a, idx), vb = valeur(b, idx);
        if (va < vb) return -tri.sens;
        if (va > vb) return tri.sens;
        return 0;
      });
      lignes.forEach(function (tr) { tbody.appendChild(tr); });
    });
  });

  // ---- filtres
  racine.querySelectorAll('select[data-filtre]').forEach(function (sel) {
    sel.addEventListener('change', function () {
      etat[sel.getAttribute('data-filtre')] = sel.value;
      rendre();
    });
  });

  var champQ = racine.querySelector('#dz-q');
  if (champQ) champQ.addEventListener('input', function () {
    etat.q = champQ.value.trim().toLowerCase();
    rendre();
  });

  var boutonsFenetre = racine.querySelectorAll('button[data-fenetre]');
  boutonsFenetre.forEach(function (b) {
    b.addEventListener('click', function () {
      etat.depuis = parseInt(b.getAttribute('data-fenetre'), 10);
      boutonsFenetre.forEach(function (x) {
        x.setAttribute('aria-pressed', x === b ? 'true' : 'false');
      });
      rendre();
    });
  });

  var reset = racine.querySelector('.dz-reset');
  if (reset) reset.addEventListener('click', function () {
    etat.categorie = etat.etatSel = etat.typeAmm = etat.design = etat.q = '';
    etat.depuis = 0;
    racine.querySelectorAll('select[data-filtre]').forEach(function (s) { s.value = ''; });
    if (champQ) champQ.value = '';
    boutonsFenetre.forEach(function (x) {
      x.setAttribute('aria-pressed', x.getAttribute('data-fenetre') === '0' ? 'true' : 'false');
    });
    rendre();
  });
})();
