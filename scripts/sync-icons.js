import fs from "fs";
import path from "path";
import { v2 as cloudinary } from "cloudinary";
import "dotenv/config";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const ICONS_DIR = "scripts/lol-data-generator/output/icons";
const CLOUD_FOLDER = "allskinwr/icons";

async function syncIcons() {
  const files = fs.readdirSync(ICONS_DIR);

  for (const file of files) {
    if (!file.endsWith(".png")) continue;

    const champion = file.replace(".png", "");
    const filePath = path.join(ICONS_DIR, file);

    await cloudinary.uploader.upload(filePath, {
      folder: `${CLOUD_FOLDER}/${champion}`,
      public_id: "icon",
      overwrite: true,
    });

    console.log(`⬆️ icon ${champion}`);
  }

  console.log("✅ Sync de ícones finalizado");
}

await syncIcons();
