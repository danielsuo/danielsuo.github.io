---
layout: base
title: systems
---

# Notes on Systems

Despite multiple efforts, I prefer reading and scribbling on paper copies of papers. Indubitably worse, I read papers pretty sloppily during the research process because I generally feel a rush to find answers. So here's an attempt to read in a more..."scholarly" way...and take some notes electronically.

## SOSP 2017 ([Program](https://www.sigops.org/sosp/sosp17/program.html))
<ul>
{% for page in site.pages %}
{% if page.venue == "SOSP" and page.year == 2017 %}
  <li><a href="{{ page.url }}">(summary)</a> {{ page.title }} (Added: {{ page.date }})</li>
{% endif %}
{% endfor %}
</ul>
