---
layout: base
title: Bitcoin Project
---

# Cryptocurrencies
An ongoing learning project with several parts: software development, journal club, and survey notes. My writing (hopefully) represents my current understanding. I would be delighted to be corrected or guided by others.

## Software packages
- [Crypto.jl](https://github.com/danielsuo/Crypto.jl): A library that wraps OpenSSL, but also has pure Julia implementations for reference.
- [Coin.jl](https://github.com/danielsuo/Coin.jl): A (self-educational, incomplete, and likely incorrect) library for working with Bitcoin written in Julia

## Reading List
Borrowed heavily from the [Satoshi Nakamoto Institute](http://nakamotoinstitute.org/). Bullets without links are future readings. Notes linked where available.

<ul>

{% for resource in site.data.bitcoin.literature.bitcoin %}
  <li>
    {% if resource.notes %}
      (<a href="{{ resource.notes }}">Notes</a>)
    {% endif %}
    <a href="literature/{{ resource.slug }}.html">{{ resource.title }}</a>

    -

    {% for author in resource.author %}
      {% assign data = site.data.bitcoin.literature.authors | where:'slug', author %}
      
      {{ data[0].first }} {{ data[0].middle }} {{ data[0].last }}{% unless forloop.last %},{% endunless %}
    {% endfor %}
    ({{ resource.date }})
  </li>
{% endfor %}

</ul>>

## Major ideas
To provide explanations and context.

## New ideas
To address limitations and introduce extensions.