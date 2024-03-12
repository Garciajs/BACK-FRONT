import {dbconfig} from '../config/db.config.js' // me traigo la configuracion de la base de datos que esta en db.config.js
import mysql from 'mysql2/promise'

const pool =mysql.createPool(dbconfig); // create pool permite crear y extraer los datos de la base de datos

// creamos el modelo para obtener todos los pedidos

export const getPedidos = async ()=>{
    const [rows]=await pool.query("SELECT * from pedidos");
    return rows
};

//creamos el modelo para obtener pedido por ID

export const getPedidoId=async (pedidoId)=>{
    const [rows]=await pool.query('SELECT * from pedidos WHERE id=?',[pedidoId]);
    return rows[0];
};


//creamos el modelo para insertar un nuevo pedido en la BD

export const createPedido=async (pedidoData)=>{
    const {nom_cliente, email, telefono, tipo_servicio,dir_recogida,dir_entrega, comentario}=pedidoData; 
    const [result]= await pool.query("INSERT into pedidos (nom_cliente, email, telefono, tipo_servicio,dir_recogida,dir_entrega, comentario) VALUES(?,?,?,?,?,?,?)",[nom_cliente, email, telefono, tipo_servicio,dir_recogida,dir_entrega, comentario]);
    return result.inserId;
};

//creamos el modelo para actulizar un pedido

export const updatePedido =async (pedidoId, pedidoData)=>{
    const {nom_cliente, email, telefono, tipo_servicio,dir_recogida,dir_entrega, comentario}=pedidoData;
    await pool.query('UPDATE pedidos SET nom_cliente=?,email=?,telefono=?, tipo_servicio=?,dir_recogida=?,dir_entrega=?,comentario=? where id=?', [nom_cliente, email, telefono, tipo_servicio,dir_recogida,dir_entrega, comentario, pedidoId]);
     
};

//elimina un pedido por su Id

export const deletepedido =async(pedidoId)=>{
    await pool.query("DELETE from pedidos where id=?",[pedidoId]);
}

//estos modelos los importamos en el archivo controllers
