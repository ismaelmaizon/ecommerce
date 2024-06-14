import { useContext,  useState } from "react";
import { MiContexto } from "../context/contex";
import { Button, Card, CardBody, CardFooter, CardHeader, Heading, Image, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";

import clases from './allproducts.module.css'
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";



function Allproductos () {

    const {productos,  setProdusctoID} = useContext(MiContexto)
    const [ tipo, setTipo ] = useState('categoria')


    console.log(productos);

    return (
        <div >
            <div className={clases.container}>
                <Menu>
                    <MenuButton as={Button} backgroundColor={'#666666'} rightIcon={<ChevronDownIcon />} w={'100%'} mb={25} mt={25} >
                    Filtrar por: {tipo}
                    </MenuButton>
                    <MenuList >
                        <MenuItem fontSize={'15px'} onClick={ async () => { setTipo('categoria')  } } >todos</MenuItem>
                        <MenuItem fontSize={'15px'} onClick={ async () => { setTipo('Alfombra')  } } >alfombras</MenuItem>
                        <MenuItem fontSize={'15px'} onClick={ async () => { setTipo('Impresion 3D') } }>impresion 3D</MenuItem>
                        <MenuItem fontSize={'15px'} onClick={ async () => { setTipo('Interior')  } }>interior</MenuItem>
                        <MenuItem fontSize={'15px'} onClick={ async () => { setTipo('Abertura')  } }>Aberturas</MenuItem>
                    </MenuList>
                </Menu>
            </div>

            <div className={clases.allproducts_container}>
                {productos.map( (el, index) => {
                    if(tipo.toLowerCase() === 'categoria'){
                        return (
                            <Card className={clases.allproducts_cart}  key={index} mb={75} borderRadius={0} boxShadow={'md'}>
                                <CardHeader m={'auto'} w={'100%'} h={'50%'} >
                                    <Button w={'100%'} h={'100%'} backgroundColor={'white'} className={clases.allproducts_button} borderRadius={0} onClick={ async () => await setProdusctoID(el._id)} >
                                        <Link to={'/productDetail'}>
                                            <Image
                                                w={'250px'}
                                                h={'200px'}
                                                className={clases.allproducts_imag}
                                                src={`http://localhost:8080/static/${el.urls[0].url}`}
                                                />
                                            </Link>
                                    </Button>
                                </CardHeader>
                                <CardBody w={'100%'} >
                                    <Heading fontSize={25} mb={3} >{el.name} </Heading>
                                    <Text>View a summary of all your customers over the last month.</Text>
                                </CardBody>
                                <CardFooter h={'20%'} >
                                    <Button 
                                        colorScheme='teal' 
                                        variant='ghost' 
                                        backgroundColor={'#b5b5b5'} 
                                        color={'black'} 
                                        fontSize={25} 
                                        w={'100%'} 
                                        onClick={ async () => await setProdusctoID(el._id)}>
                                            <Link to={'/productDetail'}>${el.price} </Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        )
                    }else if ( tipo === el.tipo ){
                        return (
                            <Card className={clases.allproducts_cart}  key={index} mb={75} borderRadius={0} boxShadow={'md'}>
                                <CardHeader m={'auto'} w={'100%'} h={'50%'} >
                                    <Button w={'100%'} h={'100%'} backgroundColor={'white'} className={clases.allproducts_button} borderRadius={0} onClick={ async () => await setProdusctoID(el._id)} >
                                        <Link to={'/productDetail'}>
                                            <Image
                                                h={'30%'}
                                                className={clases.allproducts_imag}
                                                src={`http://localhost:8080/static/${el.urls[0].url}`}
                                                />
                                            </Link>
                                    </Button>
                                </CardHeader>
                                <CardBody w={'100%'} >
                                    <Heading fontSize={25} mb={3} >{el.name} </Heading>
                                    <Text>View a summary of all your customers over the last month.</Text>
                                </CardBody>
                                <CardFooter h={'20%'} >
                                    <Button 
                                        colorScheme='teal' 
                                        variant='ghost' 
                                        backgroundColor={'#b5b5b5'} 
                                        color={'black'} 
                                        fontSize={25} 
                                        w={'100%'} 
                                        onClick={ async () => await setProdusctoID(el._id)}>
                                            <Link to={'/productDetail'}>${el.price}</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        )
                    }
                    
                } )}           
            </div>
        </div>
        
    )
}


export default Allproductos