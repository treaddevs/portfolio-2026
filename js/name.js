const nameElement = document.getElementById('name');
const finalName = 'SAM TREADWELL | PRODUCT DESIGNER';
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const animationSpeed = 10; // ms for randomizations
const framesPerLetter = 5; // how many random letters before settling

// Split name into spans
nameElement.innerHTML = finalName
    .split('')
    .map(char => {
    if (char === ' ') {
        return `<span class="letter" data-final=" "> </span>`;
    }

    if (char === '|') {
        return `<span class="pipe" data-final="|">|</span>`;
    }

    return `<span class="letter" data-final="${char}">
        ${letters[Math.floor(Math.random() * letters.length)]}
    </span>`;
    })
    .join('');

const spans = document.querySelectorAll('#name span');

async function animateNameSequentially() {
    for (let i = 0; i < spans.length; i++) {
        const span = spans[i];

        if (span.classList.contains("pipe")) continue;

        const finalChar = span.dataset.final;

        if (!finalChar || finalChar === ' ') continue;

        for (let frame = 0; frame < framesPerLetter; frame++) {
            span.innerText = letters[Math.floor(Math.random() * letters.length)];
            await new Promise(resolve => setTimeout(resolve, animationSpeed));
        }

        span.innerText = finalChar;
    }
}

setTimeout(() => {
    animateNameSequentially();
}, 600);