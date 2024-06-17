import { useContext,  useState } from "react";
import { MiContexto } from "../context/contex";
import { Box, Button, Card, CardBody, CardFooter, CardHeader, Grid, Heading, Image, Menu, MenuButton, MenuItem, MenuList, Text, useMediaQuery } from "@chakra-ui/react";

//import clases from './allproducts.module.css'
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";



function Allproductos () {
    //mediaquery
    const [isLargerThan1280] = useMediaQuery('(min-width: 768px)')

    const {productos,  setProdusctoID} = useContext(MiContexto)
    const [ tipo, setTipo ] = useState('categoria')

    console.log(productos);

    return (
        <div >
            <Box w='100%' h='100%' m='auto'>
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
            </Box>

            
            {(isLargerThan1280 ? <Grid templateColumns='repeat(4, 0.25fr)'>
                { productos.map( (el, index) => {
                if(tipo.toLowerCase() === 'categoria' ){
                    return <Card m={'auto'} w='250px' h='350px' key={index} mb={75} borderRadius={0} boxShadow={'md'} >
                            <CardHeader display='flex' w={'120%'} h={'50%'} pb={-10} alignItems='center' >
                                <Button display='flex' alignItems='initial' w={'75%'} h={'75%'} backgroundColor={'white'} borderRadius={0} onClick={ async () => await setProdusctoID(el._id)} >
                                    <Link to={'/productDetail'}>
                                        <Image
                                            w={'100%'}
                                            h={'100%'}
                                            src={`http://localhost:8080/static/${el.urls[0].url}`}
                                            />
                                        </Link>
                                </Button>
                            </CardHeader>
                            <CardBody w={'100%'} h={'30%'} pt={-20} >
                                <Heading fontSize={20}>{el.name} </Heading>
                                <Text>View a summary of all your customers over the last month.</Text>
                            </CardBody>
                            <CardFooter h={'20%'} >
                                <Button 
                                    colorScheme='teal' 
                                    variant='ghost' 
                                    backgroundColor={'#b5b5b5'} 
                                    color={'black'} 
                                    fontSize={20} 
                                    w={'100%'} 
                                    onClick={ async () => await setProdusctoID(el._id)}>
                                        <Link to={'/productDetail'}>${el.price} </Link>
                                </Button>
                            </CardFooter>
                        </Card> 
                }else if ( tipo === el.tipo ){
                    return <Card m={'auto'} w='250px' h='350px' key={index} mb={75} borderRadius={0} boxShadow={'md'} >
                    <CardHeader display='flex' w={'120%'} h={'50%'} pb={-10} alignItems='center' >
                        <Button display='flex' alignItems='initial' w={'75%'} h={'75%'} backgroundColor={'white'} borderRadius={0} onClick={ async () => await setProdusctoID(el._id)} >
                            <Link to={'/productDetail'}>
                                <Image
                                    w={'100%'}
                                    h={'100%'}
                                    src={`http://localhost:8080/static/${el.urls[0].url}`}
                                    />
                                </Link>
                        </Button>
                    </CardHeader>
                    <CardBody w={'100%'} h={'30%'} pt={-20} >
                        <Heading fontSize={20}>{el.name} </Heading>
                        <Text>View a summary of all your customers over the last month.</Text>
                    </CardBody>
                    <CardFooter h={'20%'} >
                        <Button 
                            colorScheme='teal' 
                            variant='ghost' 
                            backgroundColor={'#b5b5b5'} 
                            color={'black'} 
                            fontSize={20} 
                            w={'100%'} 
                            onClick={ async () => await setProdusctoID(el._id)}>
                                <Link to={'/productDetail'}>${el.price} </Link>
                        </Button>
                    </CardFooter>
                </Card> 
                } 
                }
                )} 
            </Grid>
                :  <Grid templateColumns='repeat(1, 1fr)'>{productos.map( (el, index) => {
                    if(tipo.toLowerCase() === 'categoria' ){
                        return <Card m={'auto'} w='250px' h='350px' key={index} mb={75} borderRadius={0} boxShadow={'md'} >
                        <CardHeader display='flex' w={'120%'} h={'50%'} pb={-10} alignItems='center' >
                            <Button display='flex' alignItems='initial' w={'75%'} h={'75%'} backgroundColor={'white'} borderRadius={0} onClick={ async () => await setProdusctoID(el._id)} >
                                <Link to={'/productDetail'}>
                                    <Image
                                        w={'100%'}
                                        h={'100%'}
                                        src={`http://localhost:8080/static/${el.urls[0].url}`}
                                        />
                                    </Link>
                            </Button>
                        </CardHeader>
                        <CardBody w={'100%'} h={'30%'} pt={-20} >
                            <Heading fontSize={20}>{el.name} </Heading>
                            <Text>View a summary of all your customers over the last month.</Text>
                        </CardBody>
                        <CardFooter h={'20%'} >
                            <Button 
                                colorScheme='teal' 
                                variant='ghost' 
                                backgroundColor={'#b5b5b5'} 
                                color={'black'} 
                                fontSize={20} 
                                w={'100%'} 
                                onClick={ async () => await setProdusctoID(el._id)}>
                                    <Link to={'/productDetail'}>${el.price} </Link>
                            </Button>
                        </CardFooter>
                    </Card> 
                    }else if ( tipo === el.tipo ){
                        return <Card m={'auto'} w='250px' h='350px' key={index} mb={75} borderRadius={0} boxShadow={'md'} >
                        <CardHeader display='flex' w={'120%'} h={'50%'} pb={-10} alignItems='center' >
                            <Button display='flex' alignItems='initial' w={'75%'} h={'75%'} backgroundColor={'white'} borderRadius={0} onClick={ async () => await setProdusctoID(el._id)} >
                                <Link to={'/productDetail'}>
                                    <Image
                                        w={'100%'}
                                        h={'100%'}
                                        src={`http://localhost:8080/static/${el.urls[0].url}`}
                                        />
                                    </Link>
                            </Button>
                        </CardHeader>
                        <CardBody w={'100%'} h={'30%'} pt={-20} >
                            <Heading fontSize={20}>{el.name} </Heading>
                            <Text>View a summary of all your customers over the last month.</Text>
                        </CardBody>
                        <CardFooter h={'20%'} >
                            <Button 
                                colorScheme='teal' 
                                variant='ghost' 
                                backgroundColor={'#b5b5b5'} 
                                color={'black'} 
                                fontSize={20} 
                                w={'100%'} 
                                onClick={ async () => await setProdusctoID(el._id)}>
                                    <Link to={'/productDetail'}>${el.price} </Link>
                            </Button>
                        </CardFooter>
                    </Card> 
                    } 
                    }) }
                    </Grid>
                )
            }
        </div>
        
    )
}


export default Allproductos
