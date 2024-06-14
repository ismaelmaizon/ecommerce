import React, { useContext } from "react";
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
import clases from './addProduct.module.css'



function AddProducto() {

    //contexto
    const {getProducts} = useContext(MiContexto)
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
    //alerta eliminacion de producto
    const alertProductoCreado = async () => {
        let response = {}
        await Swal.fire({
            title: "El producto se Creo",
            showConfirmButton: true,
            confirmButtonText: "volver al inicio"
          }).then( (result) => {
            console.log(result);
            response = result
          });
        return response
    }

    //Logs
    console.log(getValues());
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className={clases.formulario} action="/upload" method="post" encType="multipart/form-data" >
                <FormControl isInvalid={errors.name} backgroundColor={'#666666'} borderRadius={'15px'} p={50} >
                    <p className={clases.formilario_title}>Agregar Producto</p>
                    <FormLabel htmlFor='name' mt={5} >Nombre Producto</FormLabel>
                    <Input
                    id='name'
                    placeholder='ingrese nombre del producto'
                    color={'black'}
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
                    placeholder='precio del producto'
                    color={'black'}
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
                    placeholder='brebe descripcion del producto'
                    color={'black'}
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
                    placeholder='ingrese el stock actual del producto que vas a crear'
                    color={'black'}
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
                    <Select placeholder='Select option' {...register('tipo')} backgroundColor={'white'} color={'black'} >
                        <option value='Alfombra'>Alfombra</option>
                        <option value='Impresion 3D'>Impresion 3D</option>
                        <option value='Interior'>Interior</option>
                        <option value='Abertura'>Abertura</option>
                    </Select>
                    <FormLabel htmlFor='image' mt={5} >Imagen</FormLabel>
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
                        const producto = getValues();
                        const formData = new FormData();
                        formData.append('name', producto.name);
                        formData.append('precio', producto.precio);
                        formData.append('descripcion', producto.descripcion);
                        formData.append('stock', producto.stock);
                        formData.append('tipo', producto.tipo);
                        formData.append('image', producto.image[0]);
                        console.log(formData);
                        try {
                            const response = await axios.post('http://localhost:8080/api/auth/agregarProducto', formData,{withCredentials: true}, {
                              headers: {
                                'Content-Type': 'multipart/form-data', // Set the content type to multipart/form-data
                              },
                            });
                            console.log('Producto creado:', response.data);
                            if (response) {
                                let resp = await alertProductoCreado()
                                console.log(resp.isConfirmed);
                                if (resp.isConfirmed) await getProducts(), router('/');
                            }
                          } catch (error) {
                            console.error('Error al crear el producto:', error);
                          }
                    } } >
                        crear
                    </Button>
                </FormControl>
            </form>
        </div>
    )
}



export default AddProducto