const thisYear = document.getElementById("current-year");
const thisDate = new Date();
thisYear.textContent = thisDate.getFullYear();

// Theme initialization
const lightDarkMode = document.getElementById("theme-toggle");

// Default theme is dark
const savedTheme = localStorage.getItem("theme") || "dark";
let isDarkMode = savedTheme === "dark";

updateVideoSource();
updateNavbarToggler();

lightDarkMode.addEventListener("click", toggleTheme);

function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.documentElement.classList.toggle('dark-mode', isDarkMode);
    document.documentElement.classList.toggle('light-mode', !isDarkMode);

    document.querySelector('#theme-toggle')?.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

    updateVideoSource();
    updateNavbarToggler();
}

function updateNavbarToggler() {
    const navbar = document.querySelector('.navbar');
    const navbarToggler = document.querySelector('.navbar-toggler');

    if (navbar) {
        navbar.style.backgroundColor = 'var(--nav-bg-color)';
    }

    if (navbarToggler) {
        navbarToggler.style.backgroundColor = 'var(--toggler-bg-color)';
    }
}

function updateVideoSource() {
    const videoSource = document.getElementById('video-source');
    const video = document.getElementById('bg-video');
    if (!videoSource || !video) return;

    const newSrc = isDarkMode ? '/videos/golden-dust.mp4' : '/videos/golden-dust-negate.mp4'

    if (video.src !== new URL(newSrc, window.location.href).href) {
        videoSource.src = newSrc;
        video.load();
    }
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

const emailBtn = document.querySelector(".email");
const toast = document.querySelector("#toast");

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 1500);
}

emailBtn.addEventListener("click", async (e) => {
  e.preventDefault();

  const email = "s.treadwell11@gmail.com";

  try {
    await navigator.clipboard.writeText(email);
    showToast("Email copied!");
  } catch (err) {
    console.error("Copy failed", err);
    showToast("Failed to copy");
  }
});
