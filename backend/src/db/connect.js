import mongoose from "mongoose";


async function connectDB() {
    console.log('MONGODB_URL');
    console.log(process.env.MONGODB_URL);
    if (!process.env.MONGODB_URL){
        throw new Error('falta variable de entorno MONGODB_URL')
    }
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('Conexion exitosa');
    }catch(error){
        console.log(error);
        console.log('error al conectar con db');
    }
}


export default connectDB;