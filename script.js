document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const portfolioCards = document.querySelectorAll(".portfolio-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.getAttribute("data-category");

      // 切換按鈕樣式
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      // 顯示/隱藏作品
      portfolioCards.forEach((card) => {
        const cardCategory = card.getAttribute("data-category");

        if (category === "all" || cardCategory === category) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});

