import {  Outlet, } from "react-router-dom";


const Navbar= () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{"box-shadow": "5px 0px 8px 4px","position":"fixed"}}>
    <div className="container-fluid">
        <img src="assets/images/Domi_logo.png" alt=""/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarIndex">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-itemB">
        <a className="nav-link active" aria-current="page" href="/">Inicio</a>
    </li>
    <li className="nav-itemB">
        <a className="nav-link" href="/servicios">Solicitar Servicio</a>
    </li>
    <li className="nav-itemB">
        <a className="nav-link" href="/nosotros">Quienes Somos</a>
    </li>
    <li className="nav-itemB">
        <a className="nav-link" href="/contacto">Contacto</a>
    </li>
    <li className="nav-itemB">
        <a className="nav-link" href="/login">Iniciar Sesión</a>
    </li>
        </ul>
    </div>
    </div>
</nav>





      <Outlet />
    </>
  )
}

export default Navbar



