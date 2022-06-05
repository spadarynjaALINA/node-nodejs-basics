import {spawn} from'child_process';
import path from 'path';
const __dirname = path.resolve( path.dirname( 'src/cp/files' ) );
const source = path.join(__dirname, 'files/script.js');
const opts = {
    stdio:['pipe', 'pipe', 'pipe','ipc']
};

export const spawnChildProcess = async ( ...args ) =>
{

  const node = spawn('node', [source, ...args],opts);

process.stdin.pipe(node.stdin)
node.stdout.pipe(process.stdout)
node.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
};
spawnChildProcess( 'args1', 'args2', 'args3' )