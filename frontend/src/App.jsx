
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Inicio from './component/Inicio/inicio'
import NavBar from './component/NavBar/navBar'
import AddProducto from './component/AddProduct/addProduct'
import Downloadcv from './component/DownloadCv/downloadcv'
import { ListItem, UnorderedList } from '@chakra-ui/react'
import CartProvider from './component/context/contex'
import Cart from './component/Cart/cart'
import Dashboard from './component/dashboard/dashboard' 
import ProductDetail from './component/ProductDetail/productDetail'
import Login from './component/Login/login'
import RegisterUser from './component/RegisterUser/registerUser'
import UpDateProducto from './component/updateProduct/updateProduct'
import SendMail from './component/sendMail/sendMail'
//icons
import { IoLocationSharp } from "react-icons/io5";
import { FaLocationArrow } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import Dashboard2 from './component/dashboard2/dashboard2'


function App() {
  

  return (
        <div>
          <CartProvider>
              <div className='container_1' >
                <NavBar/>
              </div> 
              <div className='container'>               
                <div className='container_2'>
                  <Routes>
                    <Route element={<Login/>} path='/login' ></Route>
                    <Route element={<Inicio/>} path='/' ></Route>
                    <Route element={<AddProducto/>} path='/addproducto' ></Route>
                    <Route element={<UpDateProducto/>} path='/updateproducto' ></Route>
                    <Route element={<ProductDetail/>} path='/productDetail' ></Route>
                    <Route element={<Cart/>} path='/Cart' ></Route>
                    <Route element={<Dashboard/>} path='/Dashboard' ></Route>
                    <Route element={<Dashboard2/>} path='/Dashboard2' ></Route>
                    <Route element={<SendMail/>} path='/sendEmail' ></Route>
                    
                    <Route element={<RegisterUser/>} path='/register' ></Route>
                    <Route element={<Downloadcv/>} path='/downloadcv' ></Route>
                  </Routes>
                </div>
                
                <div className="footer" >
                        <div>
                          <h3 style={{display: 'flex', flexDirection: 'row'}}>Navegacion <FaLocationArrow/></h3> 
                            <UnorderedList>
                                <ListItem><Link to={'/'} >Inicio</Link></ListItem>
                                <ListItem><Link to={'/'} >Aberturas</Link></ListItem>
                                <ListItem><Link to={'/'} >Impresiones 3D</Link></ListItem>                    
                                <ListItem><Link to={'/'} >Interior</Link></ListItem>                    
                                <ListItem><Link to={'/'} >Alfombras</Link></ListItem>                    
                            </UnorderedList>
                        </div>
                        <div><h3 style={{display: 'flex', flexDirection: 'row'}}>Contactos <FaPhoneAlt/></h3> 
                            <UnorderedList>
                                <ListItem><Link to={'/'} >cel: 3516254315</Link></ListItem>
                                <ListItem><Link to={'/'} >email: atelier@gmail.com</Link></ListItem>                 
                            </UnorderedList>
                        </div>
                        <div> <h3 style={{display: 'flex', flexDirection: 'row'}}>Ubicacion <IoLocationSharp/></h3> 
                            <UnorderedList>
                                <ListItem><Link to={'https://maps.app.goo.gl/pZqzcWiEutqYtdSq6'}><p> Donato Alva  5233 </p></Link> </ListItem>
                                <ListItem><Link to={'https://maps.app.goo.gl/pZqzcWiEutqYtdSq6'}><p> Recta Martinolli  1358 </p></Link> </ListItem>
                                <ListItem><Link to={'https://maps.app.goo.gl/pZqzcWiEutqYtdSq6'}><p> Ricardo Rojas  6047 </p></Link> </ListItem>
                            </UnorderedList></div>
                </div>
              </div>
            </CartProvider>
          </div>
            
    
  )
}

export default App
