import { unlink } from 'node:fs';
import * as fs from 'fs';
import path from 'path';
const __dirname = path.resolve( path.dirname( 'src/fs/files' ) );
const files = path.join(__dirname, 'files/fileToRemove.txt');
const errorMsg = new Error('FS operation failed');
export const remove = async () =>
{
    fs.access( files, ( err ) =>
    {
        if ( err ) { console.error( errorMsg.message ) }
        else
        {
            fs.unlink( files, ( err ) =>
            {
            if ( err ) { console.error( errorMsg.message ) }
        })}
  })
};

remove()