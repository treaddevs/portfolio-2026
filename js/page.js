import { pages } from "./pages.js";

document.addEventListener("DOMContentLoaded", () => {
    const pageKey =
        new URLSearchParams(window.location.search).get("project") || 
        window.location.pathname.split("/").pop().replace(".html", "");
    
    const pageData = pages[pageKey];
    if (!pageData) {
        console.warn(`No page data fround for key: ${pageKey}`);
        return;
    }

    const heroImg = document.querySelector(".hero");
    if (heroImg) heroImg.src = pageData.heroImage;

    document.title = `Projects | ${pageData.title.replace(/<br>/g, " ")}`;

    const homeSection = document.querySelector(".home .hero-container");
    if (homeSection) {
        const intro = document.createElement("div");
        intro.classList.add("hero-content");

        intro.innerHTML = `
            <div class="hero-left">
                <img class="page-tab" src="${pageData.tabImg}"/>
                <h1 class="page-title">${pageData.title}</h1>
                <p class="page-desc">${pageData.heroDesc}</p>
                ${
                    pageData.heroLink 
                        ? `<a href="${pageData.heroLink}" target="_blank" class="page-btn">Visit website</a>`
                        : ""
                }
            </div>
            <div class="hero-right">
                <img 
                    class="logo" 
                    src="${pageData.logo}"
                    alt="${pageData.logoAlt || pageData.title.replace(/<br>/g, ' ' ) + 'logo'}"
                />
            </div>
        `;

        homeSection.appendChild(intro);
    }

    // Container for sections
    const pageBody = document.querySelector(".page-body .container");

    // Build the content sections video, image, heading/text
    pageData.sections.forEach((section) => {
        const sectionEl = document.createElement("section");
        sectionEl.classList.add("page-section"); 

        if (section.type === "video") {
            const video = document.createElement("video");
            video.src = section.src;
            video.controls = true;
            video.muted = true;
            video.autoplay = true;
            video.loop = true;
            video.playsInline = true;
            video.classList.add("section-video"); 
            
            // Accessibility for video
            if (section.alt) video.setAttribute("aria-label", section.alt);

            sectionEl.appendChild(video);
        }

        if (section.type === "image") {
            const img = document.createElement("img");
            img.src = section.src;
            img.alt = section.alt || section.heading || "Project image";
            img.classList.add("section-image");
            sectionEl.appendChild(img);
        }

        if (section.heading) {
            const heading = document.createElement("h2");
            heading.textContent = section.heading;
            heading.classList.add("section-heading");
            sectionEl.appendChild(heading);
        }

        if (section.text) {
            const p = document.createElement("p");
            p.innerHTML = section.text;
            p.classList.add("section-text");
            sectionEl.appendChild(p);
        }

        pageBody.appendChild(sectionEl);
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

    const tabImg = document.querySelector(".page-tab");
    if (tabImg) tabAnimation.observe(tabImg);

    // Intersection Observer for .page-title .page-desc .page-btn
    const textAnimation = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                entry.target.classList.add("show");
                textAnimation.unobserve(entry.target);
                }
            });
        }, 
        { threshold: 0.5 }
    );
    document.querySelectorAll(".page-title, .page-desc, .page-btn").forEach(el => {
        textAnimation.observe(el);
    });

    // Intersection Observer for logo
    const logoAnimation = new IntersectionObserver(
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

    const logoImg = document.querySelector(".logo");
    if (logoImg) logoAnimation.observe(logoImg);
});