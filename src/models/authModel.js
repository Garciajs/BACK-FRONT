import {dbconfig} from '../config/db.config.js';
import mysql from 'mysql2/promise';
import bcrypt from 'bcrypt';

const pool=mysql.createPool(dbconfig);

//registrar un usuario 

export const registrarUsuario = async (usuarioData) => {
    const {num_cedula, nom_usuario, email, telefono, contrasena}=usuarioData;
    const hashedContrasena=await bcrypt.hash(contrasena, 10);
    await pool.query('INSERT INTO usuarios (num_cedula,nom_usuario, email, telefono, contrasena)values(?,?,?,?,?)', [num_cedula,nom_usuario,email,telefono, hashedContrasena]);
};
// funcion par validar si un correo ya esta registrado
export const getUsuarioByEmail= async(email) =>{
    const [rows] = await pool.query('SELECT * from usuarios where email=?',[email]);
    return rows.length > 0 ? rows[0] : null;
}


//inicio de sesion

export const loginUsuario =async (email, contrasena)=>{
    const [rows] =await pool.query('SELECT * from usuarios where email=?', [email]);
    if (!rows.length){
        throw new Error ("Usuario no existe");
    }
    const usuario=rows[0];

    const validarContrasena=await bcrypt.compare(contrasena, usuario.contrasena);
    
    if(!validarContrasena) {
        throw new Error("La contraseña es incorrecta");
   };
    
    return usuario;
}
