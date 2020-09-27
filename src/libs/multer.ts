import multer from 'multer';
import  { v4 as uuidv4 } from 'uuid';
import path from 'path'; 

const storage = multer.diskStorage({// Guarda en la carpeta asigna la imágen
    destination: 'uploads',//Carpeta donde se guarda el archivo
    filename: (req, file, cb) =>{   //Renombra archivos
     cb(null, uuidv4() + path.extname(file.originalname));//extensiones
    }
});
export default multer ({storage});