document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("form-message").textContent =
      "Thank you for reaching out! I will get back to you soon.";
    this.reset();
  });

async function fetchGitHubRepos(username) {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`
  );
  if (!response.ok) return [];
  return response.json();
}

function createProjectCard(repo) {
  return `\n    <div class=\"project\">\n      <h3><a href=\"${
    repo.html_url
  }\" target=\"_blank\">${repo.name}</a></h3>\n      <p>${
    repo.description || "No description provided."
  }</p>\n      <div class=\"project-meta\">\n        <span>★ ${
    repo.stargazers_count
  }</span>\n        <span>Forks: ${
    repo.forks_count
  }</span>\n        <span>Language: ${
    repo.language || "N/A"
  }</span>\n      </div>\n    </div>\n  `;
}

async function displayGitHubProjects() {
  const username = "injaamam";
  const projectList = document.querySelector(".project-list");
  projectList.innerHTML = '<div class="loading">Loading projects...</div>';
  const repos = await fetchGitHubRepos(username);
  if (!repos.length) {
    projectList.innerHTML =
      '<div class="error">Could not load projects from GitHub.</div>';
    return;
  }
  projectList.innerHTML = repos.map(createProjectCard).join("");
}

displayGitHubProjects();
