import { championsRepository } from "../infra/championsRepository.js";

export async function getSkinsByChampionUseCase(championId) {
  if (!championId) return [];

  const champion = await championsRepository.getById(championId);
  if (!champion) return [];

  return champion.skins;
}
