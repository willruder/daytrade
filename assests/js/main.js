console.log("Price Action Mastery loaded");
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".lesson-card, .card");

  cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-3px)";
      card.style.transition = "0.2s ease";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0)";
    });
  });
});
