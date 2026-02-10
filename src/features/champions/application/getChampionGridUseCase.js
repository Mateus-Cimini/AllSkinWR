import { championsRepository } from "../infra/championsRepository.js";
import { championGridByRole } from "../domain/championGridData.js";

export async function getChampionGridUseCase() {
  const champions = await championsRepository.getAll();
  const championsByName = new Map(
    champions.map((champion) => [champion.name.toLowerCase(), champion]),
  );

  return Object.entries(championGridByRole).map(([role, names]) => {
    const items = names.map((name) => {
      const champion = championsByName.get(name.toLowerCase());
      return {
        id: champion?.id ?? name,
        name: champion?.name ?? name,
        role,
        skinsCount: champion?.skinsCount ?? 0,
        iconUrl: champion?.iconUrl ?? "",
        defaultSkinUrl: champion?.skins?.[0]?.imageUrl ?? "",
      };
    });

    return { role, items };
  });
}
