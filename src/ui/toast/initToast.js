import { Toast } from "bootstrap";

let toasts = null;

export function initToasts() {
  toasts = {
    all: new Toast(document.getElementById("toastAll")),
    top: new Toast(document.getElementById("toastTop")),
    jg: new Toast(document.getElementById("toastJg")),
    mid: new Toast(document.getElementById("toastMid")),
    adc: new Toast(document.getElementById("toastAdc")),
    sup: new Toast(document.getElementById("toastSup")),
  };
  window.toasts = toasts;
}

export function showToastForRole(role, championName) {
  if (!toasts) return;
  const map = {
    all: "all",
    top: "top",
    jungle: "jg",
    mid: "mid",
    adc: "adc",
    support: "sup",
  };
  const key = map[role];
  if (!key || !toasts[key]) return;
  const toastEl = document.getElementById(`toast${key.charAt(0).toUpperCase()}${key.slice(1)}`);
  if (toastEl && championName) {
    const nameEl = toastEl.querySelector(".toast-body strong");
    if (nameEl) nameEl.textContent = championName;
  }
  toasts[key].show();
}
