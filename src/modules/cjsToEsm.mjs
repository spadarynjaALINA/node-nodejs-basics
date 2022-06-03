import path,{dirname} from'path';
import {release, version} from'os';
import { createServer as createServerHttp } from 'http';
import { fileURLToPath } from 'url';
import  './files/c.js';
import { readFile } from 'fs/promises';

const random = Math.random();


let pathModule = random > 0.5?'./files/a.json':'./files/b.json'
const unknownObject  = JSON.parse(
  await readFile(
    new URL(pathModule, import.meta.url)
  )
);

const __filename =fileURLToPath(import.meta.url)
const __dirname =dirname(__filename)

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

export {
    unknownObject,
    createMyServer,
};
