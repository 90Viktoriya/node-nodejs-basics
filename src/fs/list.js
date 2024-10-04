import fs from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const list = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const errorMessage = 'FS operation failed';
  const srcDir = join(__dirname, "files");
  await fs.readdir(srcDir)
  .then((files) => {
    files.forEach((file) => {
      fs.stat(join(srcDir, file)).then((result) => {
        if (result.isFile) {
      console.log(file);
      }
      })
    }
   )})
  .catch((error) => {
    throw new Error(errorMessage);
  })
};

await list();