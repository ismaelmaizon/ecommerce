import { useContext, useEffect, useState } from 'react'
import clases from './sendMail.module.css'
import { MiContexto } from '../context/contex'
import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader, Center, Grid, Heading, Spacer, Text } from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate} from "react-router-dom";




function SendMail() {

    const {cartFinal, idVenta, name, phone, email, address, total, url, date, mount, valueRE, valueFP} = useContext(MiContexto)
    const router = useNavigate()
    const [mensaje, setMensaje] = useState()

    /*
   const getidVenta = async () =>{
        try{
            const response = await axios.get(`http://localhost:8080/api/auth/getIdVenta`, {withCredentials: true});
            console.log(response);
            //setIdVenta(response.i)
        }catch(err){
            console.log(err);
        }
   }*/
    /*
    const upDateVenta = async ( idVenta ) =>{
        console.log(idVenta);
        try{
            const response = await axios.get(`http://localhost:8080/api/auth/upDateVenta/${idVenta}`);
            console.log(response);
        }catch(err){
            console.log(err);

        }

    }*/
    /*
    const sendEmail = async ( idVenta) =>{
        let email = { email : localStorage.getItem('email') }
        console.log(email);
        try{
            const response = await axios.post(`http://localhost:8080/api/auth/sendMail/${idVenta}`, email , {withCredentials: true});
            console.log(response);
        }catch(err){
            console.log(err);

        }

    }*/
    
    const sendWsp = async (mensaje) => {
        // Número de WhatsApp al que se enviará el mensaje
        //const numeroWhatsApp = '+5493517641942';
        
        const numeroWhatsApp = `+5493517641942` ;
        // Construir el enlace de WhatsApp
        const enlaceWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    
        // Redirigir al usuario a WhatsApp
        window.location.href = enlaceWhatsApp;
    };


    const clearCart = () =>{
        sessionStorage.clear()
        localStorage.removeItem('idVenta')
    }
    
    useEffect(()=>{
        console.log(valueFP);
        console.log(valueRE);
        if (valueFP == 'DebitoCredito' && valueRE == 'Retiro' ) {
            // Mensaje predeterminado (Pago MP - Retiro)
            setMensaje( `¡Hola! mi codigo de venta es: *${idVenta}*, 
            \n Fecha: ${date}
            \n El valor total es:$ ${total}
            \n
            \n Link de pago: ${url} 
            \n
            \n Ya te paso el comprobante de Pago.
            \n Y en un momento paso por el local a retirar`)
        }else if ( valueFP == 'DebitoCredito' && valueRE == 'Envio') {
            // Mensaje predeterminado (Pago MP - Envio)
            setMensaje(`¡Hola! mi codigo de venta es: *${idVenta}*, 
            \n Fecha: ${date}
            \n El valor total es:$ ${total}
            \n Ubicacion: ${address}
            \n
            \n *Link de pago*: ${url} 
            \n
            \n Ya te paso el comprobante de Pago.`)
        }else if (valueFP == 'Efectivo' && valueRE == 'Retiro') {
            // Mensaje predeterminado (Pago Efectivo - Retiro)
            setMensaje(`¡Hola! mi codigo de venta es: *${idVenta}*, 
            \n Fecha: ${date}
            \n El valor total es:$ ${total}
            \n Pago con:$ ${mount} 
            \n En un momento paso por el local`)
        }else{
            // Mensaje predeterminado (Pago Efectivo - Envio)
            setMensaje(`¡Hola! mi codigo de venta es: *${idVenta}*, 
            \n Fecha: ${date}
            \n El valor total es:$ ${total}
            \n pago con:$ ${mount} 
            \n
            \n Ubicacion: ${address}`)
        }
    },[])

    return(
        <Card w='60%' m='auto' boxShadow='2px 2px 10px 2px ' >
            <CardHeader m='auto' display='flex' flexDirection='column' >
                <Heading size='md' p={2} >Codigo de Venta</Heading>
                <Heading size='md' p={2} color='white' borderRadius={5} backgroundColor='#179061' >{idVenta} </Heading>
            </CardHeader>
            <CardBody  >
            <Grid m='auto' pb={15} templateColumns='repeat(2, 1fr)'>
                <Box w='90%' h='100%' m='auto' p={15} >  
                    <Text fontSize='2xl' >Cliente</Text>
                    <Text fontSize='md' as='b'>Nombre:</Text>
                    <Text fontSize='md' >{name}</Text>
                    <Text fontSize='md' as='b'>email: </Text>
                    <Text fontSize='md' >{email} </Text>
                    <Text fontSize='md' as='b'>cel: </Text>
                    <Text fontSize='md' >{phone} </Text>
                    <Text fontSize='md' as='b'>Fecha: </Text>
                    <Text fontSize='md' >{date} </Text>
                </Box>
                <Box w='90%' h='100%' m='auto' p={15} display='flex' flexDirection='column'>
                    <Text fontSize='2xl' >
                        Pedido
                    </Text>
                    { cartFinal.map((el, index)=>{
                        return <div key={index}>
                                    <Text fontSize='lg' as='b' >
                                        {el.name} 
                                    </Text>
                                    <Text fontSize='sm'>
                                        Valor/u: ${el.price} - Cantidad: {el.cant} 
                                    </Text>
                                </div>
                    }) }
                    <Text fontSize='2xl' as='b'>
                        Total: {total}
                    </Text>
                </Box>
            </Grid>
            </CardBody>
            <CardFooter>
                <ButtonGroup>
                    <Button colorScheme='teal' variant='solid' onClick={ async ()=>{ 
                        //await deleteidVenta()
                        //await upDateVenta(idVenta)
                        //await sendEmail(idVenta)
                        router('/') } } >enviar por mail y finalizar</Button>
                    <Button colorScheme='teal' variant='solid' onClick={ async ()=>{
                        //await upDateVenta(idVenta)
                        //await sendEmail(idVenta)
                        await sendWsp(mensaje)
                        clearCart()
                        //await deleteidVenta()
                        //router('/')
                        } } >enviar wsp</Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}



export default SendMail