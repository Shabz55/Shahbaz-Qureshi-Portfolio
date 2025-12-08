// assets/js/main.js

// Small helper for the GitHub icon
function githubIcon() {
  return `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
      aria-hidden="true">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37
      3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54
      6.44-7A5.44 5.44 0 0 0 20 4.77 5.07
      5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38
      13.38 0 0 0-7 0C6.27.65 5.09 1
      5.09 1A5.07 5.07 0 0 0 5 4.77a5.44
      5.44 0 0 0-1.5 3.78c0 5.42 3.3
      6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    </svg>
  `;
}

// ------- Render the project cards (no videos here) -------
// How many projects to show before clicking "View More"
const INITIAL_PROJECTS = 4;
let showingAllProjects = false;

function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  const viewMoreBtn = document.getElementById("viewMoreBtn");
  if (!grid) return;

  // If not expanded, show only first N projects
  const visibleProjects = showingAllProjects
    ? PROJECTS
    : PROJECTS.slice(0, INITIAL_PROJECTS);

  grid.innerHTML = visibleProjects
    .map((proj) => {
      return `
        <article class="project-card" data-project-id="${proj.id}">
          <div class="project-body">
            <div class="project-header-row">
              <h3 class="project-title">${proj.title}</h3>
              <div class="project-tech">${proj.tech}</div>
            </div>
            <p class="project-desc">${proj.description}</p>
          </div>
          <div class="project-footer">
            ${
              proj.github
                ? `<a class="project-link-btn" href="${proj.github}" target="_blank" rel="noopener noreferrer">
                    ${githubIcon()}
                    <span>GitHub Repo</span>
                  </a>`
                : ""
            }
            <button class="project-open-btn">View details</button>
          </div>
        </article>
      `;
    })
    .join("");

  setupProjectCardClicks();

  // Update button behavior + label
  if (PROJECTS.length > INITIAL_PROJECTS) {
    viewMoreBtn.style.display = "block";
    viewMoreBtn.textContent = showingAllProjects ? "View Less" : "View More Projects";
  } else {
    viewMoreBtn.style.display = "none";
  }
}
document.getElementById("viewMoreBtn").addEventListener("click", () => {
  showingAllProjects = !showingAllProjects;
  renderProjects();
});


// ------- Build the video block for the modal -------
function getVideoHTML(proj) {
  if (proj.videoType === "youtube" && proj.videoSrc) {
    return `
      <iframe
        src="${proj.videoSrc}"
        title="${proj.title} demo"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    `;
  }

  if (proj.videoType === "mp4" && proj.videoSrc) {
    return `
      <video controls>
        <source src="${proj.videoSrc}" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    `;
  }

  return `
    <div class="modal-video-placeholder">
      Demo video coming soon.
    </div>
  `;
}

// ------- Modal logic -------
function setupProjectCardClicks() {
  const grid = document.getElementById("projectsGrid");
  const modal = document.getElementById("projectModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalTech = document.getElementById("modalTech");
  const modalVideo = document.getElementById("modalVideo");
  const modalDesc = document.getElementById("modalDesc");
  const modalGithub = document.getElementById("modalGithub");
  const closeBtn = document.getElementById("modalCloseBtn");

  if (!grid || !modal) return;

  function openModal(projectId) {
    const proj = PROJECTS.find((p) => p.id === projectId);
    if (!proj) return;

    modalTitle.textContent = proj.title;
    modalTech.textContent = proj.tech;
    modalVideo.innerHTML = getVideoHTML(proj);
    modalDesc.textContent = proj.description;

    if (proj.github) {
      modalGithub.href = proj.github;
      modalGithub.style.display = "inline-flex";
    } else {
      modalGithub.style.display = "none";
    }

    modal.classList.remove("hidden");
  }

  function closeModal() {
    modal.classList.add("hidden");
    // pause any playing video
    const vid = modalVideo.querySelector("video");
    if (vid) {
      vid.pause();
    }
  }

  // Click on card or 'View details' button
  grid.addEventListener("click", (e) => {
    const card = e.target.closest(".project-card");
    if (!card) return;
    const id = Number(card.getAttribute("data-project-id"));
    if (!Number.isNaN(id)) {
      openModal(id);
    }
  });

  // Close button
  if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
  }

  // Click on backdrop
  modal.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal-backdrop")) {
      closeModal();
    }
  });

  // Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeModal();
    }
  });
}

// ------- Footer year -------
function setYear() {
  const y = document.getElementById("year");
  if (y) {
    y.textContent = new Date().getFullYear();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  setYear();
});
