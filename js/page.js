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
                <div class="project-meta">
                    <div class="meta-item">
                        <span class="meta-label">Role<br></span>
                        <span class="meta-value">${pageData.role}</span>
                    </div>

                    <div class="meta-item">
                        <span class="meta-label">Context<br></span>
                        <span class="meta-value">${pageData.context}</span>
                    </div>

                    <div class="meta-item">
                        <span class="meta-label">Timeline<br></span>
                        <span class="meta-value">${pageData.timeline}</span>
                    </div>
                </div>
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

        if (section.type === "carousel") {
            const carouselId = `carousel-${Math.random().toString(36).substr(2, 9)}`;

            const carousel = document.createElement("div");
            carousel.classList.add("carousel", "slide");
            carousel.setAttribute("id", carouselId);
            carousel.setAttribute("data-bs-ride", "carousel");
            carousel.setAttribute("data-bs-interval", "3000");

            // Indicators
            const indicators = document.createElement("div");
            indicators.classList.add("carousel-indicators");

            // Inner
            const inner = document.createElement("div");
            inner.classList.add("carousel-inner");

            section.images.forEach((src, index) => {
                // indicator button
                const btn = document.createElement("button");
                btn.type = "button";
                btn.setAttribute("data-bs-target", `#${carouselId}`);
                btn.setAttribute("data-bs-slide-to", index);

                if (index === 0) {
                    btn.classList.add("active");
                    btn.setAttribute("aria-current", "true");
                }

                btn.setAttribute("aria-label", `Slide ${index + 1}`);
                indicators.appendChild(btn);

                // slide
                const item = document.createElement("div");
                item.classList.add("carousel-item");

                if (index === 0) item.classList.add("active");

                const img = document.createElement("img");
                img.src = src;
                img.classList.add("d-block", "w-100");
                img.alt = section.alt || `Slide ${index + 1}`;

                item.appendChild(img);
                inner.appendChild(item);
            });

            // Controls
            const prevBtn = document.createElement("button");
            prevBtn.classList.add("carousel-control-prev");
            prevBtn.type = "button";
            prevBtn.setAttribute("data-bs-target", `#${carouselId}`);
            prevBtn.setAttribute("data-bs-slide", "prev");
            prevBtn.innerHTML = `
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            `;

            const nextBtn = document.createElement("button");
            nextBtn.classList.add("carousel-control-next");
            nextBtn.type = "button";
            nextBtn.setAttribute("data-bs-target", `#${carouselId}`);
            nextBtn.setAttribute("data-bs-slide", "next");
            nextBtn.innerHTML = `
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            `;
            carousel.appendChild(indicators);
            carousel.appendChild(inner);
            carousel.appendChild(prevBtn);
            carousel.appendChild(nextBtn);
            sectionEl.appendChild(carousel);
        }

        if (section.heading) {
            const heading = document.createElement("h2");
            heading.innerHTML = section.heading;
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

    // Intersection Observer for .page-title .page-desc .page-btn .project-meta
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
    document.querySelectorAll(".page-title, .page-desc, .page-btn, .project-meta").forEach(el => {
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