import "../styles/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { initToasts } from "../shared/ui/InitToast.js";
import { initNavLinks } from "../shared/ui/initNavLinks.js";
import { initThemeSwitcher } from "../shared/ui/initThemeSwitcher.js";

document.addEventListener("DOMContentLoaded", () => {
  initToasts();
  initNavLinks();
  initThemeSwitcher();
});

