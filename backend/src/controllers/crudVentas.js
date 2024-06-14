import 'dotenv/config'

import ventasModel from '../db/models/ventas.model.js';
import productsModel from '../db/models/product.model.js'

// Step 1: Import the parts of the module you want to use
import { MercadoPagoConfig, Preference } from 'mercadopago';
import { generarIDAleatorio } from '../myfunctions/functions.js';

// Step 2: Initialize the client object
const client = new MercadoPagoConfig({ accessToken: 'APP_USR-8600601819287364-032416-700e962034b0ce6f64f0e82b6d03e407-1737589903' }); //options: { timeout: 5000, idempotencyKey: 'abc' }

// Step 3: Initialize the API object
const preference = new Preference(client);


//mostrar venta segun codigo id
export const getVenta = async (req, res) => {
    const id = req.params.id
    const venta = await ventasModel.find({idGenerete : id})
    console.log(venta);
    res.send({ venta: venta })
}


// registrar venta realizada
export const registrarVenta = async (req, res) => {
    //const user = req.user
    const venta = req.body
    //console.log(user);
    console.log('venta:');
    console.log(venta);
    const cart = venta.products
    const id = generarIDAleatorio(10)
    try{
        let productsIds = []
        venta.products.map((el) => {
            let prod = { id: el.id, quantity: el.cant }
            productsIds.push(prod)
        })
        console.log('id');
        console.log(id);
        const newVenta = {
            idGenerete: id,
            name: venta.user.name,
            phone: venta.user.phone,
            email: venta.user.email,
            products: productsIds,
            total: venta.total
        } 

        const response = await ventasModel.create(newVenta)
        console.log('response');
        console.log(response);
        
        // Step 4: Create the request object
        const body = {
            transaction_amount: venta.total,
            description: venta.user.email,
            payment_method_id: 'visa',
            payer: {
                email: 'test_user_609523444@testuser.com' //test_user_609523444@testuser.com  test_user_104072709@testuser.com
            },
        
        };
        const response2 = await preference.create({ body:{
            items:[
                {
                    title: 'carrito de: '+ venta.user.email,
                    description: 'Concretar compra con AtelierBodereau',
                    quantity: 1,
                    unit_price: 1,
                    currency_id: 'ARS',
                }
            ],
            back_urls:{
                success: 'http://localhost:5173/sendEmail',
                pending: 'http://localhost:5173/',
                failure: 'http://localhost:5173/'
            }
            
        } })
      
        if (response && response2) {
            cart.map( async (el) => {
                try{
                    let result = await productsModel.findById(el._id)
                    let newStock = parseInt(result.stock) - parseInt(el.cant) 
                    let updateProduct = {
                        name : result.name,
                        description : result.description,
                        price : result.precio,
                        stock : newStock,
                        tipo : result.tipo,
                        url : result.urls
                    }
                    await productsModel.updateOne({_id : el._id}, {$set: updateProduct})
                }catch(err){
                    console.log(err);
                    res.send({ok: 404, message: 'problemas al actualizar stock'}) 
                }
            })
            res.send({ok: true, message: 'ok', pago: response2, response: response }) //venta: response,
        }
        
    }catch(err){
        console.log(err);
        res.send({ ok: false, message: 'problemas al registrar la venta', err: err })
    }
} 

//mostrar venta segun codigo id
export const upDateVenta = async (req, res) => {
    console.log('idVenta: ');
    const id = req.params.vid
    console.log(id);
    const venta = await ventasModel.findOne({idGenerete: id})
    console.log('venta: ');
    console.log(venta);
    let updateVenta = {
        _id: venta._id,
        idGenerete: venta.idGenerete,
        name: venta.name,
        phone: venta.phone,
        email : venta.email,
        products : venta.products,
        total : venta.total,
        status: true
    }
    
    try{
        let result = await ventasModel.updateOne({_id : venta._id}, {$set: updateVenta})
        console.log(result);
        res.send({status: 200, message: 'se actualizo status de venta', result: result }) 
    }catch(err){
        res.send({status: 400, message: 'problemas al actualizar status de venta', error: err })
    }

    
}











