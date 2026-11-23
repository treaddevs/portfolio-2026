const thisYear = document.getElementById("current-year");
const thisDate = new Date();
thisYear.textContent = thisDate.getFullYear();

function updateTime() {
    const now = new Date();

    const time = new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
        timeZone: "America/New_York"
    }).format(now);

    document.getElementById("current-time").textContent = 
        `${time} ET`
}

updateTime();
setInterval(updateTime, 1000);

function updateThemeToggle() {
    document.querySelector('#theme-toggle')?.setAttribute(
        'data-theme',
        isDarkMode ? 'dark' : 'light'
    );
}

// Theme initialization
const lightDarkMode = document.getElementById("theme-toggle");

// Default theme is dark
const savedTheme = localStorage.getItem("theme") || "dark";
let isDarkMode = savedTheme === "dark";

updateThemeToggle();
updateHeaderBackground();
updateArrow();
updatePenTool();
updateUXEngineer();
updateNavimentalLogo();

lightDarkMode.addEventListener("click", toggleTheme);

function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.documentElement.classList.toggle('dark-mode', isDarkMode);
    document.documentElement.classList.toggle('light-mode', !isDarkMode);

    document.querySelector('#theme-toggle')?.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

    updateThemeToggle();
    updateHeaderBackground();
    updateArrow();
    updatePenTool();
    updateUXEngineer();
    updateNavimentalLogo();
}

function updateHeaderBackground() {
    const imageSource = document.getElementById('header-background');
    const image = document.getElementById('background-img');
    if (!imageSource || !image) return;

    const newSrc = isDarkMode ? '/images/header-background-negative.webp' : '/images/header-background.webp'

    if (image.src !== new URL(newSrc, window.location.href).href) {
        image.src = newSrc;
    }
}

function updateArrow() {
    const image = document.getElementById('arrow-img');
    if (!image) return;

    const newSrc = isDarkMode
        ? '/images/dotted-arrow-white.gif'
        : '/images/dotted-arrow-black.gif';

    image.dataset.src = newSrc;

    if (image.src !== new URL(newSrc, window.location.href).href) {
        image.src = newSrc;
    }
}

function updateUXEngineer() {
    const imageSource = document.getElementById('ux-engineer');
    const image = document.getElementById('ux-engineer-img');
    if (!imageSource || !image) return;

    const newSrc = isDarkMode ? '/images/ux-engineer-dark-mode.webp' : '/images/ux-engineer-light-mode.webp'

    if (image.src !== new URL(newSrc, window.location.href).href) {
        image.src = newSrc;
    }
}

function updatePenTool() {
    const image = document.getElementById('pen-tool-img');
    if (!image) return;

    const newSrc = isDarkMode
        ? '/images/pen-tool-white.png'
        : '/images/pen-tool-black.png';

    image.dataset.src = newSrc;

    if (image.src !== new URL(newSrc, window.location.href).href) {
        image.src = newSrc;
    }
}

function updateNavimentalLogo() {
    const logos = document.querySelectorAll('.navimental-logo');
    const newSrc = isDarkMode
        ? '/images/navimental-logo-white.webp'
        : '/images/navimental-logo.webp';

    logos.forEach(logo => {
        logo.src = newSrc;
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const headshot = document.querySelector(".headshot-img");
    if (!headshot) return;

    const wipe = headshot.querySelector(".wipe");
    const img = headshot.querySelector("img");
    let hasRevealed = false;

    const revealHeadshot = () => {
        if (hasRevealed) return;
        hasRevealed = true;

        wipe.style.animation = "wipe-in-out 1.8s ease-in-out forwards";

        setTimeout(() => {
            img.style.opacity = "1";
        }, 400);
        
        wipe.addEventListener(
            "animationend",
            () => {
                wipe.style.display = "none";
            },
            { once: true }
        );
    };

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !hasRevealed) {
                    revealHeadshot();
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.4 }
    );

    observer.observe(headshot);
});

const navbarCollapse = document.getElementById("navbarNavAltMarkup");
const navbarToggler = document.querySelector(".navbar-toggler");
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

let menuOpen = false;

navbarToggler.addEventListener("click", () => {
    menuOpen = !menuOpen;

    if (menuOpen) {
        navbarCollapse.classList.add("show");
        document.body.classList.add("nav-open");
    } else {
        navbarCollapse.classList.remove("show");
        document.body.classList.remove("nav-open");
    }
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (menuOpen) {
            navbarCollapse.classList.remove("show");
            document.body.classList.remove("nav-open");
            menuOpen = false;
        }
    });
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 991) {
        document.body.classList.remove("nav-open");
        navbarCollapse.classList.remove("show");
        menuOpen = false;
    }
});

const toast = document.querySelector("#toast");

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 1500);
}

async function handleCopy(text) {
  try {
    await navigator.clipboard.writeText(text);
    showToast("Email copied!");
  } catch (err) {
    console.error("Copy failed", err);
    showToast("Failed to copy");
  }
}

document.addEventListener("click", (e) => {
    const el = e.target.closest("[data-copy]");
    if (!el) return;

    const value = el.dataset.copy;
    handleCopy(value);
});
