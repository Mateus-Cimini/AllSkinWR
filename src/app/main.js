import "../styles/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// mover para um toast.js
import { Toast } from "bootstrap";

document.addEventListener("DOMContentLoaded", () => {
  const toasts = {
    top: new Toast(document.getElementById("toastTop")),
    jg: new Toast(document.getElementById("toastJg")),
    mid: new Toast(document.getElementById("toastMid")),
    adc: new Toast(document.getElementById("toastAdc")),
    sup: new Toast(document.getElementById("toastSup")),
  };

  // expõe globalmente para o HTML se precisar
  window.toasts = toasts;

  document
    .getElementById("liveToastTopBtn")
    .addEventListener("click", () => toasts.top.show());
  document
    .getElementById("liveToastJgBtn")
    .addEventListener("click", () => toasts.jg.show());
  document
    .getElementById("liveToastMidBtn")
    .addEventListener("click", () => toasts.mid.show());
  document
    .getElementById("liveToastAdcBtn")
    .addEventListener("click", () => toasts.adc.show());
  document
    .getElementById("liveToastSupBtn")
    .addEventListener("click", () => toasts.sup.show());
});

// ate aqui vai o toast.js

// aqui é da navlink e navbar

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((links) => {
  links.addEventListener("click", function () {
    navLinks.forEach((l) => l.classList.remove("active"));
    this.classList.add("active");
  });
});

// termina aqui o navlink

//botao de theme

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
    // dark
    body.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    // light
    body.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
});
