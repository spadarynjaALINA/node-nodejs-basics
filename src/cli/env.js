import process from 'process'
function objectFilter(obj) {

let filtered={}
  for(let key in obj) {

      if ( key.includes( 'RSS_' ) )
      {
          filtered[key] = obj[key];
         process.stdout.write( `${key} = ${filtered[key]}; ` )
      }
  }
}
export const parseEnv = () =>
{
    const env = process.env

 objectFilter(env)

};

parseEnv()