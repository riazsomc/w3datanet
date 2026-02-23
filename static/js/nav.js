document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector(".nav-toggle");
    const nav = document.querySelector(".site-nav");

    toggle.addEventListener("click", function () {
        nav.classList.toggle("active");
    });
});
