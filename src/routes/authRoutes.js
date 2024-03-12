import  express  from "express";
import * as authController from '../controllers/authController.js';

const router = express.Router();

router.post('/register', authController.registrarUsuario);
router.post('/login', authController.loginUsuario);


export default router;

