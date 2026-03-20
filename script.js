// Menú móvil
const menuButton = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuButton && mainNav) {
  menuButton.addEventListener("click", () => {
    const expanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!expanded));
    mainNav.classList.toggle("open");
  });

  document.addEventListener("click", (event) => {
    const clickedInsideNav = mainNav.contains(event.target);
    const clickedButton = menuButton.contains(event.target);

    if (!clickedInsideNav && !clickedButton && mainNav.classList.contains("open")) {
      mainNav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    }
  });
}

// Animación sutil al aparecer elementos
const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window && revealItems.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}