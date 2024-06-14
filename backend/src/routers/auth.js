import express  from "express";
import { agregarProducto, getProductos, getProducto, deleteProducto, updateProducto } from "../controllers/crudProductos.js";
import { addProductCart, cleanCart, createCart, getCart, upDateCart } from "../controllers/crudCarts.js";
import {getUser, login, register } from "../controllers/sessions.js";
import passport from "passport";
import {registrarVenta, upDateVenta } from "../controllers/crudVentas.js";
import {descargarpdf} from "../controllers/fileController.js"
import { createVentasMoment, deleteVentasMoment, getVentasMoment } from "../controllers/crudVentasMoment.js";
import { sendMail } from "../controllers/sendEmail.js";


const router = express.Router()

//los Users son vendedores
// registrat user nuevo
router.post('/register', register)
//login user
router.post('/login', passport.authenticate('local-login', {session: false}), login)
//obtener info del user
router.get('/getuser',passport.authenticate('jwt', {session: false}), getUser)



//Clientes
//ver carrito
router.get('/carts/:cid', passport.authenticate('jwt', {session: false}),getCart)
//agregar producto al carrito
router.post('/carts/:cid/product/:pid', passport.authenticate('jwt', {session: false}), addProductCart)
//actualizar cart
router.post('/carts/:cid', passport.authenticate('jwt', {session: false}), upDateCart)
//vaciar carrito
router.delete('/carts/:cid', passport.authenticate('jwt', {session: false}), cleanCart)

//registrar venta
router.post('/registrarVenta', registrarVenta)
//actualizar status de venta
router.get('/upDateVenta/:vid', upDateVenta)
//enviar email
router.post('/sendMail/:vid',sendMail)

//crear id momentanteo de venta
router.post('/createIdVenta/:vid', createVentasMoment)
//obtener id momentaneo de venta
router.get('/getIdVenta', getVentasMoment)
//eliminar el id momentaneo
router.delete('/deleteIds', deleteVentasMoment)



// rutas productos
//agregar productos
router.post('/agregarProducto',passport.authenticate('jwt', {session: false}), agregarProducto)
//obtener productos
router.get('/getProductos', getProductos)
//obtener un producto
router.get('/getProducto/:id', getProducto)
//actualizar productos
router.post('/updateProducto/:id', passport.authenticate('jwt', {session: false}), updateProducto)
//eliminar producto
router.delete('/delete/:id', passport.authenticate('jwt', {session: false}), deleteProducto)



//obteniendo cookies
router.get('/getCookie', (req, res) => {
    res.send(req.cookies) // de esta forma accedemos a cookies que no estan firmadas, pero en el caso de que se encuentren firmadas, la forma de acceder es con req.signedCookies
} )
//eliminando una cookie
router.get('/deletCookie', (req, res) => {
    res.clearCookie('Nombre de la cookie').send('Cookie Removed')
} )
//eliminando session
router.get('/logout', (req, res) => {
    res.session.destry( err => {
        if(!err) res.send('logout ok')
        else res.send({status: 'logout ERROR', body: err})
    })
} )

router.get('/descargarCV', descargarpdf )




//rutas carrito

router.post('/crearCarrito', createCart)

export default router