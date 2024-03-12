import express from 'express';
import * as pedidosController from '../controllers/pedidosController.js';

const router = express.Router();

router.get('/pedidos', pedidosController.getAllPedidos);
router.get('/pedido/:id', pedidosController.getPedidoById);
router.post('/newpedido', pedidosController.createNewPedido);
router.put('/editpedido/:id', pedidosController.updatePedido);
router.delete('/delpedido/:id', pedidosController.deletePedido);

export default router;