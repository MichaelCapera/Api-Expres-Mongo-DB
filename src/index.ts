import app from './app' // importamos app
import {startConnection} from './database'// importamos la función de la base de datos

async function main(){
    startConnection();
    await app.listen(app.get('port'));
    console.log('server on port', app.get('port'));
}

main();