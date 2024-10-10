import * as fs from 'fs';
import path from 'path';
const __dirname = path.resolve( path.dirname( 'src/fs/files' ) );
const errorMsg = new Error('FS operation failed');

export const read = async () =>
{
    fs.readFile( path.join( __dirname, 'files/fileToRead.txt' ), 'utf-8', ( err , data) =>
    {
        if ( err ) { console.error( errorMsg.message ); }
         process.stdout.write( data)
});
};

read()