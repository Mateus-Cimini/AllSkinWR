import fs from "fs";

const SKINS_DIR = "scripts/lol-data-generator/output/skins";

// nomes oficiais (Data Dragon gerado pelo seu generate.js)
const OFFICIAL_JSON = "scripts/lol-data-generator/output/champions.json";

// arquivo consumido pelo front
const PUBLIC_JSON = "public/data/champions.json";

const CLOUDINARY_SKIN_BASE =
  "https://res.cloudinary.com/dl8eung7z/image/upload/allskinwr/skins";

// champion -> skinId -> officialName
function buildOfficialNameMap(officialChampions) {
  const map = {};
  for (const champ of officialChampions) {
    map[champ.name] = {};
    for (const skin of champ.skins ?? []) {
      map[champ.name][skin.id] = skin.name;
    }
  }
  return map;
}

// lê a pasta e monta skins existentes (fonte da verdade de existência)
function getSkinsFromFolder(officialNameMap) {
  const files = fs.readdirSync(SKINS_DIR).filter((f) => f.endsWith(".jpg"));
  const result = {};

  for (const file of files) {
    const [champion, skinIdWithExt] = file.split("_");
    const skinId = Number(skinIdWithExt.replace(".jpg", ""));

    if (!result[champion]) result[champion] = [];

    const name =
      officialNameMap?.[champion]?.[skinId] ?? `${champion} Skin ${skinId}`;

    result[champion].push({
      id: skinId,
      name,
      imageUrl: `${CLOUDINARY_SKIN_BASE}/${champion}/${skinId}.jpg`,
    });
  }

  for (const champ in result) {
    result[champ].sort((a, b) => a.id - b.id);
  }

  return result;
}

function main() {
  const officialChampions = JSON.parse(fs.readFileSync(OFFICIAL_JSON, "utf-8"));
  const publicChampions = JSON.parse(fs.readFileSync(PUBLIC_JSON, "utf-8"));

  const officialNameMap = buildOfficialNameMap(officialChampions);
  const skinsByChampion = getSkinsFromFolder(officialNameMap);

  // atualiza SOMENTE skins no json público, preservando o resto (iconUrl etc)
  for (const champ of publicChampions) {
    champ.skins = skinsByChampion[champ.name] ?? [];
  }

  fs.writeFileSync(PUBLIC_JSON, JSON.stringify(publicChampions, null, 2));
  console.log("✅ champions.json atualizado (nomes oficiais restaurados)");
}

main();
