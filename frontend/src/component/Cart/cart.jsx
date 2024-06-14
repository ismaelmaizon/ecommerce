import { Button, Card, Grid, Heading, Image} from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import { MiContexto } from '../context/contex';
//import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import clases from './cart.module.css'
import Swal from 'sweetalert2';


function Cart () {    
    const router = useNavigate()
    
    const {productos, cart, cartFinal, setCartFinal} = useContext(MiContexto)
    const [total, setTotal] = useState(0)
    //render carrito
    const createCart = () =>{
        let car = []
        let sum = 0
        productos.map((el)=>{
            cart.map((elc)=>{
                if (el._id == elc.clave) {
                    el.cant = elc.valor
                    sum += elc.valor * el.price
                    car.push(el)
                }
            })
        })
        return {car, sum}
    }
    

    //eliminar producto del carrito
    const deletProductCart = async (id) => {
        const newCarro = cartFinal.filter(item => item._id !== id)
        let sum = 0
        newCarro.map((el)=>{
            sum += el.cant * el.price
        })
        sessionStorage.removeItem(id)
        setCartFinal(newCarro)
        setTotal(sum)
    }

    //alerta producto eliminado
    const alertDeleteProductCarrito = async () => {
        await Swal.fire({
            position: "top-end",
            icon: "success",
            title: "el producto se eliminio del carrito",
            showConfirmButton: false,
            timer: 1500
          });
    }
    
    useEffect(()=>{
        const {car, sum} = createCart()
        setCartFinal(car)
        setTotal(sum)
    }, [] )

    return (
        <div className={clases.container_carrito}>    
                <div className={clases.container_carrito}>
                    <h2 className={clases.container_carrito_title}>Tu carrito:</h2>
                    <div className='container_carrito_products'>
                    {   
                        cartFinal.map( (el, index) => {
                            return (
                                <Card
                                    key={index} 
                                    w='75%' m={'auto'} mt='25px' display={"flex"} flexDirection={"row"}
                                    >
                                    <Image
                                        objectFit='cover'
                                        maxW={{ base: '100%', sm: '70px' }}
                                        src={`http://localhost:8080/static/${el.urls[0].url}`}
                                        alt='Caffe Latte'
                                    />
                                    <Grid templateColumns={'repeat(2, 1fr)'} gap={20} margin={'auto'} w='100%'>
                                        <Heading size='md' m={3} >{el.name}</Heading>

                                        <h2> cantidad: {el.cant} </h2>
                                        <h2> Sub total:  { el.price * el.cant } </h2>
                                        <div className={clases.cart_buttons} >
                                            <Button variant='solid' colorScheme='blue' onClick={ async () =>{
                                                await deletProductCart(el._id)
                                                await alertDeleteProductCarrito()
                                                router('/')
                                            }}
                                            >
                                                delete
                                            </Button>
                                        </div>
                                    </Grid>
                                    
                                </Card>
                            )
                        })
                    }
                    </div>
                </div>
                <div>
                    <h1>
                        Total: {total}
                    </h1>
                    <Button variant='solid' colorScheme='blue' onClick={ async () => {
                        sessionStorage.clear()
                        router('/')
                        } } >
                        limpiar carrito
                    </Button>
                    <Button variant='solid' colorScheme='blue' onClick={ () => { 
                        router('/') }}>
                        volver
                    </Button>
                    <Button variant='solid' colorScheme='blue' onClick={ () => { 
                        setCartFinal(cartFinal)
                        router('/Dashboard') }}
                        >
                        comprar
                    </Button>
                    </div>
                    
            </div>
        )


}
/*
<div className={clases.container_carrito}>
            <h2 className={clases.container_carrito_title}>Tu carrito:</h2>
                <div className='container_carrito_products'>
                {
                    cart.map( (el, index) => {
                        console.log(el);
                        return (
                            <Card
                                key={index} 
                                w='75%' m={'auto'} mt='25px' display={"flex"} flexDirection={"row"}
                                >
                                <Image
                                    objectFit='cover'
                                    maxW={{ base: '100%', sm: '70px' }}
                                    src={`http://localhost:8080/static/${el.url}`}
                                    alt='Caffe Latte'
                                />
                                <Grid templateColumns={'repeat(2, 1fr)'} gap={20} margin={'auto'} w='100%'>
                                    <Heading size='md' m={3} >{el.name}</Heading>

                                    <h2> cantidad: {el.quiantity} </h2>
                                    <h2> Sub total:  { el.totalParcial } </h2>
                                    <div className={clases.cart_buttons} >
                                        <Button variant='solid' colorScheme='blue' onClick={ () => deletProductCart(el) } >
                                            delete
                                        </Button>
                                    </div>
                                </Grid>
                                
                            </Card>
                        )
                    })
                }
                </div>
            <div>
                <h1>
                    Total: {total}
                </h1>
                <Button variant='solid' colorScheme='blue' onClick={ async () => {
                    const res = await andleBuy(cart, total, user)
                    console.log(res);
                    /*
                    if(res.status == 200){
                        router('/')
                    }
                    } } >
                    concretar compra
                </Button>
                {preferenceId && <Wallet initialization={{preferenceId: preferenceId}} />}
                <Button variant='solid' colorScheme='blue'>
                    volver
                </Button>
                <Button variant='solid' colorScheme='blue' onClick={ async () => {
                    const res = await upDateCart(cartID, cart)
                    console.log(res);
                    if(res.status == 200){
                        router('/')
                    }
                }}>
                    guardar cambios
                </Button>
            </div>
        </div>
*/ 
/*  {preferenceId && <Wallet initialization={{preferenceId: preferenceId}} />}  */ 

export default Cart;