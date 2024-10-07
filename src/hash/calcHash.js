import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';
import { createHash } from 'node:crypto';
import { join } from 'path';

const calculateHash = async () => {
  const hash = createHash('sha256');
  const __dirname = import.meta.dirname;
  const input = createReadStream(join(__dirname, "files", "fileToCalculateHashFor.txt"));
  input.pipe(hash).setEncoding('hex').pipe(stdout);
};

await calculateHash();