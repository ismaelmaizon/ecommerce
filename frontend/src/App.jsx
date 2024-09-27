
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Inicio from './component/Inicio/inicio'
import NavBar from './component/NavBar/navBar'
import AddProducto from './component/AddProduct/addProduct'
import Downloadcv from './component/DownloadCv/downloadcv'
import CartProvider from './component/context/contex'
import Cart from './component/Cart/cart'
import Dashboard from './component/dashboard/dashboard' 
import ProductDetail from './component/ProductDetail/productDetail'
import Login from './component/Login/login'
import RegisterUser from './component/RegisterUser/registerUser'
import UpDateProducto from './component/updateProduct/updateProduct'
import SendMail from './component/sendMail/sendMail'
//icons
import Dashboard2 from './component/dashboard2/dashboard2'
import Footer from './component/footer/footer'


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
              </div>
              <div className='container_3' >
                    <Footer/>
              </div>
            </CartProvider>
          </div>
            
    
  )
}

export default App
