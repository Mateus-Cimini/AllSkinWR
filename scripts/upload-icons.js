import fs from "fs";
import path from "path";
import cloudinary from "./cloudinary.js";

const ICONS_DIR = "scripts/lol-data-generator/output/icons";

async function uploadIcons() {
  const files = fs.readdirSync(ICONS_DIR);

  for (const file of files) {
    if (!file.endsWith(".png")) continue;

    const champion = file.replace(".png", "");
    const filePath = path.join(ICONS_DIR, file);

    await cloudinary.uploader.upload(filePath, {
      folder: `allskinwr/icons/${champion}`,
      public_id: "icon",
      overwrite: true,
    });

    console.log(`✔ Ícone: ${champion}`);
  }
}

await uploadIcons();
