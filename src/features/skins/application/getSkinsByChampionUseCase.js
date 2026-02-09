import { skinsRepository } from "../infra/skinsRepository.js";

export async function getSkinsByChampionUseCase(championId) {
  if (!championId) return [];
  return await skinsRepository.getByChampionId(championId);
}
