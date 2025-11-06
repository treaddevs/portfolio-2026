export const projects = [
  {
    type: "laptop",
    tabImg: "/svg/tab.svg",
    title: "Mental Healthcare<br>Data Visualization",
    desc: "Designing and developing for a startup helping parents of children struggling with cognitive and behavioral challenges",
    topImg: "/images/navi-top.png",
    bottomImg: "/images/navi-bottom.png",
    reverse: false,
    page: "navimental.html"
  },
  {
    type: "phone",
    tabImg: "/svg/tab.svg",
    title: "AI-integrated Chatbot",
    desc: `Training and configuring an AI-powered chatbot agent to propose project ideas, offer recipe suggestions, and respond to other requests for information on a product's <a href="https://www.armandhammer.com/en/for-everything-soda" target="_blank">webpage</a>`,
    topImg: "/images/chatbot-1.png",
    bottomImg: "/images/chatbot-2.png",
    reverse: true,
    page: "via.html"
  },
  {
    type: "laptop",
    tabImg: "/svg/tab.svg",
    title: "Communication App for<br>ESOL Educators",
    desc: `Building a full-stack application solution for the City of Portland, Maine's <a href="https://www.portlandmaine.gov/1537/ESOL-Collaborative" target="_blank">ESOL Collaborative</a>`,
    topImg: "/images/esol-top.png",
    bottomImg: "/images/esol-bottom.png",
    reverse: false,
    page: "esol.html"
  },
];

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

// Intersection Observer for .desc h2, p, button
const textAnimation = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      textAnimation.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll(".desc").forEach(desc => {
  textAnimation.observe(desc);
});


const projectsContainer = document.querySelector(".projects");

projects.forEach((project) => {
  const section = document.createElement("section");
  section.className = project.reverse ? "reverse" : "";

  const desc = `
    <div class="desc">
      <img class="tab" src="${project.tabImg}"/>
      <h2>${project.title}</h2>
      <p>${project.desc}</p>
      <button class="project-btn" data-page="${project.page}">
        <div class="project-btn-wrapper">
          <span>View project</span>
          <img class="new-window" src="/svg/new-window.svg">
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
            <img src="${project.topImg}" alt="laptop screen">
          </div>
          <div class="bottom">
            <img src="${project.bottomImg}" alt="laptop base">
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
              <img src="${project.topImg}" alt="Chatbot conversation"> 
            </div>
            <div class="phone-bottom">
              <img src="${project.bottomImg}" alt="Chatbot logo">
            </div>
          </div>
        </div>
      </div>
    `;
  }

  section.innerHTML = project.reverse ? media + desc : desc + media;

  projectsContainer.appendChild(section);

  const projectBtn = section.querySelector(".project-btn");
  if (projectBtn && project.page) {
    projectBtn.addEventListener("click", () => {
      window.location.href = project.page;
    });
  }

  const tabImg = section.querySelector(".tab");
  if (tabImg) tabAnimation.observe(tabImg);

  document.querySelectorAll(".desc h2, .desc p, .desc button").forEach((el) => {
    textAnimation.observe(el);
  });
});


// Intersection Observer for Laptops
const laptopAnimation = document.querySelectorAll(".laptop-container");

laptopAnimation.forEach((scene) => {
  const laptopTop = scene.querySelector(".laptop .top");
  const laptopBottom = scene.querySelector(".laptop .bottom");

  const laptopObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          laptopTop.classList.add("show");
          laptopBottom.classList.add("show");
        }, 1000);

        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  laptopObserver.observe(scene);
});


// Intersection Observer for Phones
const phoneAnimations = document.querySelectorAll(".phone-container");

phoneAnimations.forEach((container) => {
  const phoneTop = container.querySelector(".phone-top");
  const phoneBottom = container.querySelector(".phone-bottom");

  phoneTop.classList.add("init");
  phoneBottom.classList.add("init");
});

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

phoneAnimations.forEach((section) => phoneObserver.observe(section));