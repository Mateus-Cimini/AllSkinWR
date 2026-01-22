export function initInputSelect() {
  $(".champion-input__input").each(function () {
    if ($(this).hasClass("select2-hidden-accessible")) return;

    $(this).select2({
      theme: "bootstrap-5",
      width: $(this).data("width")
        ? $(this).data("width")
        : $(this).hasClass("w-100")
        ? "100%"
        : "style",
      placeholder: $(this).data("placeholder") || "Buscar campeão...",
      allowClear: true,
    });
  });
}
