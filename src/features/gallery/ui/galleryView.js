export function renderGallery(skins) {
  const indicatorsEl = document.querySelector(
    "#carouselChampions .carousel-indicators",
  );
  const innerEl = document.querySelector("#carouselChampions .carousel-inner");

  if (!indicatorsEl || !innerEl) return;

  indicatorsEl.innerHTML = "";
  innerEl.innerHTML = "";

  if (!skins || skins.length === 0) {
    clearSkinInfo();
    return;
  }

  skins.forEach((skin, index) => {
    const indicator = document.createElement("button");
    indicator.type = "button";
    indicator.setAttribute("data-bs-target", "#carouselChampions");
    indicator.setAttribute("data-bs-slide-to", String(index));
    if (index === 0) {
      indicator.classList.add("active");
      indicator.setAttribute("aria-current", "true");
    }
    indicatorsEl.appendChild(indicator);

    const item = document.createElement("div");
    item.className = "carousel-item";
    if (index === 0) item.classList.add("active");

    const img = document.createElement("img");
    img.src = skin.imageUrl ?? "";
    img.alt = skin.name ?? "";
    img.className = "d-block w-100";

    const caption = document.createElement("div");
    caption.className = "carousel-caption d-none d-md-block";

    const title = document.createElement("h3");
    title.textContent = skin.name ?? "";

    caption.appendChild(title);
    item.appendChild(img);
    item.appendChild(caption);
    innerEl.appendChild(item);
  });

  updateSkinInfo(skins[0]);
}

export function setCarouselVisible(isVisible) {
  const carouselWrapper = document.getElementById("carousel");
  if (!carouselWrapper) return;
  carouselWrapper.style.display = isVisible ? "" : "none";
}

export function updateSkinInfo(skin) {
  const skinTitleEl = document.getElementById("skinTitle");
  const skinLabelEl = document.getElementById("SkinLabel");
  const skinRarityEl = document.getElementById("skinRarity");
  const skinPriceEl = document.getElementById("skinPrice");

  if (!skin) {
    clearSkinInfo();
    return;
  }

  if (skinTitleEl) skinTitleEl.textContent = skin.name ?? "";
  if (skinLabelEl) skinLabelEl.textContent = "";
  if (skinRarityEl) skinRarityEl.textContent = "";
  if (skinPriceEl) skinPriceEl.textContent = "";
}

export function clearSkinInfo() {
  const skinTitleEl = document.getElementById("skinTitle");
  const skinLabelEl = document.getElementById("SkinLabel");
  const skinRarityEl = document.getElementById("skinRarity");
  const skinPriceEl = document.getElementById("skinPrice");

  if (skinTitleEl) skinTitleEl.textContent = "";
  if (skinLabelEl) skinLabelEl.textContent = "";
  if (skinRarityEl) skinRarityEl.textContent = "";
  if (skinPriceEl) skinPriceEl.textContent = "";
}
