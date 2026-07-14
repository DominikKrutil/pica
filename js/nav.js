// MENU TOGGLE - otevření a zavření mobilní navigace

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {

    menuToggle.classList.toggle("active");
    nav.classList.toggle("active");

});


// SUBMENU POKOJE - rozbalení a sbalení podmenu

const submenuItem = document.querySelector(".has-submenu");
const submenuLink = submenuItem.querySelector(".nav-link");

submenuLink.addEventListener("click", (e) => {

    e.preventDefault();

    submenuItem.classList.toggle("active");

});