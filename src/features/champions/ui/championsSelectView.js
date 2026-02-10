export const championsSelectView = {
  _initial: null,
  updateChampionInfo(champion) {
    if (!champion) return;

    const titleEl = document.querySelector(".champion-title h2");
    const subtitleEl = document.querySelector(".champion-title p");

    if (!this._initial) {
      this._initial = {
        title: titleEl?.textContent ?? "",
        subtitle: subtitleEl?.textContent ?? "",
      };
    }

    if (titleEl) titleEl.textContent = champion.name ?? "";
    if (subtitleEl) subtitleEl.textContent = champion.title ?? "";
  },
  resetChampionInfo() {
    const titleEl = document.querySelector(".champion-title h2");
    const subtitleEl = document.querySelector(".champion-title p");

    if (!this._initial) {
      this._initial = {
        title: titleEl?.textContent ?? "",
        subtitle: subtitleEl?.textContent ?? "",
      };
    }

    if (titleEl) titleEl.textContent = this._initial.title;
    if (subtitleEl) subtitleEl.textContent = this._initial.subtitle;
  },
};
