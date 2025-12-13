document.addEventListener("DOMContentLoaded", function () {
  const texts = [
    "Cloud Engineer",
    "DevOps Engineer",
    "Application Support Engineer",
  ];

  let index = 0;
  let charIndex = 0;
  let isDeleting = false;

  const typingSpeed = 120;
  const deletingSpeed = 60;
  const delayBetweenTexts = 1200;

  const typingElement = document.getElementById("typing-text");

  function typeEffect() {
    const currentText = texts[index];

    if (!isDeleting) {
      typingElement.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentText.length) {
        setTimeout(() => (isDeleting = true), delayBetweenTexts);
      }
    } else {
      typingElement.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % texts.length;
      }
    }

    setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
  }

  typeEffect();
});
