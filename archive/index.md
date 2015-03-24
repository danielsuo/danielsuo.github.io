---
layout: base
title: archive
---

<h2>Archive</h2>

{% for post in site.categories['main'] %}
  {% capture currentyear %} {{ post.date | date: "%Y" }} {% endcapture %}
  {% capture currentmonth %} {{ post.date | date: "%B" }} {% endcapture %}

  {% if currentyear != year  %}
    {% if currentmonth != month  %}
      <h3>{{currentmonth}} {{ currentyear }}</h3>
      {% capture year %}{{ currentyear }}{% endcapture %}
      {% capture month %}{{ currentmonth }}{% endcapture %}
    {% endif %}
  {% endif %}
    <p><a href="{{ post.url }}">{{ post.title }}</a></p>
{% endfor %}