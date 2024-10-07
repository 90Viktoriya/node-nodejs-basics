import { createWriteStream } from 'node:fs';
import stream from 'stream/promises';
import { stdin } from 'node:process';
import { join } from 'path';

const write = async () => {
  const __dirname = import.meta.dirname;
  const input = createWriteStream(join(__dirname, "files", "fileToWrite.txt"));
  await stream.pipeline(stdin, input);
};

await write();