import * as fs from 'fs';
import path from 'path';
import { access, constants } from 'node:fs';
const __dirname = path.resolve( path.dirname( 'src/fs/files' ) );
const errorMsg = new Error('FS operation failed');
export const create = async () =>
{
   access(path.join(__dirname,'files', 'fresh.txt'), constants.F_OK, (err) => {
    err? fs.writeFile(path.join(__dirname,'files', 'fresh.txt'), 'I am fresh and young', (error) => {
    if (error) return console.error(errorMsg.message);
  }): console.error(errorMsg.message)
});

};
create()