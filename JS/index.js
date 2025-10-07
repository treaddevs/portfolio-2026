const thisYear = document.getElementById("current-year");
const thisDate = new Date();
thisYear.textContent = thisDate.getFullYear();

// Theme initialization
const lightDarkMode = document.getElementById("theme-toggle");

// Default theme is dark
const savedTheme = localStorage.getItem("theme") || "dark";
let isDarkMode = savedTheme === "dark";

updateVideoSource();
updateIcons();
updateNavbarToggler();

// Event listner
lightDarkMode.addEventListener("click", toggleTheme);

function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.documentElement.classList.toggle('dark-mode', isDarkMode);
    document.documentElement.classList.toggle('light-mode', !isDarkMode);

    document.querySelector('#theme-toggler')?.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

    updateVideoSource();
    updateNavbarToggler();
    updateIcons();
}

// Helper functions
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

function updateIcons() {
    const allIcons = document.querySelectorAll('.social-icon');

    allIcons.forEach(icon => {
        const isLinkedIn = icon.src.includes('linkedin');
        const isFigma = icon.src.includes('figma');
        const isGitHub = icon.src.includes('github');

        if (isLinkedIn) {
            icon.src = isDarkMode ? '/SVG/linkedin-white.svg' : '/SVG/linkedin-black.svg';
        } else if (isFigma) {
            icon.src = '/SVG/figma-black.svg';
        } else if (isGitHub) {
            icon.src = isDarkMode ? '/SVG/github-white.svg' : '/SVG/github-black.svg';
        }
    });
}

function updateVideoSource() {
    const videoSource = document.getElementById('video-source');
    const video = document.getElementById('bg-video');
    if (!videoSource || !video) return;

    if (isDarkMode) {
        videoSource.src = '/Videos/golden-dust.mp4';
    } else {
        videoSource.src = '/Videos/golden-dust-negate.mp4';
    }
    video.load();
}