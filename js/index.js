const sentences = [
    "Welcome to ARSecurityTeam",
    "Discover expert tips, in-depth tutorials",
    "knowledge to secure your digital life! ",
    "Follow us on Social Media",
  ];
  let index = 0;
  function writeText() {
    const text = sentences[index];
    let i = 0;

    function type() {
      if (i < text.length) {
        const span = document.getElementById("text");
        span.textContent += text.charAt(i);
        i++;
        setTimeout(type, 100);
      } else {
        setTimeout(eraseText, 1400);
      }
    }
    function eraseText() {
      if (i >= 0) {
        const span = document.getElementById("text");
        span.textContent = text.substring(0, i);
        i--;
        setTimeout(eraseText, 50);
      } else {
        index = (index + 1) % sentences.length;
        setTimeout(writeText, 500);
      }
    }
    type();
  }
  document.addEventListener("DOMContentLoaded", writeText);
