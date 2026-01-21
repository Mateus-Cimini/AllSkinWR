import axios from "axios";
import fs from "fs";

export async function downloadImage(url, outputPath) {
  try {
    const response = await axios.get(url, {
      responseType: "stream",
      timeout: 15000,
      validateStatus: (status) => status === 200,
    });

    await new Promise((resolve, reject) => {
      const stream = fs.createWriteStream(outputPath);
      response.data.pipe(stream);
      stream.on("finish", resolve);
      stream.on("error", reject);
    });

    return true;
  } catch (error) {
    if (error.response) {
      console.warn(`${error.response.status} → ${url}`);
    } else {
      console.warn(`Erro → ${url}`);
    }
    return false;
  }
}
