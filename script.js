const stars = document.getElementById("stars");

// Create floating stars
for (let i = 0; i < 65; i++) {
  const star = document.createElement("span");

  star.className = "floating-star";
  star.textContent = Math.random() > 0.5 ? "✦" : "·";

  star.style.left = Math.random() * 100 + "%";
  star.style.top = Math.random() * 100 + "%";
  star.style.fontSize = 8 + Math.random() * 13 + "px";
  star.style.animationDuration = 3 + Math.random() * 5 + "s";
  star.style.animationDelay = Math.random() * 4 + "s";

  stars.appendChild(star);
}

// Reveal sections while scrolling
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".section").forEach(section => {
  section.classList.add("reveal");
  observer.observe(section);
});

// Smooth navigation
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", event => {
    const target = document.querySelector(link.getAttribute("href"));

    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
