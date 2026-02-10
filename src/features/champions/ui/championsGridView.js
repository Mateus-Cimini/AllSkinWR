const laneIconsByRole = {
  all: "/img/lanes/all-lanes.svg",
  top: "/img/lanes/top-icon.png",
  jungle: "/img/lanes/jungle-icon%20-%20Copia.png",
  mid: "/img/lanes/mid-icon.png",
  adc: "/img/lanes/adc-icon.png",
  support: "/img/lanes/sup-icon.png",
};

export function renderChampionsGrid(groups) {
  const container = document.querySelector(".champion-grid");
  if (!container) return;

  container.innerHTML = "";

  groups.forEach((group) => {
    group.items.forEach((champion) => {
      const card = document.createElement("div");
      card.className = "champion-select__card";
      card.setAttribute("data-champion-id", champion.id);
      card.setAttribute("data-champion-name", champion.name);
      card.setAttribute("data-role", group.role);
      if (champion.defaultSkinUrl) {
        card.style.backgroundImage = `url("${champion.defaultSkinUrl}")`;
      }

      const title = document.createElement("h6");
      title.className = "champion-select__card-title";
      title.textContent = champion.name;

      const icon = document.createElement("img");
      icon.className = "champion-select__card-lane-icon";
      icon.src = laneIconsByRole[group.role] ?? "";
      icon.alt = group.role;

      const skinsCount = document.createElement("p");
      skinsCount.className = "champion-select__card-number-skins";
      skinsCount.textContent = `${champion.skinsCount} Skin`;

      card.appendChild(title);
      card.appendChild(icon);
      card.appendChild(skinsCount);
      container.appendChild(card);
    });
  });
}
