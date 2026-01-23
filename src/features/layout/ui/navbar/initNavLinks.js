export function initNavLinks() {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((links) => {
    links.addEventListener("click", function () {
      navLinks.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    });
  });
}
