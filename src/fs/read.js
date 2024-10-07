import fs from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const errorMessage = 'FS operation failed';
  const fileName = join(__dirname, "files", "fileToRead.txt");
  try {
  const contents = await fs.readFile(fileName, { encoding: 'utf8' });
  console.log(contents);
  } catch (error) {
    throw new Error(errorMessage);
  }

};

await read();