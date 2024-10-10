import { createHash } from 'crypto';
import { readFile } from 'fs/promises';
export const calculateHash = async () =>
{
    const string =
  await readFile(
    new URL('./files/fileToCalculateHashFor.txt', import.meta.url)
  )

  console.log( createHash('sha256').update(string).digest('hex'))
};
calculateHash()