export const championsSelectView = {
  updateChampionInfo(champion) {
    if (!champion) return;

    const titleEl = document.querySelector(".champion-title h2");
    const subtitleEl = document.querySelector(".champion-title p");

    if (titleEl) titleEl.textContent = champion.name ?? "";
    if (subtitleEl) subtitleEl.textContent = champion.title ?? "";
  },
};
