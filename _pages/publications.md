---
layout: page
permalink: /publications/
title: Research
description: Publications in reversed chronological order.
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<!-- =================================================================== -->
<!--                        "JUMP TO" LINKS                              -->
<!-- =================================================================== -->
<p style="text-align: center; font-size: 1.1rem;">
  Jump to: 
  <a href="#peer-reviewed">Peer-Reviewed Publications</a> |
  <a href="#working-papers">Working Papers</a> |
  <a href="#work-in-progress">Work in Progress</a>
</p>
<hr> 
<!-- The <hr> adds a nice horizontal line for visual separation -->


<div class="publications">

  <!-- =================================================================== -->
  <!--                      PUBLISHED PAPERS SECTION                       -->
  <!-- =================================================================== -->
  <!-- Add the id="peer-reviewed" here -->
  <h2 id="peer-reviewed" class="mt-4">Peer-Reviewed Publications</h2>
  {% bibliography --query @*[status=published] %}


  <!-- =================================================================== -->
  <!--                        WORKING PAPERS SECTION                       -->
  <!-- =================================================================== -->
  <!-- Add the id="working-papers" here -->
  <h2 id="working-papers" class="mt-5">Working Papers</h2>
  {% bibliography --query @*[status=working-paper] %}


  <!-- =================================================================== -->
  <!--                      WORK IN PROGRESS SECTION                       -->
  <!-- =================================================================== -->
  <!-- Add the id="work-in-progress" here -->
  <h2 id="work-in-progress" class="mt-5">Work in Progress</h2>
  {% bibliography --query @*[status=in-progress] %}

</div>