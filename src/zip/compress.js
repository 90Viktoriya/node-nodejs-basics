import { createReadStream, createWriteStream } from 'node:fs';
import stream from 'stream/promises';
import { createGzip } from 'zlib';
import { join } from 'path';

const compress = async () => {
  const __dirname = import.meta.dirname;
  const input = createReadStream(join(__dirname, "files", "fileToCompress.txt"));
  const output = createWriteStream(join(__dirname, "files", "archive.gz"));
  const gzip = createGzip();
  try {
    await stream.pipeline(input, gzip, output);
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await compress();