const nameElement = document.getElementById('name');
const finalName = 'SAM TREADWELL';
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const animationSpeed = 20; // ms for randomizations
const framesPerLetter = 5; // how many random letters before settling

// Split name into spans
nameElement.innerHTML = finalName
    .split('')
    .map(char => {
        if (char === ' ') return `<span class="letter">&nbsp;</span>`;
        return `<span class="letter">${letters[Math.floor(Math.random() * letters.length)]}</span>`;
    })
    .join('');

const spans = document.querySelectorAll('#name .letter');

async function animateNameSequentially() {
    for (let i = 0; i < spans.length; i++) {
        const span = spans[i];
        const finalChar = finalName[i];

        if (finalChar === ' ') continue;

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