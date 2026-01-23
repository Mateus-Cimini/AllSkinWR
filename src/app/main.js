import "../styles/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// jQuery + Select2
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

import select2 from "select2";
select2(jQuery);

import "select2/dist/css/select2.css";
import "select2-bootstrap-5-theme/dist/select2-bootstrap-5-theme.css";

import { initChampionSelect } from "../shared/ui/input/initInputSelect.js";

import { initToasts } from "../shared/ui/InitToast.js";
import { initNavLinks } from "../shared/ui/initNavLinks.js";
import { initThemeSwitcher } from "../shared/ui/initThemeSwitcher.js";

document.addEventListener("DOMContentLoaded", async () => {
  initToasts();
  initNavLinks();
  initThemeSwitcher();

  await initChampionSelect("#champion-input", "/data/champions.json");
});
