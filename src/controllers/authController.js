import * as authModel from '../models/authModel.js';
import jwt from 'jsonwebtoken';
import validator from 'validator';

export const registrarUsuario =async (req, res)=>{
    try{
        const {num_cedula,nom_usuario, email, telefono, contrasena}=req.body;
        
        //validacion del correo electronico
        if (!validator.isEmail(email)){
            return res.status(400).json({message:'Formato correo no valido'});
            }
            //validacion formato  de la contraseña
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(contrasena)){
            return res.status(400).json({message: "La contraseña debe tener al menos 1 mayúscula y 1 minúscula un numero y un minimo de 8 caracteres"}); 
        }
        const existingUsuario=await authModel.getUsuarioByEmail(email);
        if (existingUsuario){
            return res.status(400).json({message:"el correo ya esta en uso"});
        }

        await authModel.registrarUsuario({num_cedula,nom_usuario, email, telefono, contrasena});
        res.status(201).json({message: "Usuario registrado correctamente"});
        
    }catch(error){
    return res.status(500).json({message: error.message});
    }
};

//funcion para inicar sesion
export const loginUsuario=async (req, res)=>{
    console.log("Estoy haciendo algo")
    try {
        const { email, contrasena } = req.body;
        console.log(email, contrasena);

        //validamos el email
        if (!validator.isEmail(email)){
            return res.status(400).json({message:'Formato correo no valido'});
            }

        const usuario =await authModel.loginUsuario(email, contrasena);

        //generar token de autenticacion
        const token =jwt.sign({ usuarioId:usuario.id, email:usuario.email },'secret key');
       //asignar el token a una cookie
        res.cookie('token', token,{httpOnly:true});

        res.json({message:'Inicio de sesion exitoso'});

    } catch (error) {
        return res.status(401).json({message: error.message});
    }
}

