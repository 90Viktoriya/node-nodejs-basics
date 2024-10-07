import stream from 'stream/promises';
import {Transform} from 'stream';
import { stdin, stdout } from 'node:process';
import os from 'os';

const reverse = new Transform({
  transform(chunk, encoding, callback) {
    const arrayFromChunk = chunk.toString().split('');
    callback(null, arrayFromChunk.toReversed().join('') + os.EOL);
  },
});

const transform = async () => {
  const __dirname = import.meta.dirname;

  await stream.pipeline(stdin,
    reverse,
    stdout);
};

await transform();