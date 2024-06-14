import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form'
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Select,
} from '@chakra-ui/react'
import { MiContexto } from "../context/contex";
import { useNavigate } from "react-router-dom";
import clases from './updateProduct.module.css'


function UpDateProducto() {

    //contexto
    const {getProducts, productoId,getProduct , producto} = useContext(MiContexto)
    //ruteo
    const router = useNavigate()

    const {
        handleSubmit,
        register,
        getValues,
        formState: { errors, isSubmitting },
    } = useForm()
    
    function onSubmit(values) {
        return new Promise((resolve) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            resolve()
        }, 3000)
        })
    }
    //alerta actualizacion de producto
    const alertProductoUpDate = async () => {
        let response = {}
        await Swal.fire({
            title: "El producto se Actualizo",
            showConfirmButton: true,
            confirmButtonText: "volver al inicio"
          }).then( (result) => {
            console.log(result);
            response = result
          });
        return response
    }
    useEffect(()=>{
        getProduct(productoId)
     } ,[])

    //Logs
    console.log(getValues());
    console.log(producto);
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className={clases.formulario} action="/upload" method="post" encType="multipart/form-data" >
                <FormControl isInvalid={errors.name} backgroundColor={'#C4A38C'} borderRadius={'15px'} p={50} display={'flex'} flexDirection={'column'}  >
                    <h3 className={clases.formilario_title} >Editar Producto</h3>
                    <p>solo escriba sobre aquellos que quiere modificar</p>
                    <FormLabel htmlFor='name' mt={5} >Nombre Producto</FormLabel>
                    <Input
                    id='name'
                    placeholder={producto.name}
                    backgroundColor={'white'}
                    {...register('name', {
                        required: 'This is required',
                        minLength: { value: 4, message: 'Minimum length should be 4' },
                    })}
                    />
                    <FormErrorMessage>
                    {errors.name && errors.name.message}
                    </FormErrorMessage>
                    <FormLabel htmlFor='precio' mt={5} >Precio</FormLabel>
                    <Input
                    id='precio'
                    placeholder={producto.price}
                    backgroundColor={'white'}
                    {...register('precio', {
                        required: 'This is required',
                        minLength: { value: 4, message: 'Minimum length should be 4' },
                    })}
                    />
                    <FormErrorMessage>
                    {errors.name && errors.name.message}
                    </FormErrorMessage>
                    <FormLabel htmlFor='descripcion' mt={5} >Descripcion del Producto</FormLabel>
                    <Input
                    id='descripcion'
                    placeholder={producto.description}
                    backgroundColor={'white'}
                    {...register('descripcion', {
                        required: 'This is required',
                        minLength: { value: 4, message: 'Minimum length should be 4' },
                    })}
                    />
                    <FormErrorMessage>
                    {errors.name && errors.name.message}
                    </FormErrorMessage>
                    <FormLabel htmlFor='stock' mt={5} >Stock Actual</FormLabel>
                    <Input
                    id='stock'
                    placeholder={producto.stock}
                    backgroundColor={'white'}
                    {...register('stock', {
                        required: 'This is required',
                        minLength: { value: 4, message: 'Minimum length should be 4' },
                    })}
                    />
                    <FormErrorMessage>
                    {errors.name && errors.name.message}
                    </FormErrorMessage>
                    <FormLabel htmlFor='tipo' mt={5} >Tipo</FormLabel>
                    <Select placeholder={producto.tipo} {...register('tipo')} backgroundColor={'white'} >
                        <option value='Alfombra'>Alfombra</option>
                        <option value='Impresion 3D'>Impresion 3D</option>
                        <option value='Interior'>Interior</option>
                        <option value='Abertura'>Abertura</option>
                    </Select>
                    <FormLabel htmlFor='image' mt={5} >Si no quiere cambiar la imagen, simplemente haga click en Editar</FormLabel>
                    <Input
                    type="file" 
                    name="image"
                    placeholder='ingrese imagen de producto'
                    {...register('image', {
                        required: 'This is required',
                        minLength: { value: 4, message: 'Minimum length should be 4' },
                    })}
                    />
                    <FormErrorMessage>
                    {errors.name && errors.name.message}
                    </FormErrorMessage>
                    
                    
                    <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'  onClick={ async ()=>{
                        const prod = getValues();
                        console.log(producto);
                        console.log('prod: ');
                        console.log(prod);
                        const formData = new FormData();
                        formData.append('name', prod.name == '' ? producto.name : prod.name) 
                        formData.append('precio', prod.precio == '' ? producto.price : prod.precio)
                        formData.append('descripcion', prod.descripcion == '' ? producto.description : prod.descripcion)
                        formData.append('stock', prod.stock == '' ? producto.stock : prod.stock)
                        formData.append('tipo', prod.tipo == '' ? producto.tipo : prod.tipo)
                        formData.append('image', prod.image[0] == null ? producto.url : prod.image[0])
                        try{
                            const response = await axios.post(`http://localhost:8080/api/auth/updateProducto/${productoId}`, formData,{withCredentials: true}, {
                              headers: {
                                'Content-Type': 'multipart/form-data', // Set the content type to multipart/form-data
                              },
                            });
                            console.log('Acualizando prod:', response.data);
                            if (response) {
                                let resp = await alertProductoUpDate()
                                console.log(resp.isConfirmed);
                                if (resp.isConfirmed) await getProducts(), router('/');
                            }
                          } catch (error) {
                            console.error('Error al actualizar el producto:', error);
                          }
                        }
                    } >
                        Editar
                    </Button>
                </FormControl>
            </form>
        </div>
    )
}



export default UpDateProducto