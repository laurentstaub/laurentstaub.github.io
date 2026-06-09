---
slug: averages-anscombe-quartet
title: "Anscombe's quartet, or why your averages lie to you"
description: "Four datasets, identical statistics, four opposite realities. Anscombe's quartet shows why a summary number is never enough to decide."
date: 2026-06-05
meta: "Data · Visualization · Decision-making"
summary: "Four datasets, identical statistics, four opposite realities. The visual proof that a summary number is never enough to decide."
draft: false
---
There is a question I ask myself at every dashboard I am shown: why bother with a chart at all? After all, a tidy table of statistics — a mean here, a standard deviation there — ought to be enough to form a view. It is a serious objection, and the best answer I know fits in four scatter plots. It comes from an English statistician, Francis Anscombe, who published a short paper in 1973 that went on to become famous.


## Four datasets, identical statistics


Anscombe builds four sets of eleven points each. He chooses them so that they share **exactly the same statistical characteristics**: the same mean in x, the same mean in y, the same variance, the same correlation, and therefore the same regression line (y = 3 + 0.5 x). On paper, in any report, the four sets would be strictly interchangeable.



<div class="image-frame" style="border:1px solid var(--line);border-radius:var(--radius-lg);padding:16px 20px;background:var(--tint);margin:2rem 0;font-size:var(--text-sm);color:var(--muted);text-align:center;">
        For all four sets: mean x = 9.0 · mean y = 7.5 · variance x = 11.0 · variance y = 4.1 · correlation = 0.82 · line: y = 3 + 0.5 x
      </div>


Stare at those numbers as long as you like: there is no way to guess what the data has inside. Now let's draw it.



<figure>
        <svg viewBox="0 0 660 480" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The four scatter plots of Anscombe's quartet: an ordinary linear relationship, a curve, a near-perfect line with one outlier, and a vertical column with one isolated point. All share the same regression line.">
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
        <figcaption>The four datasets of Anscombe's quartet. Same statistics, same regression line (in green), four unrelated realities.</figcaption>
      </figure>


And everything changes. The first set is what the statistics led us to imagine: an ordinary cloud around a line. The second is not linear at all — it is a perfect curve, and the regression line misses the point entirely. The third is a near-perfect line, except for **a single outlier** that is enough to swing the whole regression. The fourth is more brutal still: every x is identical but one, and it is that single isolated point on the right that single-handedly creates the illusion of a relationship.


## The summary erases what matters


Here is the heart of it: **four radically different stories, perfectly invisible in the summary numbers**. Had you been handed the table of statistics alone, you would have treated all four situations the same way. Yet they call for entirely different decisions. Set II tells you to change your model. Set III tells you to go and understand that one outlier — a data-entry error? a special case rich in lessons? Set IV tells you your beautiful correlation rests on a single observation, and that it will collapse with the next one.


A statistical summary, by construction, throws away information to keep a compact version of it. That is useful, but it is never neutral: it decides for you what deserves to be seen. The average of an emergency room ticking along calmly and that of a room alternating dead nights with nights of crisis can be identical. The average is rarely what you care about.



> An average is an opinion about the data, not the data.


## What this changes for the decision-maker


Here, in pictorial form, is the idea that runs through all of my work: [the number is only a consequence](@root/en/articles/business-plan-list-of-assumptions.html), and the decision lies in what sits beneath it. A KPI on a dashboard is one more statistical summary. It may very well hide a Set II, a Set III or a Set IV — a trend that is bending, a customer who single-handedly carries all the growth, an average that reconciles two opposing populations.


The remedy costs almost nothing. Before deciding on an aggregate number, **look at the distribution it summarizes**: a scatter plot, a histogram, the series over time. Thirty seconds to check that the number is not lying by omission. It is exactly the discipline we apply when we evaluate an investment case or rethink a project portfolio: never let a single indicator stand in for reality.


Anscombe needed four drawings where a thousand words would not have done. Which is the irony of it: the best demonstration of the usefulness of charts is itself a chart. Next time someone hands you an average, don't only ask "how much?". Ask: "what does the distribution look like?".
