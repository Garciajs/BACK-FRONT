import Layout from "../components/Layout";
import { Link } from "react-router-dom";

const login = () => {


  const loginHandler = (e) => {
    e.preventDefault();
    console.log("Hola llamando al backend");


    // Suponiendo que esta función se encuentra en tu servidor en la ruta '/api/login'
    const URL = 'http://localhost:3000/api/login'; // Dirección del servidor Express

    // Objeto con los datos del usuario que quieres enviar al servidor
    const userData = {
      email: document.getElementById('email')?.value,
      contrasena: document.getElementById('password')?.value,
    };

    // Configuración de la solicitud HTTP
    const requestOptions = {
      method: 'POST', // Método POST porque estás enviando datos confidenciales
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData), // Convertir el objeto userData a formato JSON
    };

    // Realizar la solicitud HTTP
    fetch(URL, requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al iniciar sesión');
        }
        return response.json();
      })
      .then(data => {
        console.log(data.message); // Mensaje de éxito o error del servidor
        // Aquí podrías manejar la respuesta del servidor según tus necesidades
      })
      .catch(error => {
        console.error('Error:', error);
        // Manejar el error en caso de que falle la solicitud HTTP
      });


  }

  return (
      
        <>
        <Layout/>
        
        <body id='login'>
        
    
            <div className="container-form">
            <div className="information">
              <div className="info-childs">
                <h2>Bienvenido</h2>
                <p >Registrate para acceder a nuestros servicios.</p>
                <Link to={"/register"}><input  type="button"  value="Registrarse"/></Link>
          </div>
            </div>
              <div className='form-information'>
                <div className='form-information-childs'>
                   <h2>Iniciar sesión</h2>
                    <div className='icons'>
                     <i className='bx bxl-facebook-circle'></i>
                     <i className='bx bxl-instagram'></i>
                   </div>
                   <p>Si ya tienes una cuenta. Inicia sesión</p>
                   <form className='form'>
                      
                      <label>
                      <i class="fa-regular fa-envelope p-1"></i>
                        <input id="email" type="email" placeholder="Correo electrónico"/>
                      </label>
                     
                      <label>
                      <i class="fa-solid fa-lock"></i>
                      <input type="password" id="password" placeholder="Contraseña"/>
                      </label>
                      <input onClick={loginHandler} type='submit' value='Iniciar Sesión'/>
                   </form>
                </div>
    
              </div>
            </div>
           
          </body>
    
            
        </>
  )
}

export default login

