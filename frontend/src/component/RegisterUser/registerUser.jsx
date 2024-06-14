import React, { useContext } from "react";
import Swal from 'sweetalert2';
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
import { Link, useNavigate } from "react-router-dom";
import clases from './registerUser.module.css'

function RegisterUser() {
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

    const router = useNavigate()
    //sweetAlert2    
    const alertaRegistroOK = async () => {
        await Swal.fire({
            position: "top-end",
            icon: "success",
            title: "usuario registrado",
            showConfirmButton: false,
            timer: 1500
          });
    }

    //Logs
    console.log(getValues());
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className={clases.formulario} >
                <FormControl isInvalid={errors.name} backgroundColor={'#666666'} borderRadius={'15px'} p={50}>
                    <p className={clases.formulario_title}>Registrarse</p>
                    <FormLabel htmlFor='first_name' mt={5}  >Nombre</FormLabel>
                    <Input
                    color={"black"}
                    backgroundColor={"white"}
                    type="text"
                    name="first_name"
                    placeholder='ingrese nombre del producto'
                    {...register('first_name', {
                        required: 'This is required',
                        minLength: { value: 4, message: 'Minimum length should be 4' },
                    })}
                    />
                    <FormLabel htmlFor='last_name' mt={5} >Apellido</FormLabel>
                    <Input
                    color={"black"}
                    backgroundColor={"white"}
                    type="text"
                    name="last_name"
                    placeholder='ingrese nombre del producto'
                    {...register('last_name', {
                        required: 'This is required',
                        minLength: { value: 4, message: 'Minimum length should be 4' },
                    })}
                    />
                    <FormLabel htmlFor='email' mt={5} >Email</FormLabel>
                    <Input
                    color={"black"}
                    backgroundColor={"white"}
                    type="text"
                    name="email"
                    placeholder='ingrese nombre del producto'
                    {...register('email', {
                        required: 'This is required',
                        minLength: { value: 4, message: 'Minimum length should be 4' },
                    })}
                    />
                    <FormLabel htmlFor='password' mt={5} >password</FormLabel>
                    <Input
                    color={"black"}
                    backgroundColor={"white"}
                    type="text" 
                    name="password"
                    placeholder='ingrese imagen de producto'
                    {...register('password', {
                        required: 'This is required',
                        minLength: { value: 4, message: 'Minimum length should be 4' },
                    })}
                    />
                    <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'  onClick={ async ()=>{
                        const info = getValues();
                        const formData = new FormData();
                        formData.append('first_name', info.first_name);
                        formData.append('last_name', info.last_name);
                        formData.append('email', info.email);
                        formData.append('password', info.password);
                        formData.append('role', info.role);
                        console.log(info);
                        
                        try {
                            const response = await axios.post('http://localhost:8080/api/auth/register', formData, {
                              headers: {
                                'Content-Type': 'multipart/form-data', // Set the content type to multipart/form-data
                              },
                            });
                            console.log('register:', response.data);
                            if(response.status == 200){
                                alertaRegistroOK();
                                router('/login')
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



export default RegisterUser