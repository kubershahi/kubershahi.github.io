---
layout: page
title: research
permalink: /research/
description: "Graduate and undergraduate research in machine learning and security, spanning medical image analysis at UCSD and privacy-preserving ML, adversarial attacks, and applied cryptography at Ashoka University."
nav: true
nav_order: 3
display_categories: []
horizontal: false
---

<!-- pages/research.md -->
<div class="research">
{% if site.enable_research_categories and page.display_categories %}
  <!-- Display categorized research -->
  {% for category in page.display_categories %}
    {% assign categorized_research = site.research | where: "category", category %}
    {% if categorized_research.size > 0 %}
      <a id="{{ category }}" href=".#{{ category }}">
        <h2 class="category">{{ category }}</h2>
      </a>
      {% assign sorted_research = categorized_research | sort: "importance" %}
      <!-- Generate cards for each research -->
      {% if page.horizontal %}
        <div class="container">
          <div class="row row-cols-1 row-cols-md-2">
            {% for research in sorted_research %}
              {% include research_horizontal.liquid %}
            {% endfor %}
          </div>
        </div>
      {% else %}
        <div class="row row-cols-1 row-cols-md-3">
          {% for research in sorted_research %}
            {% include research.liquid %}
          {% endfor %}
        </div>
      {% endif %}
    {% endif %}
  {% endfor %}

{% else %}

<!-- Display research without categories -->

{% assign sorted_research = site.research | sort: "importance" %}

  <!-- Generate cards for each research -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for research in sorted_research %}
      {% include research_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for research in sorted_research %}
      {% include research.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
