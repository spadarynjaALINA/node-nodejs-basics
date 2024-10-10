import {Worker} from 'worker_threads'

export const performCalculations = async () =>
{
    const procCount = process.env.NUMBER_OF_PROCESSORS
const workersArr =[]
        for ( let i = 0; i < procCount; i++ )
        {
            const mainThread = () => new Promise( ( resolve, reject ) =>
    {
            const worker = new Worker( './src/wt/worker', { workerData: i + 10 } )
                worker.on( 'message', msg => resolve( { status: 'resolved', data: msg } ) )
                worker.on('error',()=>reject({status:'error',data:null}))
            } )
             workersArr.push(mainThread)
    }
     const result =await Promise.all(workersArr.map(item=>item())).then(data=>console.log(data))

};
performCalculations()