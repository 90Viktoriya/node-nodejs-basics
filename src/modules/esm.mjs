import path, { join } from 'path';
import fs from 'fs/promises';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
await import('./files/c.js');

const __filename = import.meta.filename;
const __dirname = import.meta.dirname;
const random = Math.random();

let fileName = '';
if (random > 0.5) {
    fileName = 'a.json';
} else {
    fileName = 'b.json';
}
const unknownObject = await fs.readFile(join(__dirname, "files" , fileName), 'utf8');

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export {
    unknownObject,
    myServer,
};

