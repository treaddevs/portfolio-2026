document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form");
    const inputs = form.querySelectorAll(".contact-inputs");
    const messageInput = form.querySelector("textarea[name='message']");

    const nameRegex = /^[A-Za-zÀ-ÿ ,.'-]+$/;
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const messageRegex = /^[A-Za-z0-9À-ÿ ,.'"\n!?$%&()*@#\-_:;]+$/;

    const validity = { name: true, email: false, message: false };

    function showError(input, message) {
        clearError(input);
        const errorEl = document.createElement("small");
        errorEl.classList.add("error-msg");
        errorEl.textContent = message;
        input.insertAdjacentElement("afterend", errorEl);
        input.classList.add("error");
    }

    function showSuccess(input, message) {
        clearError(input);
        const successEl = document.createElement("small");
        successEl.classList.add("success-msg");
        successEl.textContent = message;
        input.insertAdjacentElement("afterend", successEl);
    }

    function clearError(input) {
        input.classList.remove("error");
        const nextEl = input.nextElementSibling;
        if (nextEl && (nextEl.classList.contains("error-msg") || nextEl.classList.contains("success-msg"))) {
            nextEl.remove();
        }
    }

    function validateInput(input, forceShowError = false, isSubmit = false) {
        const value = input.value.trim();
        const field = input.getAttribute("name");
        let error = "";

        if (field === "name") {
            if (!value) {
                validity.name = true;
            } else if (!nameRegex.test(value)) {
                error = "Name contains invalid characters.";
                validity.name = false;
            } else {
                validity.name = true;
            }
        }

        else if (field === "email") {
            if (!value) {
                error = "Please fill out this field.";
                validity.email = false;
            } else if (/[^A-Za-z0-9@._%+-]/.test(value) || value.split("@").length > 2) {
                error = "Email contains invalid characters.";
                validity.email = false;
            } else if (
                value.includes("..") ||
                value.startsWith("@") ||
                value.includes("@.") ||
                value.includes(".@")
            ) {
                error = "Email looks invalid.";
                validity.email = false;
            } else if (emailRegex.test(value)) {
                validity.email = true;
            } else {
                validity.email = false;
                if (forceShowError) error = "Email looks invalid.";
            }
        }

        else if (field === "message") {
            if (!value) {
                error = "Please fill out this field.";
                validity.message = false;
            } else if (!messageRegex.test(value)) {
                error = "Message contains invalid characters.";
                validity.message = false;
            } else if (isSubmit && value.length < 10) {
                error = "Message must be at least 10 characters.";
                validity.message = false;
            } else {
                validity.message = true;
            }
        }

        if (error) showError(input, error);
        else clearError(input);
    }

    // Live validation + clear success message and forn on user typing
    inputs.forEach(input =>
        input.addEventListener("input", () => {
            // Clear any existing success messages
            const successEls = form.querySelectorAll(".success-msg");
            if (successEls.length) {
                successEls.forEach(el => el.remove());
                form.reset(); // Clear fields when user starts typing again
                Object.assign(validity, { name: true, email: false, message: false });
            }
            //Run validation
            validateInput(input);
        })
    );

    // Submit handling
    form.addEventListener("submit", () => {
        // Validate all fields on submit, force showing errors
        inputs.forEach(input => validateInput(input, true, true));

        if (validity.email && validity.message) {
            console.log("Form submitted successfully!");
            // Show success message under the message field
            showSuccess(messageInput, "Message sent!");
        } else {
            console.warn("Form submission blocked. Please fix errors.");
        }
    });
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

const tabImg = document.querySelector(".contact-tab");
if (tabImg) tabAnimation.observe(tabImg);

// Intersection Observer for .contact-title .contact-inputs .message-btn
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
document.querySelectorAll(".contact-title, .contact-inputs, .message-btn").forEach(el => {
    textAnimation.observe(el);
});