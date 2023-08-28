const banner = document.querySelector(".banner");
const bannerBtn = document.querySelector(".banner__close");

const ShowBanner = () => {
  banner.style.display = "block";
};

bannerBtn.addEventListener("click", () => {
  banner.style.display = "none";
});

setTimeout(ShowBanner, 5000);
