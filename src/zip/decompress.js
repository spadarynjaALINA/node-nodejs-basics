import fs from 'fs';
import zlib  from 'zlib';



export const decompress = async () =>
{
 const output = fs.createWriteStream('src/zip/files/fileToCompress.txt' );
const input  = fs.createReadStream( 'src/zip/files/archive.gz' );
const unzip = zlib.createGunzip()

 input.pipe(unzip).pipe(output);
};
decompress()