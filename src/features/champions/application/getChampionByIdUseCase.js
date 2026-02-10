import { championsRepository } from "../infra/championsRepository.js";

export async function getChampionByIdUseCase(championId) {
  if (!championId) return null;

  return await championsRepository.getById(championId);
}
