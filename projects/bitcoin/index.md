---
layout: base
title: Bitcoin Project
---

# Bitcoin resources
Borrowed heavily from the [Satoshi Nakamoto Institute](http://nakamotoinstitute.org/).

<ul>

{% for resource in site.data.bitcoin.literature.bitcoin.docs %}
  <li>
    {% if resource.review %}
      (<a href="review/{{ resource.slug }}.html">Review</a>)
    {% endif %}
    <a href="literature/{{ resource.link }}">{{ resource.title }}</a>
  </li>
{% endfor %}

</ul>>