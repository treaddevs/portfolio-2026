const roles = ["UX Engineer", "Design Systems", "Interaction"];
const measurer = document.getElementById("role-measurer");

const roleEl = document.querySelector(".dynamic-role");
const primaryEl = document.querySelector(".primary-role");

const wipeEl = document.querySelector(".wipe");
const primaryWipeEl = document.querySelector(".primary-wipe");

let index = 2;

roleEl.style.opacity = 0;

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function animatePrimaryRoleOnce() {
    primaryWipeEl.style.animation = "wipe-in-out 2s ease forwards";
    primaryEl.style.opacity = 0;

    await delay(800);
    primaryEl.style.opacity = 1;

    await delay(1150);
    primaryWipeEl.style.animation = "none";
    void primaryWipeEl.offsetWidth;
}

async function showNextRole() {
    let nextIndex = (index + 1) % roles.length;
    const nextText = `<span class="plus">+</span> ${roles[nextIndex]}`;

    measurer.innerHTML = nextText;
    const measuredWidth = measurer.offsetWidth;
    roleEl.style.width = measuredWidth + "px";

    roleEl.style.opacity = 0;

    await delay(350);

    wipeEl.style.animation = "wipe-in-out 2s ease forwards";

    await delay(800);

    index = nextIndex;
    roleEl.innerHTML = nextText;
    roleEl.style.opacity = 1;

    await delay(1150);

    wipeEl.style.animation = "none";
    void wipeEl.offsetWidth;
}

async function cycleRoles() {
    while (true) {
        await showNextRole();
        await delay(2000);
    }
}

(async function startAnimations() {
    roleEl.innerHTML = `<span class="plus">+</span> ${roles[index]}`;
    animatePrimaryRoleOnce();
    await delay(285);
    cycleRoles();
})();

// console.log(`[${performance.now().toFixed(0)}ms] initial load`);

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