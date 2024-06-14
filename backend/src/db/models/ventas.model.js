import mongoose from 'mongoose'
import { fechaDeHoy } from '../../myfunctions/functions.js'

const collection = 'ventas'

const fecha = fechaDeHoy()


const VentasSchema = new mongoose.Schema({
    idGenerete: {type: String, unique: true},
    name: String,
    phone: Number,
    email: String,
    products: [{
        id: String, quantity: Number
    }],
    total: Number,
    status: { type: Boolean, default: false },
    date: { type: String, default: fecha }
})

const VentasModel = mongoose.model(collection, VentasSchema)
export default VentasModel;