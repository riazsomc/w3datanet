document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");

  if (!toggle || !nav) return; // fail-safe

  toggle.addEventListener("click", (e) => {
    e.preventDefault();
    nav.classList.toggle("active");
  });

  // Optional: close menu after clicking a link (nice on mobile)
  nav.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      nav.classList.remove("active");
    }
  });
});
