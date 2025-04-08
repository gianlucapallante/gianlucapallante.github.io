---
title: Teaching
layout: archive
title: "Teaching and Course Material"
permalink: /_pages/teaching/
entries_layout: grid
classes: wide
---


Welcome to the teaching page! Here you’ll find links to courses and their associated topics (Under preparation)

<!--
{% for course in site.teaching_courses %}
<div class="course">
  <h2>
    {{ course.title }}
    <button onclick="toggleTopics('{{ course.slug }}')">Show Topics</button>
  </h2>

  <div id="{{ course.slug }}" class="topics-list" style="display: none;">
    <ul>
      {% for topic in course.topics %}
      <li>
        {{ topic.title }}
        <form onsubmit="return showDownloadLink(event, '{{ topic.url }}')">
          <label for="email">Enter your email to download:</label>
          <input type="email" name="email" required placeholder="your-email@example.com">
          <button type="submit">Submit</button>
        </form>
        <div class="download-link" style="display: none;">
          <a href="{{ topic.url }}" target="_blank">Download Material</a>
        </div>
      </li>
      {% endfor %}
    </ul>
  </div>
</div>
{% endfor %}

<script>
function showDownloadLink(event, downloadUrl) {
  event.preventDefault(); // Prevent form from submitting
  
  const form = event.target;
  const email = form.querySelector('input[name="email"]').value;
  const downloadLinkDiv = form.nextElementSibling;

  // Simple email validation pattern
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailPattern.test(email)) {
    downloadLinkDiv.style.display = "block"; // Show the download link
    form.style.display = "none"; // Hide the form
  } else {
    alert("Please enter a valid email address.");
  }
}
</script>


<script>
function toggleTopics(courseId) {
  const topicsDiv = document.getElementById(courseId);
  const isHidden = topicsDiv.style.display === "none";

  // Toggle visibility
  topicsDiv.style.display = isHidden ? "block" : "none";
}
</script>

<style>
button {
  background-color: #007acc;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 0.9em;
  border-radius: 3px;
  margin-left: 10px;
}

button:hover {
  background-color: #005fa3;
}

.topics-list {
  margin-top: 10px;
  margin-left: 20px;
}

button {
  background-color: #007acc;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 0.9em;
  border-radius: 3px;
  margin-left: 10px;
}

button:hover {
  background-color: #005fa3;
}

.topics-list ul {
  list-style-type: disc;
  padding-left: 20px;
}

.topics-list li {
  margin: 10px 0;
}

.download-link a {
  color: #007acc;
  font-weight: bold;
}

form {
  margin-top: 5px;
}
</style>
-->
