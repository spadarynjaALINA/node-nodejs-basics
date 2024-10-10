import * as fs from 'fs';
import readline from'readline';
import path from 'path';
const __dirname = path.resolve( path.dirname( 'src/streams/files' ) );
const errorMsg = new Error('FS operation failed');
import { stdin, stdout } from'process';
export const write = async () =>
{
    const output = fs.createWriteStream( path.join( __dirname, 'files/fileToWrite.txt') );
    const rl = readline.createInterface( { input: stdin, output: stdout } );
   ;
    stdout.write( 'Enter your message\n' );

    rl.on( 'line', ( i ) =>
    {
        if ( i === 'exit' )
        {
            process.exit();
        } else
        {
            output.write( `${i}\r\n` );
        }
    } );
     process.on( 'exit', () =>
    {
        stdout.write( 'Bye!!' );
    } )

}
write()