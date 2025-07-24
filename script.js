const menuButton = document.getElementsByClassName("menu-btn")[0];
const navbarLinks = document.getElementsByClassName("nav-links")[0];

menuButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
});