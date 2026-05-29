export const projects = [
  {
    type: "phone",
    tabImg: "/svg/tab.svg",
    title: "PocketChef -<br>Recipe & Meal<br>Planning App",
    category: "Case Study",
    skills: ["Product Design", "User Research", "UX/UI", "Design Systems"],
    desc: "Improving recipe discovery and meal planning management.",
    topImg: "/images/pocketchef-1.webp",
    bottomImg: "/images/pocketchef-2.webp",
    reverse: false,
    page: "pocketchef.html"
  },
  {
    type: "laptop",
    tabImg: "/svg/tab.svg",
    title: "Navimental -<br>Mental Health<br>Dashboard",
    category: "Project",
    skills: ["Product Design", "UX/UI", "Dashboard Design", "Data Visualization"],
    desc: "Translating user data into actionable wellness insights.",
    topImg: "/images/navi-top.webp",
    bottomImg: "/images/navi-bottom.webp",
    reverse: false,
    page: "navimental.html"
  },
  {
    type: "phone",
    tabImg: "/svg/tab.svg",
    title: "Boredom-Blaster -<br>AI-Powered Chatbot",
    category: "Project",
    skills: ["Product Design", "UX/UI", "AI", "Branding", "Web Development"],
    desc: "Building an AI-powered conversational product discovery experience.",
    topImg: "/images/chatbot-1.webp",
    bottomImg: "/images/chatbot-2.webp",
    reverse: false,
    page: "via.html"
  },
  {
    type: "phone",
    tabImg: "/svg/tab.svg",
    title: "Canopy -<br>Mobile Banking App",
    category: "Case Study",
    skills: ["Product Design", "UX/UI", "Branding"],
    desc: "Streamlining financial tracking and budgeting through mobile-first design.",
    topImg: "/images/canopy-1.webp",
    bottomImg: "/images/canopy-2.webp",
    reverse: false,
    page: "canopy.html"
  },
  {
    type: "laptop",
    tabImg: "/svg/tab.svg",
    title: "Communication App for Language Educators",
    category: "Project",
    skills: ["Product Design", "User Research", "UX/UI", "Full-Stack Development"],
    desc: "Supporting multilingual learning through accessible educator communication workflows.",
    topImg: "/images/esol-top.webp",
    bottomImg: "/images/esol-bottom.webp",
    reverse: false,
    page: "esol.html"
  },
  {
    type: "desktop",
    tabImg: "/svg/tab.svg",
    title: "Solana Solar -<br>Home Energy<br>Dashboard",
    category: "Case Study",
    skills: ["Product Design", "UX/UI", "Dashboard Design", "Data Visualization"],
    desc: "Simplifying home solar energy monitoring through real-time data visualization.",
    singleImg: "/images/solana.webp",
    reverse: false,
    page: "solana.html"
  }
];

let expanded = false;

const projectsContainer = document.querySelector(".projects");
const showMoreBtn = document.querySelector("#show-more-btn");

// Intersection Observer for work-type h2
const workTypeAnimation = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        workTypeAnimation.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll(".work-type h2").forEach((el) => {
  workTypeAnimation.observe(el);
});

// Intersection Observer for Tab
const tabAnimation = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        tabAnimation.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

// Intersection Observer for pills-container
const pillsAnimation = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        pillsAnimation.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

// Intersection Observer for text
const textAnimation = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        textAnimation.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

// Intersection Observer for phones
const phoneObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const phoneTop = entry.target.querySelector(".phone-top");
        const phoneBottom = entry.target.querySelector(".phone-bottom");

        void phoneTop.offsetWidth;

        phoneTop.classList.remove("init");
        phoneTop.classList.add("animate");

        phoneBottom.classList.remove("init");
        phoneBottom.classList.add("animate");

        phoneObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

function renderProjects(projectArray) {
  projectsContainer.innerHTML = "";

  projectArray.forEach((project) => {
    const section = document.createElement("section");
    section.className = project.reverse ? "reverse" : "";

    const skillPills = (project.skills || [])
      .map((skill) => `<span class="pill skill-pill">${skill}</span>`)
      .join("");

    const desc = `
      <div class="desc">
        <div class="desc-content">
          <img class="tab" src="${project.tabImg}" alt="Blue tab icon"/>
          <h2>${project.title}</h2>
          <p>${project.desc}</p>
          <div class="pills-container">
            ${skillPills}
          </div>
        </div>

        <button class="project-btn" data-page="${project.page}">
          <div class="project-btn-wrapper">
            <span>${project.category}</span>
            <img class="new-window" src="/svg/new-window.svg" alt="New window icon">
          </div>
        </button>
      </div>
    `;

    let media = "";

    if (project.type === "laptop") {
      media = `
        <div class="laptop-container">
          <div class="laptop">
            <div class="top">
              <img src="${project.topImg}" alt="Project user interface displayed on Macbook laptop screen that animates and folds up">
            </div>

            <div class="bottom">
              <img src="${project.bottomImg}" alt="Macbook laptop keyboard">
            </div>
          </div>
        </div>
      `;
    } else if (project.type === "phone") {
      media = `
        <div class="phone-container">
          <div class="phone-wrapper">
            <div class="phone-inner">
              <div class="phone-top">
                <img src="${project.topImg}" alt="Logo for project displayed on iPhone 16">
              </div>

              <div class="phone-bottom">
                <img src="${project.bottomImg}" alt="Primary project user interface displayed on iPhone 16">
              </div>
            </div>
          </div>
        </div>
      `;
    } else if (project.type === "desktop") {
      media = `
        <div class="desktop-container">
          <div class="desktop">
            <img src="${project.singleImg}" alt="Primary project user interface displayed on desktop">
          </div>
        </div>
      `;
    }

    section.innerHTML = project.reverse ? media + desc : desc + media;

    projectsContainer.appendChild(section);

    // Button navigation
    const projectBtn = section.querySelector(".project-btn");

    if (projectBtn && project.page) {
      projectBtn.addEventListener("click", () => {
        window.location.href = project.page;
      });
    }

    // Observers
    const tabImg = section.querySelector(".tab");
    if (tabImg) tabAnimation.observe(tabImg);

    const pillsContainer = section.querySelector(".pills-container");
    if (pillsContainer) pillsAnimation.observe(pillsContainer);

    section.querySelectorAll(".desc h2, .desc p, .desc button").forEach((el) => {
      textAnimation.observe(el);
    });

    // Laptop animation
    const laptopContainer = section.querySelector(".laptop-container");

    if (laptopContainer) {
      const laptopTop = laptopContainer.querySelector(".laptop .top");
      const laptopBottom = laptopContainer.querySelector(".laptop .bottom");

      const laptopObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                laptopTop.classList.add("show");
                laptopBottom.classList.add("show");
              }, 1000);

              laptopObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );

      laptopObserver.observe(laptopContainer);
    }

    // Phone animation
    const phoneContainer = section.querySelector(".phone-container");

    if (phoneContainer) {
      const phoneTop = phoneContainer.querySelector(".phone-top");
      const phoneBottom = phoneContainer.querySelector(".phone-bottom");

      phoneTop.classList.add("init");
      phoneBottom.classList.add("init");

      phoneObserver.observe(phoneContainer);
    }

    // Desktop animation
    const desktopContainer = section.querySelector(".desktop-container");

    if (desktopContainer) {
      const desktop = desktopContainer.querySelector(".desktop");

      const desktopObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                desktop.classList.add("show");
              }, 1000);

              desktopObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );

      desktopObserver.observe(desktopContainer);
    }
  });
}

// Initial render (first 4 projects)
renderProjects(projects.slice(0, 4));

// Show More / Show Less
showMoreBtn.addEventListener("click", () => {
  expanded = !expanded;

  if (expanded) {
    renderProjects(projects);

    showMoreBtn.innerHTML = `
      Show Less
      <img src="/images/chevron-down.webp" class="chevron rotate"/>
    `;
  } else {
    renderProjects(projects.slice(0, 4));

    showMoreBtn.innerHTML = `
      Show More Projects
      <img src="/images/chevron-down.webp" class="chevron"/>
    `;

    projectsContainer.scrollIntoView({
      behavior: "smooth"
    });
  }
});