import * as fs from 'fs';
import path from 'path';
const __dirname = path.resolve( path.dirname( 'src/fs/files' ) );
const errorMsg = new Error('FS operation failed');
const arrNames =[]
export const list = async () =>
{
 fs.readdir(path.join(__dirname, 'files/'), { withFileTypes: true }, function (err, items) {
  if (err) {console.error(errorMsg.message);}else {items.forEach(function (item) {
    let name = path.parse(item.name).name;
arrNames.push(name)

  } );
  console.log(arrNames)}
});
};

list()