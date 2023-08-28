const html = document.querySelector("html");
const hamburguer = document.querySelector(".header-nav__hamburgger");

hamburguer.addEventListener("click", () => {
  html.classList.toggle("menu-opened");
});
