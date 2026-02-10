import {
  renderGallery,
  setCarouselVisible,
  updateSkinInfo,
} from "./galleryView.js";
import { bindDetailsClick, triggerConfetti } from "./galleryEffects.js";

let currentSkins = [];
let isCarouselSynced = false;
let isDetailsBound = false;

export function updateGallery(skins) {
  currentSkins = Array.isArray(skins) ? skins : [];
  renderGallery(currentSkins);
  updateSkinInfo(currentSkins[0]);
  ensureCarouselSync();
  ensureDetailsClick();
  triggerConfetti(currentSkins.length > 0);
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
  bindDetailsClick(() => {
    const carouselEl = document.getElementById("carouselChampions");
    if (!carouselEl) return null;
    const activeIndex = getActiveIndex(carouselEl);
    return currentSkins[activeIndex] ?? null;
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
