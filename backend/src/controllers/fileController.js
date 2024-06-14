
import fs from 'fs'
import __dirname from '../utils.js';
import sendEmail from '../mailer/mailer.js';

export const descargarpdf = async (req, res) => {
    const nombreArchivo = 'CVIsmaelmaizon.pdf';
    console.log(__dirname);
    const rutaArchivo = __dirname + '/cv/CVIsmaelmaizon.pdf';
    console.log(rutaArchivo);
    
    // Verificar si el archivo existe
    fs.access(rutaArchivo, fs.constants.F_OK, (err) => {
      if (err) {
        console.error('El archivo no existe:', err);
        res.status(404).send('El archivo no existe');
        return;
      }
  
      // Descargar el archivo PDF
      res.download(rutaArchivo, nombreArchivo, (err) => {
        if (err) {
          console.error('Error al descargar el archivo:', err);
          res.status(500).send('Error al descargar el archivo');
        } else {
          console.log('Archivo descargado exitosamente');
        }
      });
    });
}

