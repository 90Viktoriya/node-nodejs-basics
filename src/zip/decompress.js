import { createReadStream, createWriteStream } from 'node:fs';
import stream from 'stream/promises';
import { createUnzip } from 'zlib';
import { join } from 'path';

const decompress = async () => {
  const __dirname = import.meta.dirname;
  const input = createReadStream(join(__dirname, "files", "archive.gz"));
  const output = createWriteStream(join(__dirname, "files", "fileToCompress.txt"));
  const unzip = createUnzip();
  try {
    await stream.pipeline(input, unzip, output);
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await decompress();