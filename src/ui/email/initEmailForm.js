import $ from "jquery";

export function initEmailForm() {
  const formSelector = ".footer__form-email";
  const inputSelector = "#inputEmail";

  $(formSelector).on("submit", function (e) {
    e.preventDefault();

    const email = $(inputSelector).val().trim();
    if (!email) return;

    $.ajax({
      url: "https://sheetdb.io/api/v1/gxj72zajb8bqy",
      method: "POST",
      contentType: "application/json",
      data: JSON.stringify({
        data: [{ email }],
      }),
      success: function () {
        $(formSelector)[0].reset();
      },
      error: function () {
        alert("erro ao salvar email");
      },
    });
  });
}
