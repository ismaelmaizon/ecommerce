import mongoose from 'mongoose'

const collection = 'ventas_moment'

const VentasMomentSchema = new mongoose.Schema({
    idVenta: String
})

const VentasMomentModel = mongoose.model(collection, VentasMomentSchema)
export default VentasMomentModel;