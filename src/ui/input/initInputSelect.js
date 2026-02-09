import $ from "jquery";

function formatChampion(state) {
  if (!state.id) return state.text;

  const img = $(state.element).data("img");
  if (!img) return state.text;

  return $(`
  <span class="champion-option">
    <span class="champion-option__icon">
      <img src="${img}" alt="">
    </span>
    <span class="champion-option__name">${state.text}</span>
  </span>
  `);
}

export async function initChampionSelect(
  selectEl,
  url = "/data/champions.json",
) {
  const $select = $(selectEl);

  // 1) carrega JSON
  const response = await fetch(url);
  const data = await response.json();

  // 2) monta options
  $select.empty();
  $select.append(`<option value=""></option>`);

  data.forEach((champ) => {
    $select.append(`
      <option value="${champ.name}" data-img="${champ.iconUrl || ""}">
        ${champ.name}
      </option>
    `);
  });

  // 3) recria select2
  if ($select.hasClass("select2-hidden-accessible")) {
    $select.select2("destroy");
  }

  $select.select2({
    theme: "bootstrap-5",
    width: $select.data("width")
      ? $select.data("width")
      : $select.hasClass("w-100")
        ? "100%"
        : "style",
    placeholder: $select.data("placeholder") || "Buscar campeão...",
    allowClear: true,
    templateResult: formatChampion,
    templateSelection: formatChampion,
    escapeMarkup: (m) => m,
  });

  return data;
}
