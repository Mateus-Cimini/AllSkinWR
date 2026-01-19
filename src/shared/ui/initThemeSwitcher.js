export function initThemeSwitcher() {
  const switcher = document.getElementById("switch");
  const body = document.body;

  // carrega tema salvo
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    body.setAttribute("data-theme", savedTheme);
    switcher.checked = savedTheme === "dark";
  }

  // muda tema ao clicar
  switcher.addEventListener("change", () => {
    if (switcher.checked) {
      body.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      body.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  });
}
