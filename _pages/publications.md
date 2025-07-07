---
layout: page
permalink: /publications/
title: Publications
description: Publications in reversed chronological order.
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->
<div class="publications">

  <!-- =================================================================== -->
  <!--                      PUBLISHED PAPERS SECTION                       -->
  <!-- =================================================================== -->
  <h2 class="mt-4">Peer-Reviewed Publications</h2>
  {% bibliography --query @*[status=published] %}


  <!-- =================================================================== -->
  <!--                        WORKING PAPERS SECTION                       -->
  <!-- =================================================================== -->
  <h2 class="mt-5">Working Papers</h2>
  {% bibliography --query @*[status=working-paper] %}


  <!-- =================================================================== -->
  <!--                      WORK IN PROGRESS SECTION                       -->
  <!-- =================================================================== -->
  <h2 class="mt-5">Work in Progress</h2>
  {% bibliography --query @*[status=in-progress] %}

</div>