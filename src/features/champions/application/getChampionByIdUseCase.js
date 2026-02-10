import { championsRepository } from "../infra/championsRepository.js";

export async function getChampionByIdUseCase(championId) {
  if (!championId) return null;

  const champions = await championsRepository.getAll();
  return (
    champions.find(
      (champion) =>
        champion.id === championId || champion.name === championId,
    ) || null
  );
}
