const sentences = [
    "Anonymous",
    "Student",
    "Bangladeshi",
    "Christian",
];
let index = 0;
let i = 0;
const span = document.getElementById("text");

function writeText() {
    if (i < sentences[index].length) {
        span.textContent += sentences[index].charAt(i);
        i++;
        setTimeout(writeText, 100);
    } else {
        setTimeout(eraseText, 1400);
    }
}

function eraseText() {
    if (i >= 0) {
        span.textContent = sentences[index].substring(0, i);
        i--;
        setTimeout(eraseText, 50);
    } else {
        index = (index + 1) % sentences.length;
        setTimeout(writeText, 500);
    }
}

document.addEventListener("DOMContentLoaded", writeText);
