import { Toast } from "bootstrap";

export function initToasts() {
  const toasts = {
    top: new Toast(document.getElementById("toastTop")),
    jg: new Toast(document.getElementById("toastJg")),
    mid: new Toast(document.getElementById("toastMid")),
    adc: new Toast(document.getElementById("toastAdc")),
    sup: new Toast(document.getElementById("toastSup")),
  };

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
}
