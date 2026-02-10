import { getChampionByIdUseCase } from "../application/getChampionByIdUseCase.js";
import { getSkinsByChampionUseCase } from "../../skins/application/getSkinsByChampionUseCase.js";
import { championsSelectView } from "./championsSelectView.js";
import {
  setGalleryVisible,
  updateGallery,
} from "../../gallery/ui/galleryController.js";

export async function selectChampion(championId) {
  if (!championId) {
    setGalleryVisible(false);
    updateGallery([]);
    championsSelectView.resetChampionInfo();
    return;
  }

  const champion = await getChampionByIdUseCase(championId);
  if (!champion) return;

  championsSelectView.updateChampionInfo(champion);

  const skins = await getSkinsByChampionUseCase(champion.id);
  updateGallery(skins);
  setGalleryVisible(true);
}

export function championsSelectController() {
  const select = document.getElementById("champion-input");
  if (!select) return;
  setGalleryVisible(false);

  const handleSelect = async (championId) => selectChampion(championId);

  // Listen for native select change event
  select.addEventListener("change", (event) =>
    handleSelect(event.target.value),
  );

  // Listen for Select2's change event
  if (window.$) {
    $(select).on("select2:select", function (e) {
      handleSelect($(this).val());
    });
    $(select).on("select2:clear select2:unselect", function () {
      handleSelect("");
    });
  }
}
