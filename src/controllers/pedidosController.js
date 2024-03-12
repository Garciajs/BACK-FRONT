import * as pedidosModel from '../models/pedidosModel.js';


//obtener todos los pedidos 

export const getAllPedidos=async (req, res)=>{
    try {
        const pedidos=await pedidosModel.getPedidos();
        console.log(pedidos);
        res.status(201).json(pedidos);
    } catch (error) {
        res.status(500).json({message:error.message})
        }
};

//obtener un pedido por ID 

export const getPedidoById=async (req, res)=>{
    try {
        const pedidoId=req.params.id;
        const pedido= await pedidosModel.getPedidoId(pedidoId);
        if(pedido){
            res.status(201).json(pedido)
    } else {
    res.status(404).json({message:'El pedido con el id  no existe'})
    }
}catch (error) {
    res.status(500).json({message:error.message})
    }
};

// crear un nuevo pedido
export const createNewPedido = async (req,res)=>{
    try {
        const {nom_cliente, email, telefono, tipo_servicio,dir_recogida,dir_entrega, comentario}=req.body;
        const pedidoId = await pedidosModel.createPedido({nom_cliente,email, telefono, tipo_servicio,dir_recogida, dir_entrega, comentario});
        res.status(201).json({id: pedidoId, nom_cliente, email, telefono, tipo_servicio, dir_recogida, dir_entrega,comentario});
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}
//actualizar un pedido

export const updatePedido =async (req, res)=> {
    try {
        const pedidoId = await req.params.id;
        const {nom_cliente,email, telefono, tipo_servicio,dir_recogida, dir_entrega, comentario}=req.body;
        await pedidosModel.updatePedido(pedidoId, {nom_cliente,email, telefono, tipo_servicio,dir_recogida, dir_entrega, comentario});
        res.status(200).json({message:"pedido actualizado"});
    } catch (error) {
        res.status(500).json({message :error.mesage})
    }
};

//eliminar un pedido

export const deletePedido =async (req, res)=> {
    try {
        const pedidoId =  req.params.id;
        await pedidosModel.deletepedido(pedidoId);
        res.status(200).json({message:"pedido eliminado correctamente"});
    } catch (error) {
        res.status(500).json({message :error.mesage})
    }
}
