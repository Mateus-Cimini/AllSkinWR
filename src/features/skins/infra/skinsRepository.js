import { Skin } from "../domain/Skin.js";

export const skinsRepository = {
  async getByChampionId(championId) {
    try {
      const response = await fetch("/data/champions.json");
      if (!response.ok) return [];
      const data = await response.json();

      const champion = data.find((c) => c.id === championId);
      const rawSkins = champion?.skins ?? [];

      // transforma JSON bruto em entidade de domínio
      return rawSkins.map((s) => new Skin({ ...s, championId }));
    } catch {
      return [];
    }
  },
};
