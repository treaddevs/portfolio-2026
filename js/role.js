const primaryEl = document.querySelector(".primary-title");
const primaryWipeEl = document.querySelector(".primary-wipe");

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function animatePrimaryTitleOnce() {
    primaryWipeEl.style.animation = "wipe-in-out 2s ease forwards";
    primaryEl.style.opacity = 0;

    await delay(800);
    primaryEl.style.opacity = 1;

    await delay(1150);
    primaryWipeEl.style.animation = "none";
    void primaryWipeEl.offsetWidth;
}

animatePrimaryTitleOnce();

document.querySelectorAll(".animate-block").forEach((block) =>{
    const wipe = block.querySelector(".wipe");
    const text = block.querySelector(".text");

    async function animateSubText() {
        text.style.opacity = 0;
        await delay(350);

        wipe.style.animation = "wipe-in-out 2s ease forwards";

        await delay(800);
        text.style.opacity = 1;

        await delay(1150);
        wipe.style.animation = "none";
    }

    animateSubText();
})

// Intersection Observer for name
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

// Intersection Observer for cover-img
const coverImgAnimation = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                coverImgAnimation.unobserve(entry.target);
            }
        });
    },
    await delay(500),
    { threshold: 0.5 }
);

const coverImg = document.querySelector(".cover-img");
if (coverImg) coverImgAnimation.observe(coverImg);

// Intersection Observer for cta-buttons
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