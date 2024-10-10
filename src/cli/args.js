
import process from 'process'

export const parseArgs = () =>
{

    const args = process.argv.slice( 2 )
   args.map( ( item, index ) =>
    {if((index % 2===0 || index ===0))process.stdout.write(index !== args
        .length+1? `${item} is ${args[index+1]}, `:`${item} is ${args[index+1]}`)
    } )
};

parseArgs()