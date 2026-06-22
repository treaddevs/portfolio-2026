const text = document.querySelector(".title-text");
const wipe = document.querySelector(".primary-wipe");

// Intersection Observer for .sticky-note img
const stickyNoteAnimation = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                stickyNoteAnimation.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.5 }
);

const stickyNote = document.querySelector(".sticky-note img");
if (stickyNote) stickyNoteAnimation.observe(stickyNote);

// Intersection Observer for #arrow
const arrowAnimation = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                arrowAnimation.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.5 }
);

const arrow = document.querySelector("#arrow-img");
if (arrow) arrowAnimation.observe(arrow);

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Intersection Observer for .name
const nameAnimation = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                nameAnimation.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.5 }
);

const nameText = document.querySelector(".name");
if (nameText) nameAnimation.observe(nameText);

// Title reveal animation
async function animatePrimaryTitleOnce() {
    wipe.style.animation = "wipe-in-out 2s ease forwards";
    text.style.opacity = 0;

    await delay(800);
    text.style.opacity = 1;

    await delay(1150);
    text.style.animation = "none";
    void wipe.offsetWidth;
}

animatePrimaryTitleOnce();

// Intersection Observer for .sub-logos
const subLogosAnimation = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                subLogosAnimation.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.5 }
);

const logos = document.querySelector(".sub-logos");
if (logos) subLogosAnimation.observe(logos);

// Intersection Observer for .ux-engineer-img
const uxEngineerAnimation = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                uxEngineerAnimation.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.5 }
);

const uxEngineer = document.querySelector("#ux-engineer-img");
if (uxEngineer) uxEngineerAnimation.observe(uxEngineer);

// Intersection Observer for .cover-img
const coverImgAnimation = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                coverImgAnimation.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.5 }
);

const coverImg = document.querySelector(".cover-img");
if (coverImg) coverImgAnimation.observe(coverImg);

// Intersection Observer for .cta-buttons
const ctaButtonsAnimation = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                ctaButtonsAnimation.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.5 }
);

const ctaButtons = document.querySelector(".cta-buttons");
if (ctaButtons) coverImgAnimation.observe(ctaButtons);

// console.log(`[${performance.now().toFixed(0)}ms] initial load`);