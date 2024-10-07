import fs from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const remove = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const errorMessage = 'FS operation failed';
  const fileName = join(__dirname, "files", "fileToRemove.txt");
  try {
    await fs.rm(fileName);
  } catch {
    throw new Error(errorMessage);
  }
};

await remove();