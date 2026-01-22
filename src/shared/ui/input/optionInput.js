import $ from "jquery";

export async function loadChampionsFromJson(
  selectEl,
  url = "/data/champions.json",
) {
  const response = await fetch(url);
  const data = await response.json();

  const names = data.map((champ) => champ.name);

  const $select = $(selectEl);

  $select.empty();
  $select.append(`<option value=""></option>`);

  names.forEach((name) => {
    $select.append(`<option value="${name}">${name}</option>`);
  });

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
  });

  return names;
}
