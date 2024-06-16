// contexto

import { useEffect, useState } from "react";
import { createContext } from "react";
import axios from 'axios';


export const MiContexto = createContext([])


const CartProvider = ({children}) => {

    const grisOscuro = '#666666'

    const [ user, setUser ] = useState('')
    const [ session, setSession ] = useState('')

    //contexto productos
    const [productos, setProdusctos] = useState([]) 
    const getProducts = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/auth/getProductos');
            // Manejar la respuesta del servidor y actualizar el estado con los productos obtenidos
            setProdusctos(response.data);
            console.log('Productos:', response.data);
        } catch (error) {
            console.error('Error al obtener los productos:', error);
        }
    };

    //obtener un producto
    const [productoId, setProdusctoID] = useState('')
    const [producto, setProducto] = useState([])
    const [isLoading, setIsLoading ] = useState(true);
    const getProduct = async (productoId) => {
        console.log('getproducto');
        try {
            const response = await axios.get(`http://localhost:8080/api/auth/getProducto/${productoId}`);
            // Manejar la respuesta del servidor y actualizar el estado con los productos obtenidos
            setProducto(response.data);
            setIsLoading(false)
            console.log('Producto:', response);
        } catch (error) {
            console.error('Error al obtener el producto:', error);
        }
    };

    //eliminar un producto
    const deleteProduct = async (id) => {
        console.log(id);
        try {
            const response = await axios.delete(`http://localhost:8080/api/auth/delete/${id}`, {withCredentials: true});
            // Manejar la respuesta del servidor y actualizar el estado con los productos obtenidos
            return response.data
        } catch (error) {
            console.error('Error al obtener el carrito:', error);
        }
    }
    


    //contexto carrito
    const [ cart, setCart] = useState([])
    const [ cartFinal, setCartFinal] = useState([])
    const [numberCart, setNumberCart] = useState(sessionStorage.length)
    //ver carrito
    /*
    const getCart = async (cartID) => {
        try {
            console.log(cartID);
            const response = await axios.get(`http://localhost:8080/api/auth/carts/${cartID}`, {withCredentials: true});
            // Manejar la respuesta del servidor y actualizar el estado con los productos obtenidos
            console.log('cart:', response.data.cart.products);
            console.log('cantidad:', response.data.cart.products.length);
            setCart(response.data.cart.products);
            setNumberCart(response.data.cart.products.length)
        } catch (error) {
            console.error('Error al obtener el carrito:', error);
        }
    };
    
    
    //creacion de dashboard
    const [dashBoard, setDashBoard] = useState({ cart: [], total: 0 })
    
    
    
    const ViewDashBoard = ( dashBoard, productos, cart ) => {
        console.log('ViewDashBoard');
        let newCart = []
        let totalParcial= 0
        let total = 0
        let prodRef = {}

        productos.map((p) => {
            let prodIDString = p._id.toString();
            cart.map((pCart) => {
                let cartIDString = pCart._id.toString();
                if(prodIDString === cartIDString){
                    totalParcial = p.price*pCart.quiantity
                    prodRef = {
                        _id: p._id,
                        name: p.name,
                        description: p.description,
                        price: p.price,
                        stock: p.stock,
                        tipo: p.tipo,
                        url: p.url,
                        quiantity: pCart.quiantity,
                        totalParcial: totalParcial
                    }
                    newCart.push(prodRef)
                }
            })
            totalParcial = 0
        })

        newCart.map((el) => {
            total += el.totalParcial
        } )

        dashBoard = ({ cart: newCart, total: total })

        return dashBoard
    }

    

    //actualizar al carrito
    const upDateCart = async ( cart2 ) => {
        setCart(cart2)
        console.log(cart);
    }
    */
    
    //datos pedido
    const [idVenta, setIdVenta] = useState()
    const [name, setName] = useState()
    const [phone, setPhone] = useState()
    const [email, setEmail] = useState()
    const [address, setAdress] = useState()
    const [mount, setMount] = useState()
    const [total, setTotal] = useState()
    const [url, setUrl] = useState()
    const [date, setDate] = useState()
    const [valueRE, setValueRE] = useState('Retiro')
    const [valueFP, setValueFP] = useState('DebitoCredito')


    useEffect(() => {
        getProducts()
    }, []);

    

    return (
        // aca llamamos al hoock useMiContexto
        <MiContexto.Provider value={{
            grisOscuro,
            user, setUser, session, setSession,
            getProducts,
            numberCart, setNumberCart, cartFinal, setCartFinal,
            productos, 
            productoId, setProdusctoID, getProduct, producto, isLoading, setIsLoading,
            cart, setCart,
            idVenta, setIdVenta, name, setName,phone, setPhone, email, setEmail,total, setTotal, url, setUrl, date, setDate, address, setAdress, mount, setMount, valueRE, setValueRE,valueFP, setValueFP,
            deleteProduct
        }} >
            {children}
        </MiContexto.Provider>
    )
}

// Este va a ser el encargado de proveer el contexto a elementos hijos
export default CartProvider