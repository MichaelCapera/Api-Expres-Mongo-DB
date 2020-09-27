import {Schema, model, Document} from 'mongoose';

const schema = new Schema({ //schema de tipos de datos
    title: String,         //title of photo
    description: String,   // Description
    imagePath: String      // Url of Photo
});

interface Iphoto extends Document{  //Modelo de datos dentro de base de datos
    title: string;
    description: string;
    imagePath: string;
}

export default model<Iphoto>('Photo', schema);
