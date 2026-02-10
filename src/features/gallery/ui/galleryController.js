import {
  renderGallery,
  setCarouselVisible,
  updateSkinInfo,
} from "./galleryView.js";
import confetti from "canvas-confetti";

let currentSkins = [];
let isCarouselSynced = false;
let isDetailsBound = false;

export function updateGallery(skins) {
  currentSkins = Array.isArray(skins) ? skins : [];
  renderGallery(currentSkins);
  updateSkinInfo(currentSkins[0]);
  ensureCarouselSync();
  ensureDetailsClick();
  triggerConfetti();
}

export function setGalleryVisible(isVisible) {
  setCarouselVisible(isVisible);
}

function ensureCarouselSync() {
  if (isCarouselSynced) return;
  const carouselEl = document.getElementById("carouselChampions");
  if (!carouselEl) return;

  carouselEl.addEventListener("slid.bs.carousel", (event) => {
    const index =
      typeof event?.to === "number" ? event.to : getActiveIndex(carouselEl);
    updateSkinInfo(currentSkins[index]);
  });

  isCarouselSynced = true;
}

function ensureDetailsClick() {
  if (isDetailsBound) return;
  const button = document.querySelector(".skin-info-btn");
  if (!button) return;

  button.addEventListener("click", () => {
    const activeIndex = getActiveIndex(
      document.getElementById("carouselChampions"),
    );
    const activeSkin = currentSkins[activeIndex];
    if (!activeSkin?.imageUrl) return;
    window.open(activeSkin.imageUrl, "_blank", "noopener");
  });

  isDetailsBound = true;
}

function getActiveIndex(carouselEl) {
  const items = carouselEl.querySelectorAll(".carousel-item");
  for (let i = 0; i < items.length; i += 1) {
    if (items[i].classList.contains("active")) return i;
  }
  return 0;
}

function triggerConfetti() {
  if (currentSkins.length === 0) return;
  const defaults = {
    spread: 360,
    ticks: 50,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
    colors: ["#FFE400", "#FFBD00", "#E89400", "#FFCA6C", "#FDFFB8"],
  };

  const shoot = () => {
    confetti({
      ...defaults,
      particleCount: 40,
      scalar: 1.2,
      shapes: ["star"],
    });

    confetti({
      ...defaults,
      particleCount: 10,
      scalar: 0.75,
      shapes: ["circle"],
    });
  };

  setTimeout(shoot, 0);
  setTimeout(shoot, 100);
  setTimeout(shoot, 200);
}
