
import Layout from "../components/Layout";

const register = () => {

  const registerHandler = (e) =>{
    e.preventDefault();
    console.log("Llamando backend Resgiter")

    const URL ='http://localhost:3000/api/register'


    fetch(URL,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: document.getElementById('email')?.value,
        contrasena: document.getElementById('contrasena')?.value,
        nom_usuario: document.getElementById('nombre')?.value,
        telefono: document.getElementById('telefono')?.value,
        num_cedula: document.getElementById('cc')?.value
      })
    }).then(async response => {
      const res = await response.json()
      if (!response.ok) {
        alert(res.message)
        throw new Error('Error al iniciar sesión');
      }
      return response.json();
    })
    .then(data => {
      console.log(data.message); 
      alert(data.message)// Mensaje de éxito o error del servidor
      // Aquí podrías manejar la respuesta del servidor según tus necesidades
    })
    .catch(error => {
      console.error('Error:', error);
      // Manejar el error en caso de que falle la solicitud HTTP
    });

  }
  return (
    <div>
        <Layout/>

  <body id="login">
    <div className="container-form">
      <div className="information">
        <div className="info-childs">
          <h2>Bienvenido</h2>
          <p>Inicia sesión para acceder a nuestros servicios.</p>
        </div>
      </div>
      <div className="form-information">
        <div className="form-information-childs">
          <h2>Crear una cuenta</h2>
          <div className="icons">
            <i className="bx bxl-facebook-circle"></i>
            <i className="bx bxl-instagram"></i>
          </div>
          <p>Ingresa los datos</p>
          <form className="form">
            <label>
            <i class="fa-solid fa-user-plus p-1"></i>
              <input
                /*onChange={(event) => {
                  setNombre(event.target.value);
                }}*/
                type="text"
                placeholder="Nombre de usuario" id="nombre"
              />
            </label>
            <label>
            <i class="fa-regular fa-address-card p-1"></i>
              <input
                /*onChange={(event) => {
                  setNunId(event.target.value);
                }}*/
                type="text"
                placeholder="numero de identificación" id="cc"
              />
            </label>
            <label>
            <i class="fa-regular fa-envelope p-1"></i>
              <input
                /*onChange={(event) => {
                  setCorreo(event.target.value);
                }}*/
                type="email"
                placeholder="Correo electrónico"
                id="email"
              />
            </label>
            <label>
            <i class="fa-solid fa-phone p-1"></i>
              <input
                /*onChange={(event) => {
                  setPhone(event.target.value);
                }}*/
                type="text"
                placeholder="Numero de contacto" id="telefono"
              />
            </label>
            <label>
            <i class="fa-solid fa-lock p-1"></i>
              <input
                /*onChange={(event) => {
                  setpassword(event.target.value);
                }}*/
                type="password" id="contrasena"
                placeholder="Contraseña"
              />
            </label>

            <input onClick={registerHandler} /*onClick={add}*/ type="submit" value="Registrarse" />
          </form>
        </div>
      </div>
    </div>
  </body>

    </div>
  )
}

export default register

