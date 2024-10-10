import { Transform } from 'stream';
import { stdin, stdout } from 'process';

export const transform = async () =>
{
    class TransformStream extends Transform
    {
        constructor ( options = {} )
        {
        super(options)
    }

  _transform(chunk, enc, callback) {
          const chunkStringField = chunk.toString();
          const reverseChunk =`${chunkStringField.split('').reverse().join('')}\n`
    this.push(reverseChunk)

      callback();
    }
  }
    const transformString = new TransformStream()
    stdin.pipe(transformString).pipe(stdout)

};
transform()