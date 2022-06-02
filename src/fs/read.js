import * as fs from 'fs';
import path from 'path';
const __dirname = path.resolve( path.dirname( 'src/fs/files' ) );
const errorMsg = new Error('FS operation failed');

export const read = async () =>
{
const stream = fs.createReadStream(path.join(__dirname, 'files/fileToRead.txt'), 'utf-8');
let data = '';
stream.on('data', (chunk) => (data += chunk));
stream.on('end', () => console.log(data));
stream.on('error', (error) => console.error( errorMsg.message));

};

read()