import { useContext } from "react";
import {IconButton, Stack } from '@chakra-ui/react'
import { Link } from "react-router-dom";

//form
import { useForm } from 'react-hook-form'
import {
  FormErrorMessage,
  FormControl,
  Input,
  Button,
} from '@chakra-ui/react'

//icons

import { AddIcon, HamburgerIcon, SearchIcon } from '@chakra-ui/icons'
import { BsCartCheck } from "react-icons/bs";


//menu

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  } from '@chakra-ui/react'
import { MiContexto } from "../context/contex";
import clases from './navBar.module.css'


function NavBar() {

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

    const {
        handleSubmit,
        register,
        formState: { errors},
      } = useForm()
    
      function onSubmit(values) {
        return new Promise((resolve) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            resolve()
          }, 3000)
        })
    }
      // Condición para determinar el tamaño de la pantalla
    const isSmallScreen = window.innerWidth < 768;
    console.log('isSmallScreen: ');
    console.log(isSmallScreen);


    return (
        <div className={clases.containerNav} >
            <div className={clases.container_select_menu}>
                <Menu>
                    <MenuButton
                        border={'none'}
                        w='100%' h={20} p={2}
                        fontSize={50}
                        as={IconButton}
                        aria-label='Options'
                        icon={<HamburgerIcon />}
                        variant='outline'
                    />
                    <MenuList>
                        <Link to={'/login'} underline="none">
                            <MenuItem icon={<AddIcon />} >
                            Login
                            </MenuItem>
                        </Link>
                        <Link to={'/Cart'}>
                            <MenuItem icon={<AddIcon />} >
                            Carrito
                            </MenuItem>
                        </Link>
                        <Link to={'/login'}>
                            <MenuItem icon={<AddIcon />} >
                            Ubicacion
                            </MenuItem>
                        </Link>
                        <Link to={'/login'}>
                            <MenuItem icon={<AddIcon />} >
                            instagram
                            </MenuItem>
                        </Link>
                    </MenuList>
                </Menu>

            </div>
            <div className={clases.container_select_title}>
                <Link className={clases.container_select_title} to='/'>
                    <h1>AtelierBodereau</h1>
                </Link>
            </div>
            <div className={clases.container_select}>
                <form onSubmit={handleSubmit(onSubmit)} className={clases.container_select_form}>
                    <FormControl isInvalid={errors.name}>
                        <Input
                        h={'35px'}
                        w={'90%'} 
                        color={"black"}
                        id='producto'
                        backgroundColor={'white'}
                        placeholder='ingrese nombre del producto'
                        {...register('producto', {
                            required: 'This is required',
                            minLength: { value: 4, message: 'Minimum length should be 4' },
                        })}
                        />
                        <FormErrorMessage>
                        {errors.name && errors.name.message}
                        </FormErrorMessage>
                    </FormControl>
                    <Button h={'35px'} colorScheme='teal' type='submit'><SearchIcon/>
                    </Button>
                </form>
            </div>
            <div className="container_select">
                <Stack direction='row' spacing={3} align='center' p={3} >
                    <Link to='/login' className={clases.container_select_box} >
                        <Button h={'35px'}  backgroundColor={color} variant='solid'>
                            login
                        </Button>
                    </Link>
                    <Link to= '/Cart' className={clases.container_select_box_cart}>
                        <Button h={'35px'}  backgroundColor={color} variant='solid' onClick={ () => {
                            setCart(obtenerTodosLosItems())
                            }} >
                            {numberCart}
                            <BsCartCheck />
                        </Button>
                    </Link>
                    
                </Stack>
            </div>
        </div>
    )
}

export default NavBar

