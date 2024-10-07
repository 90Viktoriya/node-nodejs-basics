import fs from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const rename = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const errorMessage = 'FS operation failed';
  const newFileName = join(__dirname, "files", "properFilename.md");
  const srcFileName = join(__dirname, "files", "wrongFilename.txt");
  try {
    const result = await fs.stat(newFileName);
    if (result.isFile) {
      throw new Error(errorMessage);
    }
  } catch (error) {
    if (error.message !== errorMessage) {
      try {
        await fs.rename(srcFileName, newFileName);
      }  catch (error) {
        throw new Error(errorMessage);
      }
    } else {
      throw error;
    }
  }
 
};

await rename();