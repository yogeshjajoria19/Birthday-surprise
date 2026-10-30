
const openBtn = document.getElementById("openBtn");
const intro = document.getElementById("intro");
const surprise = document.getElementById("surprise");

function celebrate() {
  const colors = ["#f7b8ff", "#d6a4ff", "#ffffff", "#ffb7d5", "#c4b5fd"];

  for (let i = 0; i < 100; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDelay = Math.random() * 1.5 + "s";
    piece.style.animationDuration = 2 + Math.random() * 2 + "s";
    document.getElementById("confetti").appendChild(piece);

    setTimeout(() => piece.remove(), 5000);
  }
}

openBtn.addEventListener("click", () => {
  intro.classList.add("hidden");
  surprise.classList.remove("hidden");
  celebrate();
});
