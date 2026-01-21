import fs from "fs";
import path from "path";
import { v2 as cloudinary } from "cloudinary";
import "./cloudinary.js";

// pasta local onde estão TODAS as skins (.jpg)
const LOCAL_SKINS_DIR = "scripts/lol-data-generator/output/skins";

// pasta base no cloudinary
const CLOUDINARY_BASE = "allskinwr/skins";

function getLocalSkins() {
  const files = fs.readdirSync(LOCAL_SKINS_DIR);

  return files
    .filter((f) => f.endsWith(".jpg"))
    .map((file) => {
      const [champion, skinIdWithExt] = file.split("_");
      const skinId = skinIdWithExt.replace(".jpg", "");

      return {
        champion,
        skinId,
        filename: file,
        localPath: path.resolve(LOCAL_SKINS_DIR, file),
        cloudinaryPath: `${CLOUDINARY_BASE}/${champion}/${skinId}`,
      };
    });
}

async function getCloudinarySkins() {
  let resources = [];
  let nextCursor = null;

  do {
    const result = await cloudinary.search
      .expression(`folder:${CLOUDINARY_BASE}`)
      .max_results(500)
      .next_cursor(nextCursor)
      .execute();

    resources.push(...result.resources.map((r) => r.public_id));
    nextCursor = result.next_cursor;
  } while (nextCursor);

  return resources;
}

async function sync() {
  const localSkins = getLocalSkins();
  const cloudinarySkins = await getCloudinarySkins();

  console.log(`📂 Local skins: ${localSkins.length}`);
  console.log(`☁️ Cloudinary skins: ${cloudinarySkins.length}`);

  const localPublicIds = localSkins.map((s) => s.cloudinaryPath);

  // 🔴 remover do cloudinary o que não existe localmente
  for (const publicId of cloudinarySkins) {
    if (!localPublicIds.includes(publicId)) {
      await cloudinary.uploader.destroy(publicId, {
        resource_type: "image",
      });
      console.log(`🗑️ removido: ${publicId}`);
    }
  }

  // 🟢 subir / atualizar skins locais
  for (const skin of localSkins) {
    await cloudinary.uploader.upload(skin.localPath, {
      public_id: skin.cloudinaryPath,
      folder: `${CLOUDINARY_BASE}/${skin.champion}`,
      resource_type: "image",
      overwrite: true,
      invalidate: true,
    });

    console.log(`⬆️ enviado: ${skin.filename}`);
  }

  console.log("✅ Sync de skins finalizado");
}

await sync();
