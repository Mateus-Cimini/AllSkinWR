import { getSkinsByChampionUseCase } from "../../skins/application/getSkinsByChampionUseCase.js";

export function championsSelectController() {
  const select = document.getElementById("champion-input");
  if (!select) return;

  const handleSelect = async (championId) => {
    if (!championId) return;

    const skins = await getSkinsByChampionUseCase(championId);
    console.log(JSON.stringify(skins, null, 2));

    // aqui depois você chama a view do carousel
    // renderSkinsCarousel(skins)
  };

  // Listen for native select change event
  select.addEventListener("change", (event) =>
    handleSelect(event.target.value),
  );

  // Listen for Select2's change event
  if (window.$) {
    $(select).on("select2:select", function (e) {
      handleSelect($(this).val());
    });
  }
}
