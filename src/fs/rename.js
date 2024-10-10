import * as fs from 'fs';
import path from 'path';
const __dirname = path.resolve( path.dirname( 'src/fs/files' ) );
const files = path.join(__dirname, 'files/wrongFilename.txt');
const newFiles = path.join( __dirname, 'files/properFilename.md' );
import { rename as renameFile } from 'node:fs/promises'

const errorMsg = new Error('FS operation failed');

export const rename = async () =>
{
 fs.access( newFiles , ( err ) =>
  {
     if ( err )
     {
         fs.access( files, ( err ) =>
         {
             if ( err ) { console.error( errorMsg.message ) } else
             {
renameFile(files, newFiles, (err) => {
  if (err) console.error( errorMsg.message )
});
             }
         })
     } else
             {
                 console.error( errorMsg.message )
             }
    })
};

rename()