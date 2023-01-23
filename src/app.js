const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  hamburger.classList.toggle("bg-white");
});

const hero = document.getElementById("hero");
const toggle = document.getElementById("toggle");

toggle.addEventListener("change", (event) => {
  if (event.target.checked) {
    hero.classList.remove("light");
    hero.classList.add("dark");
  } else {
    hero.classList.remove("dark");
    hero.classList.add("light");
  }
});
