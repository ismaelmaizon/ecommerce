import VentasMomentModel from "../db/models/ventas_moment.model.js";
import sendEmail from '../mailer/mailer.js';



export const createVentasMoment = async (req, res ) => {
    const id = req.params.vid
    let idventa = { idVenta: id }
    const respons = await VentasMomentModel.create(idventa)
    if(respons){
        res.send( {status: 200, message: 'id creado', response: respons } )
    }else{
        res.send( {status: 404, message: 'problemas al crear id'} )
    }
}

export const getVentasMoment = async (req, res ) => {
    const idVenta = await VentasMomentModel.find()
    if(idVenta){
        res.send( {status: 200, message: 'id obtenido', id: idVenta } )
    }else{
        res.send( {status: 404, message: 'problemas al obtener id de la venta'} )
    }
}

export const deleteVentasMoment = async (req, res ) => {
    const respons = await VentasMomentModel.deleteMany()
    if(respons){
        res.send( {status: 200, message: 'se elimino registros'} )
    }else{
        res.send( {status: 404, message: 'problemas al eliminar registros'} )
    }
}



