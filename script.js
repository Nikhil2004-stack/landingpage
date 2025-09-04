// Burger Slider
const mainBurger = document.getElementById("mainBurger");
const thumbs = document.querySelectorAll(".thumb");

thumbs.forEach(thumb => {
  thumb.addEventListener("click", () => {
    thumbs.forEach(img => img.classList.remove("active"));
    mainBurger.src = thumb.src;
    thumb.classList.add("active");
  });
});

// Stars Background Generator
function createStars() {
  const starsContainer = document.getElementById("stars");
  const starCount = 100;

  for (let i = 0; i < starCount; i++) {
    let star = document.createElement("div");
    star.classList.add("star");
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.width = star.style.height = `${Math.random() * 3}px`;
    star.style.background = "white";
    star.style.position = "absolute";
    star.style.borderRadius = "50%";
    star.style.opacity = Math.random();
    starsContainer.appendChild(star);
  }
}
createStars();
