import express from 'express'; // importamos express
import morgan from 'morgan'; //importamos morgan
import path from 'path';

const app = express(); // guardamos express en una constante app

import indexRoutes from './routes/index'// importamos rutas 

//seting
app.set('port', process.env.PORT || 4000);//si existe un puerto
                                         //Toma ese puerto
                                         // o de lo contrario el 4000

//middleware 
app.use(morgan('dev'));
app.use(express.json()); 

//routes
app.use('/api', indexRoutes);

//this folder will be used to store public files
app.use('/uploads', express.static(path.resolve('uploads')));

export default app; // exportamos la contante app