import { createReadStream } from 'node:fs';
import stream from 'stream/promises';
import { stdout } from 'node:process';
import { join } from 'path';

const read = async () => {
  const __dirname = import.meta.dirname;
  const input = createReadStream(join(__dirname, "files", "fileToRead.txt"));
  await stream.pipeline(input, stdout, { end: false });
};

await read();