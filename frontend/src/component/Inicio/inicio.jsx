import {Button, Text } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import clases from './inicio.module.css'
import { Link } from "react-router-dom";
//import Scroll from "../scroll/scroll";
import Allproductos from "../AllProductos/allproducts";
import { MiContexto } from "../context/contex";
import axios from "axios";

//icono
import { PiHandWavingFill } from "react-icons/pi";

function Inicio() {

    const {setNumberCart, setUser, user, session, setSession,} = useContext(MiContexto)

    const getUser = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/auth/getuser', {withCredentials: true});
            // Manejar la respuesta del servidor y actualizar el estado con los productos obtenidos
            console.log('getUser:', response.data);
            setUser(response.data)
            setSession(response.data.name)
            return ({ status: 200 })


        } catch (error) {
            console.error('Error al obtener info del usuario:', error);
            return ({ status: 400 })
        }
    }

    const saludoUser = (session) => {
        if (session != '') {
            return <div>
                        <Text display={'flex'} fontSize={25} p={5} > { `hola ${session}` } <h3><PiHandWavingFill/></h3> </Text>
                    </div>
        }
    }
    
    const addproduct = (user) => {
        console.log('addproduct: ');
        console.log(user);
        if (user.role === 'admin') {
            return <div>
            <Button display={"flex"} m={"auto"} p={25} fontSize={15} backgroundColor={'#ffe4b5'} >
                <Link to={'/addproducto'} >Agregar nuevo producto</Link>
            </Button>
            </div>
        }
    }
            

    useEffect(()=>{
        getUser()
        setNumberCart(sessionStorage.length)
    } , [] )

    return (
    

        <div className="container_Inicio">
            <div className={clases.container_session}>
                {saludoUser(session)}
            </div>
            <div className={clases.container_Skills} >
                <h1 className={clases.container_Skills_h1} >¡Hola conocé nuestros productos!</h1>
            </div>
            { user && addproduct(user) }
            <Allproductos/>
        </div>

    )
}
  
export default Inicio

