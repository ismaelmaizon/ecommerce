import { useContext} from "react"
import {Box, Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Grid, GridItem, Stack, useDisclosure, useMediaQuery} from '@chakra-ui/react'
import { Link } from "react-router-dom"
import {Button } from '@chakra-ui/react'
//icons
import { HamburgerIcon} from '@chakra-ui/icons'
import { BsCartCheck } from "react-icons/bs"
//menu
import { MiContexto } from "../context/contex"
//import { useNavigate } from "react-router-dom";
import clases from './navBar.module.css'


function NavBar() {
    //mediaquery
    const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)')

    //Menu
    const { isOpen, onOpen, onClose } = useDisclosure()

    const color = '#b5b5b5'
    const { numberCart, setCart } = useContext(MiContexto)
    //obetner sessionStorage
    function obtenerTodosLosItems() {
        const carrito = []
        for (let i = 0; i < sessionStorage.length; i++) {
            let items = {};
            let clave = sessionStorage.key(i);
            let valor = sessionStorage.getItem(clave);
            items = { clave: clave, valor: valor }
            carrito.push(items)
        }
        return carrito;
    }

    // Condición para determinar el tamaño de la pantalla
    const isSmallScreen = window.innerWidth < 768;
    console.log('isSmallScreen: ');
    console.log(isSmallScreen);


    return (
        <Box bg='#666666' height='80px' w='100%'>
              {isLargerThan1280 ? <Grid m='auto' w='75%' h='100px' templateColumns='repeat(5, 1fr)' alignItems='center'>
                     <GridItem colSpan={1} m='auto'>
                        <Button bg={color} onClick={onOpen}>
                            <HamburgerIcon fontSize={35} m={2}  />
                        </Button>
                        <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
                            <DrawerOverlay />
                            <DrawerContent>
                            <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
                            <DrawerBody>
                                <p>Some contents...</p>
                                <p>Some contents...</p>
                                <p>Some contents...</p>
                            </DrawerBody>
                            <DrawerFooter mb={50} bg='red'>
                                <p>hola</p>
                            </DrawerFooter>
                            </DrawerContent>
                        </Drawer>
                     </GridItem>
                     <GridItem colSpan={3} m='auto' fontSize={30} >
                        <Link className={clases.container_select_title} to='/'>
                            <h1>AtelierBodereau</h1>
                        </Link>
                     </GridItem>
                     <GridItem  colStart={5}>
                        <Stack>
                            <Link to= '/Cart'>
                                <Button  bg={color} variant='solid' onClick={ () => {
                                    setCart(obtenerTodosLosItems())
                                    }} >   
                                    <BsCartCheck fontSize={25}/>
                                    {numberCart}
                                </Button>
                            </Link>
                            
                        </Stack>
                     </GridItem>
                    </Grid> 
            : <Grid m='auto' w='100%' h='100px' templateColumns='repeat(3, 1fr)' gap={30} alignItems='center'>
                <GridItem colSpan={1} m='auto'>
                <Button bg={color} onClick={onOpen}>
                    <HamburgerIcon fontSize={35} />
                </Button>
                <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
                    <DrawerOverlay />
                    <DrawerContent>
                    <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
                    <DrawerBody>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </DrawerBody>
                    <DrawerFooter mb={50} bg='red'>
                                <p>hola</p>
                            </DrawerFooter>
                    </DrawerContent>
                </Drawer>
                </GridItem>
                <GridItem colSpan={3} m='auto' fontSize={20} >
                <Link to='/'>
                    <h1>AtelierBodereau</h1>
                </Link>
                </GridItem>
                <GridItem  colStart={5} ml={35} >
                    <Link to= '/Cart'>
                        <Button  bg={color} variant='solid' onClick={ () => {
                            setCart(obtenerTodosLosItems())
                            }} >   
                            <BsCartCheck fontSize={25}/>
                            {numberCart}
                        </Button>
                    </Link>
                </GridItem>
           </Grid> }
            
        </Box>
    )
}

export default NavBar

