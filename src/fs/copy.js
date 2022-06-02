import * as fs from 'fs';
import path from 'path';
const __dirname = path.resolve( path.dirname( 'src/fs/files' ) );
const files = path.join(__dirname, 'files');
const filesCopy = path.join(__dirname, 'filesCopy');
const errorMsg = new Error('FS operation failed');

export const copy = async () =>
{
  fs.access( files, ( err ) =>
  {
    if ( err )
    {
console.error( errorMsg.message)

    } else
    {
       fs.access( filesCopy, ( err ) =>
      {
        if ( err )
        {
          fs.mkdir( filesCopy, { recursive: true }, ( err ) =>
          {
            if ( err ) throw err;
          } );

         fs.readdir(files, function (err, items) {
          if (err) console.error(errorMsg.message)
          items.forEach(function (item) {
            fs.copyFile(path.join(__dirname, 'files', item), path.join(__dirname, 'filesCopy', item), (err) => {
              if (err) throw err;
            });
          });
        } );

  }else
        {
          console.error( errorMsg.message)
        }
      } )
    }
  } )
}
copy()
