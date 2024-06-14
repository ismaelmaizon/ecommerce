import React, { useContext, Component } from "react";
import axios from "axios";
import { useForm } from 'react-hook-form'
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Select,
} from '@chakra-ui/react'
import clases from './downloadcv.module.css'
import { useNavigate} from "react-router-dom";



function downloadcv() {

    const router = useNavigate()


    const {
        handleSubmit,
        register,
        getValues,
        formState: { errors, isSubmitting },
    } = useForm()
    
    const descargarPDF = async () => {
        try {
        // Hacer una solicitud GET a la ruta de descarga del PDF en tu API
        const response = await axios.get('http://localhost:8080/api/auth/descargarCV', {
            responseType: 'blob' // Indicar que esperamos un blob como respuesta
        });
    
        // Crear una URL del objeto Blob recibido
        const url = window.URL.createObjectURL(new Blob([response.data]));
    
        // Crear un enlace temporal
        const enlaceDescarga = document.createElement('a');
        enlaceDescarga.href = url;
        enlaceDescarga.setAttribute('download', 'archivo.pdf');
    
        // Simular un clic en el enlace para iniciar la descarga
        document.body.appendChild(enlaceDescarga);
        enlaceDescarga.click();
    
        // Limpiar la URL creada después de un tiempo para liberar recursos
        setTimeout(() => {
            window.URL.revokeObjectURL(url);
            document.body.removeChild(enlaceDescarga);
        }, 100);
        } catch (error) {
        console.error('Error al descargar el archivo:', error);
        } 
    }  
    
    


    //Logs
    console.log(getValues());
    return (
        <div>
            <h1 className={clases.formulario_title}>download CV</h1>
            <Button mt={4} colorScheme='teal' isLoading={isSubmitting} onClick={ () => {descargarPDF()}} >
                DescargarCV
            </Button>
        </div>
    )
}  




export default downloadcv