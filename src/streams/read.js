import fs from'fs';
import path,{dirname}  from 'path';
import { fileURLToPath } from 'url';
const errorMsg = new Error('FS operation failed');
export const read = async () =>
{
    const __filename = fileURLToPath( import.meta.url )
    const __dirname =dirname(__filename)
    const stream = fs.createReadStream(path.join(__dirname, 'files/fileToRead.txt'), 'utf-8');
let data = '';
stream.on('data', (chunk) => (data += chunk));
stream.on('end', () => process.stdout.write(data));
stream.on('error', () => process.stdout.write(errorMsg.message));
};
read()