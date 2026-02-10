import {
  renderGallery,
  setCarouselVisible,
  updateSkinInfo,
} from "./galleryView.js";

let currentSkins = [];
let isCarouselSynced = false;

export function updateGallery(skins) {
  currentSkins = Array.isArray(skins) ? skins : [];
  renderGallery(currentSkins);
  updateSkinInfo(currentSkins[0]);
  ensureCarouselSync();
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

function getActiveIndex(carouselEl) {
  const items = carouselEl.querySelectorAll(".carousel-item");
  for (let i = 0; i < items.length; i += 1) {
    if (items[i].classList.contains("active")) return i;
  }
  return 0;
}
