import productsModel from "../db/models/product.model.js";

//obtener todos los productos
export const getProductos = async (req, res) => {
    let result = await productsModel.find()
    console.log(result);
    res.send( result )
}
//obtener un producto
export const getProducto = async (req, res) => {
    console.log(req.params.id);
    let result = await productsModel.findById(req.params.id)
    console.log(result);
    res.send( result )
}

// agregar un producto
export const agregarProducto = async (req, res) => {

    // Acceder a la información proporcionada por Passport-local
    const user = req.user;
    const producto = req.body
    const img = req.file
    console.log(producto);
    console.log(img);

    // 
    let urls = [ { url: img.filename } ]
    let newProduct = {
        name : producto.name,
        description : producto.descripcion,
        price : producto.precio,
        stock : producto.stock,
        tipo : producto.tipo,
        urls : urls
    }
    console.log(newProduct);
    if (user.role == 'admin'){
        try{
            let result = await productsModel.create(newProduct)
            console.log(result);
            res.send( { status : 200 ,result: result } )
        }catch(err){
            res.send({status: 400, error: err })
        }

    }else{
        res.send({status: 400, result: 'no tiene permisos para realizar esta accion' })
    }
}

//actualizar un producto
export const updateProducto = async (req, res) => {
    const id = req.params.id
    const user = req.user;
    const producto = req.body
    const img = req.file
    let url = { url: img.filename }
    let num = Math.floor(Math.random() * (2 - 0 + 1)) + 0;

    try{
        let result = await productsModel.findById(req.params.id)
        console.log('result');
        console.log(result);
        result.urls.push(url)
        /*
        if(img != 'undefined'){
            if(result.urls.length === 1){
                result.urls.push(url)
            }else if (result.urls.length === 2){
                result.urls.push(url)
            }else{
                result.urls[num].url = url.url
            }
        }*/

        let updateProduct = {
            name : producto.name,
            description : producto.descripcion,
            price : producto.precio,
            stock : producto.stock,
            tipo : producto.tipo,
            urls : result.urls
        }
        if (user.role == 'admin'){
            try{
                let result = await productsModel.updateOne({_id : id}, {$set: updateProduct})
                console.log(result);
                res.send( { status : 200 ,result: result } )
            }catch(err){
                res.send({status: 400, error: err })
            }
    
        }else{
            res.send({status: 400, result: 'no tiene permisos para realizar esta accion' })
        }

    }catch(err){ 
        res.send({status: 400}) 
    }
}

//eliminar un producto
export const deleteProducto = async (req, res) => {
    console.log(req.params.id);
    const user = req.user;
    const id = req.params.id
    console.log('usuario: ');
    console.log(user);
    let result = await productsModel.deleteOne({_id: id})
    console.log(result);
    res.send({ ok: true, result: result })
}

