import { useContext, useEffect, useState } from "react";
import Swal from 'sweetalert2';
import {
  Button,
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  Text,
  CardFooter,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { MiContexto } from "../context/contex";
import { useNavigate } from "react-router-dom";
import clases from './productDetail.module.css'


function ProductDetail() {

    const router = useNavigate()
    //usuario
    const { user, getProducts } = useContext(MiContexto)
    //constador de productos
    const [cont, setCont] = useState(1)
    const [num, setNum ] = useState(0)
    function sumCont () {
        setCont(cont+1)
    }
    function resCont () {
        if (cont-1 <= 1) {
            setCont(1)
        }else{
            setCont(cont-1)
        }
    }
    
    //contexto
    const {productoId, getProduct, producto, isLoading, setIsLoading, deleteProduct} = useContext(MiContexto)
        
    //agregar al carrito
    const addCart = async ( productoId, cont, producto) => {
        if(num > producto.stock){
            alertStock()
        }else{
            sessionStorage.setItem(productoId, cont);
            alertAgregarCarrito();
        }
    }        
    //sweetAlert2    
    const alertAgregarCarrito = async () => {
        await Swal.fire({
            position: "top-end",
            icon: "success",
            title: "el producto se agrego al carrito",
            showConfirmButton: false,
            timer: 1500
          });
    }
     
    //alerta eliminacion de producto (para usuario Admin)
    const alertProductoEliminado = async () => {
        let response = {}
        await Swal.fire({
            title: "El producto se Elimino",
            showConfirmButton: true,
            confirmButtonText: "volver al inicio"
          }).then( (result) => {
            console.log(result);
            response = result
          });
        return response
    }
    //alerta stock
    const alertStock = async () => {
        await Swal.fire({
            title: "Superas el Stock disponible, porfavor cambiar valor en la cantidad de producto seleccionado",
            showConfirmButton: true,
            confirmButtonText: "Entiendo",
            icon: "warning",
          })
    }
    //eliminar producto
    const deleteProd = (role, id) => {
        console.log('deleteProd:  ');
        console.log(role);
        if (role === 'admin') {
            return  <div>
                        <Button variant='solid' colorScheme='blue' fontSize={10} h={8} onClick={ async () =>  {
                            let result = await deleteProduct(id)
                            console.log('resultado: ');
                            console.log(result);
                            if (result.ok) {
                                let resp = await alertProductoEliminado()
                                if (resp.isConfirmed) await getProducts(), router('/') 
                            }
                        } } >
                            elimnar
                        </Button>
                    </div>
        }
    }
    
    //actualizar producto
    const updateProd = (role) => {
        console.log('deleteProd:  ');
        console.log(role);
        if (role === 'admin') {
            return  <div>
                <Button variant='solid' colorScheme='blue' fontSize={10} h={8} onClick={ async () =>  { router('/updateproducto') }} > Editar </Button>
            </div>
        }
    }
    useEffect(  ()=> {
        setIsLoading(true)
        getProduct(productoId)
    }, [])

    return (
        isLoading ? (
            <Text display={'flex'} m={'auto'} fontSize={70} > Cargando...</Text> )
            :(
            <Card
                direction={{ base: 'column', sm: 'column' }}
                overflow='hidden'
                variant='outline'
                m='auto'
                width={[
                    '100%', // 0-30em
                    '50%', // 30em-48em
                    '25%', // 48em-62em
                    '15%', // 62em+
                  ]}
                boxShadow='2px 2px 20px 2px'
                >
                <Grid templateColumns='repeat(2, 1fr)' gap={2} w={'100%'} m='auto' padding={2} >
                    <GridItem m={'auto'}>
                        <Image
                            boxSize={'100%'}
                            fit='cover'
                            src={ `http://localhost:8080/static/${producto.urls[num].url}` }                    
                            />
                    </GridItem>
                    <GridItem m='auto' p={2} w={'60%'} >
                        <Grid templateRows='repeat(1, 0.25fr)'>
                                {producto.urls.map( (el, index) =>{
                                    return <Card key={index} mb={2}>
                                            <Button w='100%' h='100%' m='auto' onClick={ () => { setNum(index) }} >
                                                        <Image
                                                            boxSize={'100%'}
                                                            objectFit='cover'
                                                            fit='cover'
                                                            src={ `http://localhost:8080/static/${el.url}` }                    
                                                            />
                                            </Button>
                                        </Card>
                                        } )}
                        </Grid>   
                    </GridItem>
                </Grid>
                
                <Stack w={'80%'} padding={2} >
                    <CardBody h={'20%'} p={2} >
                        <Heading fontSize={15}>{producto.name}</Heading><Heading fontSize={15} > ${producto.price} </Heading>
                        <Text fontSize={10} mt={2} >{producto.description}</Text>
                    </CardBody>
                    <CardFooter display={'grid'} gridTemplateRows={'30% 70%'} p={2}>
                        <div className={clases.cart_buttons} >
                                    <Text fontSize={10} pb={2} >Elige la cantidad</Text>
                                    <div className={clases.cart_buttons_cont} >
                                        <Button variant='solid' colorScheme='blue' h={6} onClick={ () => resCont()}>
                                            -
                                        </Button>
                                        <h3>{cont}</h3>
                                        <Button variant='solid' colorScheme='blue' h={6} onClick={ () => sumCont()}>
                                            +
                                        </Button>
                                    </div>
                                    <div className={clases.cart_buttons_crud}>
                                        <Button variant='solid' colorScheme='blue' fontSize={10} h={8} onClick={ async () =>  {
                                            router('/')    
                                            } } >
                                            volver
                                        </Button>
                                        <Button variant='solid' colorScheme='blue' fontSize={10} h={8} onClick={ async () =>  {
                                            await addCart(productoId, cont, producto)
                                            router('/')    
                                            } } >
                                            Agregar al carrito
                                        </Button>
                                        <div>
                                            { user && deleteProd(user.role, productoId)}
                                        </div>
                                        <div>
                                            { user && updateProd(user.role)}
                                        </div>
                                    </div>
                        </div>
    
                    </CardFooter>
                </Stack>
            </Card>
        )
    )
}

export default ProductDetail