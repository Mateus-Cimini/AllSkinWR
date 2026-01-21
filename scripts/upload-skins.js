import fs from "fs";
import path from "path";
import cloudinary from "./cloudinary.js";

const SKINS_DIR = "scripts/lol-data-generator/output/skins";

async function uploadSkins() {
  const files = fs.readdirSync(SKINS_DIR);

  for (const file of files) {
    if (!file.endsWith(".jpg")) continue;

    const champion = file.split("_")[0];
    const filePath = path.join(SKINS_DIR, file);

    await cloudinary.uploader.upload(filePath, {
      folder: `allskinwr/skins/${champion}`,
      public_id: file.replace(".jpg", ""),
      overwrite: true,
    });

    console.log(`✔ Skin: ${file}`);
  }
}

await uploadSkins();
