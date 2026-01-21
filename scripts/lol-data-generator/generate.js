import fs from "fs";
import path from "path";
import axios from "axios";

const VERSION = "14.24.1";
const BASE_URL = "https://ddragon.leagueoflegends.com/cdn";
const LOCALE = "pt_BR";

const OUTPUT_DIR = "scripts/lol-data-generator/output";
const OUTPUT_JSON = path.join(OUTPUT_DIR, "champions.json");

async function run() {
  const championsListUrl = `${BASE_URL}/${VERSION}/data/${LOCALE}/champion.json`;

  const { data } = await axios.get(championsListUrl);
  const champions = Object.values(data.data);

  const result = [];

  for (const champ of champions) {
    console.log(`▶ ${champ.id}`);

    const champDetailUrl = `${BASE_URL}/${VERSION}/data/${LOCALE}/champion/${champ.id}.json`;
    const detailRes = await axios.get(champDetailUrl);
    const champData = detailRes.data.data[champ.id];

    const skins = champData.skins.map((skin) => ({
      id: skin.num,
      name: skin.name === "default" ? champ.name : skin.name,
    }));

    result.push({
      id: champ.id,
      name: champ.name,
      title: champ.title,
      icon: `${champ.id}.png`,
      skins,
    });
  }

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  fs.writeFileSync(OUTPUT_JSON, JSON.stringify(result, null, 2));

  console.log("✅ champions.json gerado com skins");
}

run();
