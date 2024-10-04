import fs from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const copy = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const newDir = join(__dirname, "files_copy");
  const srcDir = join(__dirname, "files");
  try {
    await fs.cp(srcDir, newDir, { force: false, recursive: true, errorOnExist: true });
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await copy();
