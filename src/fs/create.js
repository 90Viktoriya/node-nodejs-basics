import fs from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'url';

const create = async () => {
    const content = 'I am fresh and young';
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const filename = join(__dirname, "files", "fresh.txt");
    try {
      await fs.appendFile(filename, content, { flag: 'ax+' });
    } catch {
      throw new Error('FS operation failed');
    }
};

await create();