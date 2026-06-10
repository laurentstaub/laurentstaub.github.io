---
slug: antibiotics-chart-table
title: "The antibiotics chart, or when the table beats the drawing"
description: "An award-winning 1951 chart, magnificent and unreadable. The proof — the mirror image of Anscombe's quartet — that a simple table is sometimes the best visualization."
date: 2026-06-09
meta: "Data · Visualization · Decision-making"
summary: "Anscombe's quartet showed that a drawing reveals what a table hides. Here is the reverse case: an award-winning antibiotics chart, gorgeous and unusable — that three columns of numbers finally make readable."
draft: false
---
In [Anscombe's quartet](@root/en/articles/averages-anscombe-quartet.html), we saw a chart reveal what a table of numbers concealed. The temptation would be to draw a rule from it: "always make a drawing". That would be too quick. The best visualization is not the most graphical one; it is the one that best answers the question being asked. And sometimes, the best visualization is a table. To prove it, let's take a textbook case — one that comes, fittingly, from healthcare.


## A prize-winning duck


In 1951, the designer Will Burtin published, in *Scope* magazine — sponsored by the Upjohn laboratory — a diagram representing the effectiveness of three antibiotics — penicillin, streptomycin, neomycin — against a range of bacterial species. The object is superb: circular, colorful, scholarly. It won an award. And yet it is unreadable.


<figure>
        <img src="@root/public/images/articles/antibiotiques-burtin.jpg" alt="Will Burtin's circular diagram (1951) showing the effectiveness of three antibiotics against various bacteria: bars in three colors arranged in a circle, hard to compare">
        <figcaption>Will Burtin's diagram (1951): awarded, sponsored, magnificent — and almost impossible to read.</figcaption>
      </figure>


Edward Tufte has a word for this kind of object: a **duck**. Not a sloppy chart — the author's effort and good faith are not in question — but a chart whose primary purpose has stopped being to serve the reader and become a demonstration of craft. The term comes from architecture, and Tufte likes to quote the advice of architect Augustus Pugin: "it is right to decorate construction, but never to construct decoration." Here, the decoration has become the construction.


The same Tufte proposes a measure of what every chart should aim for: the **data-ink ratio**. Since the data is the main element, it should take up most of the ink; scales, grids, legends and flourishes, the minimum. Burtin's diagram does exactly the opposite: the eye spends all its effort following arcs of a circle, and has almost nothing left to compare values.


> It is right to decorate construction, but never to construct decoration.


## The real problem: two dimensions


Why is this such a hard exercise? Because the data has **two dimensions** — the bacteria on one side, the antibiotics on the other — and a chart struggles to represent two categorical dimensions without contorting itself. Burtin chose the circular contortion; others would have stacked bars or multiplied curves. None of those solutions lets the reader do what they really want to do: compare two values. I tried, and I failed.


Yet there exists an object designed precisely to cross two dimensions, one that few think to call a "visualization": the table. Let's take Burtin's data again — the minimum inhibitory concentration, or MIC, that is, the dose of antibiotic needed to stop the bacterium. **The lower the value, the more effective the antibiotic.** Let's lay it out flat, and color each cell by effectiveness: the greener it is, the more effective.


<div class="image-frame" style="overflow-x:auto;border:1px solid #dbe8d6;border-radius:16px;padding:16px;background:#fff;margin:2rem 0;">
        <table style="border-collapse:collapse;width:100%;font-size:0.85rem;min-width:520px;">
          <thead>
            <tr>
              <th style="text-align:left;padding:7px 10px;border-bottom:2px solid #0b4912;color:#0b4912;">Bacterium</th>
              <th style="text-align:right;padding:7px 10px;border-bottom:2px solid #0b4912;color:#0b4912;">Penicillin</th>
              <th style="text-align:right;padding:7px 10px;border-bottom:2px solid #0b4912;color:#0b4912;">Streptomycin</th>
              <th style="text-align:right;padding:7px 10px;border-bottom:2px solid #0b4912;color:#0b4912;">Neomycin</th>
            </tr>
          </thead>
          <tbody>
            <tr><td colspan="4" style="padding:8px 10px 4px;font-size:0.72rem;letter-spacing:0.06em;text-transform:uppercase;color:#56684f;">Gram negative</td></tr>
            <tr><td style="padding:5px 10px;font-style:italic;white-space:nowrap;">Aerobacter aerogenes</td><td style="background:#fff;color:#aab6a4;text-align:right;padding:5px 10px;">870</td><td style="background:#6cc46f;color:#07230e;text-align:right;padding:5px 10px;">1</td><td style="background:#ecf5e8;color:#56684f;text-align:right;padding:5px 10px;">1.6</td></tr>
            <tr><td style="padding:5px 10px;font-style:italic;white-space:nowrap;">Brucella abortus</td><td style="background:#6cc46f;color:#07230e;text-align:right;padding:5px 10px;">1</td><td style="background:#ecf5e8;color:#56684f;text-align:right;padding:5px 10px;">2</td><td style="background:#0b4912;color:#fff;text-align:right;padding:5px 10px;">0.02</td></tr>
            <tr><td style="padding:5px 10px;font-style:italic;white-space:nowrap;">Escherichia coli</td><td style="background:#fff;color:#aab6a4;text-align:right;padding:5px 10px;">100</td><td style="background:#6cc46f;color:#07230e;text-align:right;padding:5px 10px;">0.4</td><td style="background:#0b4912;color:#fff;text-align:right;padding:5px 10px;">0.1</td></tr>
            <tr><td style="padding:5px 10px;font-style:italic;white-space:nowrap;">Klebsiella pneumoniae</td><td style="background:#fff;color:#aab6a4;text-align:right;padding:5px 10px;">850</td><td style="background:#ecf5e8;color:#56684f;text-align:right;padding:5px 10px;">1.2</td><td style="background:#6cc46f;color:#07230e;text-align:right;padding:5px 10px;">1</td></tr>
            <tr><td style="padding:5px 10px;font-style:italic;white-space:nowrap;">Mycobacterium tuberculosis</td><td style="background:#fff;color:#aab6a4;text-align:right;padding:5px 10px;">800</td><td style="background:#ecf5e8;color:#56684f;text-align:right;padding:5px 10px;">5</td><td style="background:#ecf5e8;color:#56684f;text-align:right;padding:5px 10px;">2</td></tr>
            <tr><td style="padding:5px 10px;font-style:italic;white-space:nowrap;">Proteus vulgaris</td><td style="background:#ecf5e8;color:#56684f;text-align:right;padding:5px 10px;">3</td><td style="background:#0b4912;color:#fff;text-align:right;padding:5px 10px;">0.1</td><td style="background:#0b4912;color:#fff;text-align:right;padding:5px 10px;">0.1</td></tr>
            <tr><td style="padding:5px 10px;font-style:italic;white-space:nowrap;">Pseudomonas aeruginosa</td><td style="background:#fff;color:#aab6a4;text-align:right;padding:5px 10px;">850</td><td style="background:#ecf5e8;color:#56684f;text-align:right;padding:5px 10px;">2</td><td style="background:#6cc46f;color:#07230e;text-align:right;padding:5px 10px;">0.4</td></tr>
            <tr><td style="padding:5px 10px;font-style:italic;white-space:nowrap;">Salmonella typhosa</td><td style="background:#6cc46f;color:#07230e;text-align:right;padding:5px 10px;">1</td><td style="background:#6cc46f;color:#07230e;text-align:right;padding:5px 10px;">0.4</td><td style="background:#0b4912;color:#fff;text-align:right;padding:5px 10px;">0.008</td></tr>
            <tr><td style="padding:5px 10px;font-style:italic;white-space:nowrap;">Salmonella schottmuelleri</td><td style="background:#ecf5e8;color:#56684f;text-align:right;padding:5px 10px;">10</td><td style="background:#6cc46f;color:#07230e;text-align:right;padding:5px 10px;">0.8</td><td style="background:#0b4912;color:#fff;text-align:right;padding:5px 10px;">0.09</td></tr>
            <tr><td colspan="4" style="padding:8px 10px 4px;font-size:0.72rem;letter-spacing:0.06em;text-transform:uppercase;color:#56684f;">Gram positive</td></tr>
            <tr><td style="padding:5px 10px;font-style:italic;white-space:nowrap;">Bacillus anthracis</td><td style="background:#0b4912;color:#fff;text-align:right;padding:5px 10px;">0.001</td><td style="background:#0b4912;color:#fff;text-align:right;padding:5px 10px;">0.01</td><td style="background:#0b4912;color:#fff;text-align:right;padding:5px 10px;">0.007</td></tr>
            <tr><td style="padding:5px 10px;font-style:italic;white-space:nowrap;">Diplococcus pneumoniae</td><td style="background:#0b4912;color:#fff;text-align:right;padding:5px 10px;">0.005</td><td style="background:#fff;color:#aab6a4;text-align:right;padding:5px 10px;">11</td><td style="background:#ecf5e8;color:#56684f;text-align:right;padding:5px 10px;">10</td></tr>
            <tr><td style="padding:5px 10px;font-style:italic;white-space:nowrap;">Staphylococcus albus</td><td style="background:#0b4912;color:#fff;text-align:right;padding:5px 10px;">0.007</td><td style="background:#0b4912;color:#fff;text-align:right;padding:5px 10px;">0.1</td><td style="background:#0b4912;color:#fff;text-align:right;padding:5px 10px;">0.001</td></tr>
            <tr><td style="padding:5px 10px;font-style:italic;white-space:nowrap;">Staphylococcus aureus</td><td style="background:#0b4912;color:#fff;text-align:right;padding:5px 10px;">0.03</td><td style="background:#0b4912;color:#fff;text-align:right;padding:5px 10px;">0.03</td><td style="background:#0b4912;color:#fff;text-align:right;padding:5px 10px;">0.001</td></tr>
            <tr><td style="padding:5px 10px;font-style:italic;white-space:nowrap;">Streptococcus fecalis</td><td style="background:#6cc46f;color:#07230e;text-align:right;padding:5px 10px;">1</td><td style="background:#6cc46f;color:#07230e;text-align:right;padding:5px 10px;">1</td><td style="background:#0b4912;color:#fff;text-align:right;padding:5px 10px;">0.1</td></tr>
            <tr><td style="padding:5px 10px;font-style:italic;white-space:nowrap;">Streptococcus hemolyticus</td><td style="background:#0b4912;color:#fff;text-align:right;padding:5px 10px;">0.001</td><td style="background:#fff;color:#aab6a4;text-align:right;padding:5px 10px;">14</td><td style="background:#ecf5e8;color:#56684f;text-align:right;padding:5px 10px;">10</td></tr>
            <tr><td style="padding:5px 10px;font-style:italic;white-space:nowrap;">Streptococcus viridans</td><td style="background:#0b4912;color:#fff;text-align:right;padding:5px 10px;">0.005</td><td style="background:#ecf5e8;color:#56684f;text-align:right;padding:5px 10px;">10</td><td style="background:#fff;color:#aab6a4;text-align:right;padding:5px 10px;">40</td></tr>
          </tbody>
        </table>
        <p style="font-size:0.78rem;color:#56684f;margin:14px 0 0;font-style:italic;">MIC in µg/mL (the lower the value, the more effective the antibiotic). Dark green: highly effective; light green: effective; pale tint: weakly effective; white: ineffective.</p>
      </div>


In a single grid, everything the circle hid appears. You read a value effortlessly. You compare two antibiotics by sliding your eye along a row. You spot at a glance the columns that are greener overall. The color does not decorate: it carries the information, and a box could even flag the best antibiotic in each row.


## One table per question


Still, that is a lot to take in at once. The remedy is old — Florence Nightingale already practiced it: **one table per question**. Rather than showing everything, you decide what you are looking for. Let's ask a precise question: "which molecule should I choose to treat this bacterium?" It is then enough to keep only the best antibiotic in each row in green, and to let the rest recede.


<div class="image-frame" style="overflow-x:auto;border:1px solid #dbe8d6;border-radius:16px;padding:16px;background:#fff;margin:2rem 0;">
        <table style="border-collapse:collapse;width:100%;font-size:0.85rem;min-width:520px;">
          <thead>
            <tr>
              <th style="text-align:left;padding:7px 10px;border-bottom:2px solid #0b4912;color:#0b4912;">Bacterium</th>
              <th style="text-align:right;padding:7px 10px;border-bottom:2px solid #0b4912;color:#0b4912;">Penicillin</th>
              <th style="text-align:right;padding:7px 10px;border-bottom:2px solid #0b4912;color:#0b4912;">Streptomycin</th>
              <th style="text-align:right;padding:7px 10px;border-bottom:2px solid #0b4912;color:#0b4912;">Neomycin</th>
            </tr>
          </thead>
          <tbody>
            <tr><td colspan="4" style="padding:8px 10px 4px;font-size:0.72rem;letter-spacing:0.06em;text-transform:uppercase;color:#56684f;">Gram negative</td></tr>
            <tr><td style="padding:5px 10px;font-style:italic;white-space:nowrap;">Aerobacter aerogenes</td><td style="text-align:right;padding:5px 10px;color:#aab6a4;">870</td><td style="background:#0b4912;color:#fff;font-weight:700;text-align:right;padding:5px 10px;">1</td><td style="text-align:right;padding:5px 10px;color:#56684f;">1.6</td></tr>
            <tr><td style="padding:5px 10px;font-style:italic;white-space:nowrap;">Brucella abortus</td><td style="text-align:right;padding:5px 10px;color:#56684f;">1</td><td style="text-align:right;padding:5px 10px;color:#56684f;">2</td><td style="background:#0b4912;color:#fff;font-weight:700;text-align:right;padding:5px 10px;">0.02</td></tr>
            <tr><td style="padding:5px 10px;font-style:italic;white-space:nowrap;">Escherichia coli</td><td style="text-align:right;padding:5px 10px;color:#aab6a4;">100</td><td style="text-align:right;padding:5px 10px;color:#56684f;">0.4</td><td style="background:#0b4912;color:#fff;font-weight:700;text-align:right;padding:5px 10px;">0.1</td></tr>
            <tr><td style="padding:5px 10px;font-style:italic;white-space:nowrap;">Klebsiella pneumoniae</td><td style="text-align:right;padding:5px 10px;color:#aab6a4;">850</td><td style="text-align:right;padding:5px 10px;color:#56684f;">1.2</td><td style="background:#0b4912;color:#fff;font-weight:700;text-align:right;padding:5px 10px;">1</td></tr>
            <tr><td style="padding:5px 10px;font-style:italic;white-space:nowrap;">Mycobacterium tuberculosis</td><td style="text-align:right;padding:5px 10px;color:#aab6a4;">800</td><td style="text-align:right;padding:5px 10px;color:#56684f;">5</td><td style="background:#0b4912;color:#fff;font-weight:700;text-align:right;padding:5px 10px;">2</td></tr>
            <tr><td style="padding:5px 10px;font-style:italic;white-space:nowrap;">Proteus vulgaris</td><td style="text-align:right;padding:5px 10px;color:#56684f;">3</td><td style="background:#0b4912;color:#fff;font-weight:700;text-align:right;padding:5px 10px;">0.1</td><td style="background:#0b4912;color:#fff;font-weight:700;text-align:right;padding:5px 10px;">0.1</td></tr>
            <tr><td style="padding:5px 10px;font-style:italic;white-space:nowrap;">Pseudomonas aeruginosa</td><td style="text-align:right;padding:5px 10px;color:#aab6a4;">850</td><td style="text-align:right;padding:5px 10px;color:#56684f;">2</td><td style="background:#0b4912;color:#fff;font-weight:700;text-align:right;padding:5px 10px;">0.4</td></tr>
            <tr><td style="padding:5px 10px;font-style:italic;white-space:nowrap;">Salmonella typhosa</td><td style="text-align:right;padding:5px 10px;color:#56684f;">1</td><td style="text-align:right;padding:5px 10px;color:#56684f;">0.4</td><td style="background:#0b4912;color:#fff;font-weight:700;text-align:right;padding:5px 10px;">0.008</td></tr>
            <tr><td style="padding:5px 10px;font-style:italic;white-space:nowrap;">Salmonella schottmuelleri</td><td style="text-align:right;padding:5px 10px;color:#56684f;">10</td><td style="text-align:right;padding:5px 10px;color:#56684f;">0.8</td><td style="background:#0b4912;color:#fff;font-weight:700;text-align:right;padding:5px 10px;">0.09</td></tr>
            <tr><td colspan="4" style="padding:8px 10px 4px;font-size:0.72rem;letter-spacing:0.06em;text-transform:uppercase;color:#56684f;">Gram positive</td></tr>
            <tr><td style="padding:5px 10px;font-style:italic;white-space:nowrap;">Bacillus anthracis</td><td style="background:#0b4912;color:#fff;font-weight:700;text-align:right;padding:5px 10px;">0.001</td><td style="text-align:right;padding:5px 10px;color:#56684f;">0.01</td><td style="text-align:right;padding:5px 10px;color:#56684f;">0.007</td></tr>
            <tr><td style="padding:5px 10px;font-style:italic;white-space:nowrap;">Diplococcus pneumoniae</td><td style="background:#0b4912;color:#fff;font-weight:700;text-align:right;padding:5px 10px;">0.005</td><td style="text-align:right;padding:5px 10px;color:#aab6a4;">11</td><td style="text-align:right;padding:5px 10px;color:#56684f;">10</td></tr>
            <tr><td style="padding:5px 10px;font-style:italic;white-space:nowrap;">Staphylococcus albus</td><td style="text-align:right;padding:5px 10px;color:#56684f;">0.007</td><td style="text-align:right;padding:5px 10px;color:#56684f;">0.1</td><td style="background:#0b4912;color:#fff;font-weight:700;text-align:right;padding:5px 10px;">0.001</td></tr>
            <tr><td style="padding:5px 10px;font-style:italic;white-space:nowrap;">Staphylococcus aureus</td><td style="text-align:right;padding:5px 10px;color:#56684f;">0.03</td><td style="text-align:right;padding:5px 10px;color:#56684f;">0.03</td><td style="background:#0b4912;color:#fff;font-weight:700;text-align:right;padding:5px 10px;">0.001</td></tr>
            <tr><td style="padding:5px 10px;font-style:italic;white-space:nowrap;">Streptococcus fecalis</td><td style="text-align:right;padding:5px 10px;color:#56684f;">1</td><td style="text-align:right;padding:5px 10px;color:#56684f;">1</td><td style="background:#0b4912;color:#fff;font-weight:700;text-align:right;padding:5px 10px;">0.1</td></tr>
            <tr><td style="padding:5px 10px;font-style:italic;white-space:nowrap;">Streptococcus hemolyticus</td><td style="background:#0b4912;color:#fff;font-weight:700;text-align:right;padding:5px 10px;">0.001</td><td style="text-align:right;padding:5px 10px;color:#aab6a4;">14</td><td style="text-align:right;padding:5px 10px;color:#56684f;">10</td></tr>
            <tr><td style="padding:5px 10px;font-style:italic;white-space:nowrap;">Streptococcus viridans</td><td style="background:#0b4912;color:#fff;font-weight:700;text-align:right;padding:5px 10px;">0.005</td><td style="text-align:right;padding:5px 10px;color:#56684f;">10</td><td style="text-align:right;padding:5px 10px;color:#aab6a4;">40</td></tr>
          </tbody>
        </table>
        <p style="font-size:0.78rem;color:#56684f;margin:14px 0 0;font-style:italic;">A single question: the best antibiotic for each bacterium, in green. Everything else fades away.</p>
      </div>


The answer jumps out, row by row. And you could produce other tables for other questions: "for which bacteria is our arsenal weakest?" would call for a return to graded color, or even a composite score of the three molecules. One question, one table.


This is not the reflex of an epidemiologist starved for rigor. It is exactly the choice [Worldometer made during COVID](@root/en/articles/covid-dashboards.html): beneath its single chart, a simple table by country, serving as both a measuring instrument and a navigation tool. While others were building spectacular maps, the humblest object of visualization won there too.


One caveat, and a major one: this table answers *one* question — in vitro effectiveness — and that one alone. The real medical decision involves many others: toxicity (neomycin, so brilliant on paper, is too toxic for general use), spectrum, distribution within the body. The visualization shed light on one dimension; it did not make the decision. It is always so: a good visual makes a question legible, it does not exempt you from judgment.


## What this changes for the decision-maker


Anscombe and Burtin say, at bottom, the same thing by two opposite routes. Anscombe: do not trust a summary number, look at the shape. Burtin: do not trust the prettiest chart, look at the question. In both cases, **the tool is never good or bad in the absolute — it is so relative to what you are trying to know.**


That is exactly the reflex most corporate dashboards lack. People stack pie charts and gauges because "it looks visual", when a three-column colored grid would answer — faster — the question the executive is really asking. As [with the COVID dashboards](@root/en/articles/covid-dashboards.html), the useful reflex is not "what handsome chart can I make?" but "what is the question, and what answers it most directly?".


Next time someone offers you a chart, do not ask whether it is well made. Ask what question it helps settle. Sometimes the answer will be a scatter plot. Sometimes, it will be a table. And that is not an admission of defeat: it is the sign that the right question was asked.
