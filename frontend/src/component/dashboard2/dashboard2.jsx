import { useContext, useEffect, useState } from "react"
import axios from "axios"
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { useNavigate} from "react-router-dom"
import { Box, Button, ButtonGroup, Card, Center, Flex, FormControl, FormErrorMessage, FormHelperText, FormLabel, Grid, Input, InputGroup, InputLeftAddon, Radio, RadioGroup, Spacer, Stack, Switch, Tab, TabList, Tabs, Text } from "@chakra-ui/react"
import { MiContexto } from "../context/contex"
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import { useForm } from "react-hook-form"
import Swal from "sweetalert2"




function Dashboard2() {

    initMercadoPago( `APP_USR-e3b502c8-98eb-4a33-b61c-5fbad78d4806` , { locale: 'es-AR' });
    const router = useNavigate()
    const {cartFinal, valueRE, setValueRE,valueFP, setValueFP} = useContext(MiContexto)
    
    const [totalEnd, settotalEnd] = useState(0)
    const [preferenceId, setpreferenceId] = useState()

    //submite Del formulario
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

    //form Forma de Entrega
    const formaEntrega = () => {
        return <form onSubmit={handleSubmit(onSubmit)}>
            <FormLabel>Escriba su Ubicacion</FormLabel>
            <InputGroup>
                <InputLeftAddon><FaMapMarkerAlt /></InputLeftAddon>
                <Input
                mb={5} 
                type='text' 
                id='address'
                placeholder='ingrese su ubicacion'
                color={'black'}
                backgroundColor={'white'}
                {...register('address', {
                    required: 'This is required',
                    minLength: { value: 4, message: 'Minimum length should be 4' },
                })}/>
            </InputGroup>
        </form>
    }
    //form Forma de Entrega
    const formaPago = () => {
        return <form onSubmit={handleSubmit(onSubmit)}>
            <FormLabel>¿Con cuanto abonas?</FormLabel>
            <InputGroup>
                <InputLeftAddon><FaDollarSign /></InputLeftAddon>
                <Input
                mb={5} 
                type='text' 
                id='mount'
                placeholder='ingrese el monto '
                color={'black'}
                backgroundColor={'white'}
                {...register('mount', {
                    required: 'This is required',
                    minLength: { value: 4, message: 'Minimum length should be 4' },
                })}/>
            </InputGroup>
        </form>
    }

    //alerta info
    const alertInfo = async (message) => {
        await Swal.fire({
            position: "center",
            icon: "warning",
            title: message,
            showConfirmButton: false,
            timer: 1500
        });
    }

    //validar info
    const validateInfo = async(info) =>{

        if (info.name == '' || info.email == '' || info.phone == ''){
            alertInfo('falta informacion personal')
            return undefined 
        }else if ( valueFP == 'Efectivo' && info.mount < totalEnd ){
            alertInfo('Monto ingresado debe ser mayo al TOTAL')
            return undefined 
        }else if (valueRE == 'Envio' && info.address == ''){
            alertInfo('Necesitamos su Ubicacion')
            return undefined 
        }
        else{
            let newUser = {
                name : info.name,
                email : info.email,
                phone : info.phone,
                mount : info.mount,
                address: info.address
            }
            return newUser
        }
    }

    //concretar venta MP
    const registrarVentaMP = async (cart, total, user) => {
        console.log(user);
        let body = {
            user: user,
            products: cart,
            total: total
        }
        console.log(body);
        try {
            const response = await axios.post(`http://localhost:8080/api/auth/registrarVenta`, body, {withCredentials: true});
            //console.log('registrar venta:', response);
            console.log('response:' );
            console.log(response.data.response);
            console.log('response2:');
            console.log(response.data.pago);
            //registrar en localStorage
            localStorage.setItem('idGenerete' ,response.data.response.idGenerete)
            localStorage.setItem('name',response.data.response.name)
            localStorage.setItem('email',response.data.response.email)
            localStorage.setItem('phone',response.data.response.phone)
            localStorage.setItem('total',response.data.response.total)
            localStorage.setItem('date',response.data.response.date)
            if (response.data.ok == false) {
                console.log(response.data.message);
                return null
            }else{
            //const { init_point } = response.data.pago
            const { id } = response.data.pago
            console.log(id);
            return id
            }
        } catch (error) {
            console.log('Error al registrar venta', error);
        }
    }

    const andleBuy = async (cart, total, user) => {
        console.log(user);
        if (valueFP == 'DebitoCredito' && valueRE == 'Retiro' ) {
            const id = await registrarVentaMP(cart, total, user)
            console.log(id);
            setpreferenceId(id)
        }else if ( valueFP == 'DebitoCredito' && valueRE == 'Envio') {
            const id = await registrarVentaMP(cart, total, user)
            setpreferenceId(id)
            localStorage.setItem('address',user.address)
        }else if (valueFP == 'Efectivo' && valueRE == 'Retiro') {
            await registrarVentaMP(cart, total, user)
            localStorage.setItem('mount',user.mount)
        }else{
            await registrarVentaMP(cart, total, user)
            localStorage.setItem('mount',user.mount)
            localStorage.setItem('address',user.address)
        }
    }

    useEffect(()=>{
        console.log('dash2');
        let total = 0
        cartFinal.map((el)=>{
            total += el.cant * el.price
        })
        settotalEnd(total)
    },[])

    return (
        <Card w='100%' m='auto' mb={30} mt={150} bg='gray.400'>
            <Center fontSize='4xl'>
                    Ultimo Paso
            </Center>
            <Grid templateColumns='repeat(2, 1fr)' gap={5} m={15} p={5} >
            <form onSubmit={handleSubmit(onSubmit)} action="/upload" method="post" encType="multipart/form-data">
                <FormControl isInvalid={errors.name} >
                    <Text fontSize='lg' mb={5}>
                        Necesitamos tu informacion personal para concretar la compra
                    </Text>
                    <FormLabel>Nombre Completo</FormLabel>
                    <Input 
                    mb={5}
                    type='text'
                    id='name'
                    placeholder='ingrese su nombre'
                    color={'black'}
                    backgroundColor={'white'}
                    {...register('name', {
                        required: 'This is required',
                        minLength: { value: 4, message: 'Minimum length should be 4' },
                    })}
                    /><FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
                    <FormLabel>Email</FormLabel>
                    <Input
                    mb={5} 
                    type='email'
                    id='email'
                    placeholder='ingrese su correo electronico (opcional)'
                    color={'black'}
                    backgroundColor={'white'}
                    {...register('email', {
                        required: 'This is required',
                        minLength: { value: 4, message: 'Minimum length should be 4' },
                    })}
                    /><FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
                    <FormLabel>Telefono Movil</FormLabel>
                    <InputGroup>
                        <InputLeftAddon>+54 9</InputLeftAddon>
                        <Input
                        mb={5} 
                        type='number' 
                        id='phone'
                        placeholder='3512267962'
                        color={'black'}
                        backgroundColor={'white'}
                        {...register('phone', {
                            required: 'This is required',
                            minLength: { value: 3, message: 'Minimum length should be 4' },
                            maxLength: { value: 9, message: 'Max length should be 9' }
                        })}/><FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
                    </InputGroup>
                    <FormLabel>Forma de Entrega: {valueRE} </FormLabel>
                    <Tabs variant='soft-rounded' colorScheme='green'>
                        <TabList>
                            <Tab onClick={()=>{ setValueRE('Retiro') }} >Retiro Personalmente</Tab>
                            <Tab onClick={()=>{ setValueRE('Envio') }}>Quiero que me lo Envien</Tab>
                        </TabList>
                    </Tabs>
                    {valueRE == 'Envio' &&  formaEntrega()}
                    <FormLabel>Forma de Pago: {valueFP} </FormLabel>
                    <Tabs variant='soft-rounded' colorScheme='green'>
                        <TabList>
                            <Tab onClick={()=>{ setValueFP('DebitoCredito') }}>Debito/Credito</Tab>
                            <Tab onClick={()=>{ setValueFP('Efectivo') }}>Efectivo</Tab>
                        </TabList>
                    </Tabs>
                    {valueFP == 'Efectivo' && formaPago()}
                    <ButtonGroup mt={15}>
                        <Button onClick={()=>{ router('/') }} >Volver</Button>
                        <Button isLoading={isSubmitting} type='submit' onClick={ async ()=>{ 
                            const info = getValues()
                            console.log('info');
                            console.log(info);
                            const respInfo = await validateInfo(info)
                            if (respInfo != undefined) {
                                if (!preferenceId) {
                                    await andleBuy(cartFinal, totalEnd, respInfo) 
                                    router('/sendEmail')
                                }
                                await andleBuy(cartFinal, totalEnd, respInfo) 
                            }
                        }} 
                            >Pedir</Button>
                    </ButtonGroup>
                </FormControl>
            </form>
                <Box w='90%' h='100%' m='auto' p={15} display='flex' flexDirection='column'>
                    <Text fontSize='2xl' >
                        Descripcion
                    </Text>
                    { cartFinal.map((el, index)=>{
                        return <div key={index}>
                                    <Text fontSize='lg' >
                                        producto: {el.name} 
                                    </Text>
                                    <Text fontSize='sm'>
                                        Valor por Unidad: ${el.price} - cantidad: {el.cant} 
                                    </Text>
                                </div>
                    }) }
                    <Spacer/>
                    <Text fontSize='2xl' >
                        Total: {totalEnd}
                    </Text>
                </Box>
                
            </Grid>
            <Box mb={100} p={2}>
                {preferenceId && <Wallet initialization={{preferenceId: preferenceId}} />}
            </Box>
        </Card>
    )
}



export default Dashboard2