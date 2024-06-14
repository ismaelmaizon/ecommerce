import { useContext, useEffect, useState } from 'react'
import clases from './sendMail.module.css'
import { MiContexto } from '../context/contex'
import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader, Center, Heading, Spacer, Text } from '@chakra-ui/react';
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
        <div className={clases.formulario}>
            <Card  backgroundColor={'#666666'} >
                <CardHeader>
                    <Heading size='md'  > Codigo de Venta: </Heading>
                    <Center fontSize={25} >{idVenta} </Center>
                </CardHeader>
                <CardBody>
                    <Text fontSize={25} pt={10} >info personal</Text>
                    <Text fontSize={15} >nombre: {name}</Text>
                    <Text fontSize={15} >email: {email} </Text>
                    <Text fontSize={15} >cel: {phone} </Text>
                    <Text fontSize={15} >Fecha: {date} </Text>
                </CardBody>
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
                        Total: {total}
                    </Text>
                </Box>
                <CardFooter>
                    <ButtonGroup>
                        <Button onClick={ async ()=>{ 
                            //await deleteidVenta()
                            //await upDateVenta(idVenta)
                            //await sendEmail(idVenta)
                            router('/') } } >enviar por mail y finalizar</Button>
                        <Button onClick={ async ()=>{
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
        </div>
    )
}



export default SendMail