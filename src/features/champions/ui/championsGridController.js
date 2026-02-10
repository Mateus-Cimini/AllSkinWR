import { getChampionGridUseCase } from "../application/getChampionGridUseCase.js";
import { renderChampionsGrid } from "./championsGridView.js";
import { selectChampion } from "./championsSelectController.js";
import { showToastForRole } from "../../../ui/toast/initToast.js";

export async function championsGridController() {
  const groups = await getChampionGridUseCase();
  const groupsByRole = new Map(groups.map((group) => [group.role, group.items]));
  const roleInputs = document.querySelectorAll(
    ".champion-select__option-input",
  );

  const defaultRole = getSelectedRole(roleInputs) ?? "all";
  renderChampionsGrid([normalizeRoleGroup(defaultRole, groupsByRole)]);

  const container = document.querySelector(".champion-grid");
  if (!container) return;

  roleInputs.forEach((input) => {
    input.addEventListener("change", () => {
      if (!input.checked) return;
      const role = input.getAttribute("data-role") || "all";
      renderChampionsGrid([normalizeRoleGroup(role, groupsByRole)]);
    });
  });

  container.addEventListener("click", (event) => {
    const card = event.target.closest(".champion-select__card");
    if (!card) return;

    const championId = card.getAttribute("data-champion-id");
    if (!championId) return;
    const championName = card.getAttribute("data-champion-name") || championId;
    const role = card.getAttribute("data-role") || "";

    const select = document.getElementById("champion-input");
    if (!select) return;

    if (window.$ && $(select).data("select2")) {
      $(select).val(championId).trigger("change.select2");
    } else {
      select.value = championId;
    }

    selectChampion(championId);
    showToastForRole(role, championName);
  });
}

function normalizeRoleGroup(role, groupsByRole) {
  const items = groupsByRole.get(role) ?? [];
  return { role, items };
}

function getSelectedRole(roleInputs) {
  for (const input of roleInputs) {
    if (input.checked) return input.getAttribute("data-role");
  }
  return null;
}
