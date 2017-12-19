---
layout: base
title: systems
---

# Notes on Systems

Despite multiple efforts, I prefer reading and scribbling on paper copies of papers. Indubitably worse, I read papers pretty sloppily during the research process because I generally feel a rush to find answers. So here's an attempt to read in a more..."scholarly" way...and take some notes electronically.

{% assign papers = site.pages | where: 'type','paper' | sort: 'date' %}

Last updated on {{ papers | last | map: 'date' }}.

## SOSP 2017 ([Program](https://www.sigops.org/sosp/sosp17/program.html))
<ul>
{% for paper in papers %}
{% if paper.venue == "SOSP" and paper.year == 2017 %}
  <li><a href="{{ paper.url }}">(summary)</a> {{ paper.title }} (Added: {{ paper.date }})</li>
{% endif %}
{% endfor %}
</ul>

## Unorganized
<ul>

{% for paper in papers %}
{% if paper.categories contains 'unorganized' %}
  <li><a href="{{ paper.url }}">(summary)</a> {{ paper.title }} (Added: {{ paper.date }})</li>
{% endif %}
{% endfor %}
</ul>
