
import Layout from "../components/Layout";


export default function Inicio(){
    return (
        <div>
           
         
           <Layout/> 
            <body id='body_color'>
                <div className="body-inic">
<br/>
<main>

    <article className="mt-4">
        <div className="container-fluid">
            <div className="row">
                <div className="col-6 "  >    
                <aside >
                    <div id="carouselExampleIndicators" className="carousel slide"  style={{"margin-top":"40px","border-radius":"10px","border-shadow":"10px 10px 5px 2px "}}>
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src="assets/images/carrusel1.jpg" className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                        <img src="assets/images/carrusel2.jpg" className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                        <img src="assets/images/carrusel3.jpg" className="d-block w-100" alt="..."/>
                        </div>
                            </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon bg-dark-subtle" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                    <span className="carousel-control-next-icon bg-dark-subtle" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                </aside>
        </div>
                <div className="col-6"> 
                    <div className="container">
                        <div className="row">
                            <h4 className="titlearti text-light">OFRECEMOS LOS SIGUIENTES SERVICIOS</h4>
                            {/* Card responsive */}
                            <div className="card_con">
                                    <div className="cardd">
                                        <img src="assets/images/inicio-card.jpg" className="card-im1" alt="" />
                                        <div className="card-bodyy">
                                            <p className="card-titul">Transporte en motocicletas 1</p>
                                            <p className="card-infor" >Servicio profesionalizado de personal en motocicleta.</p>
                                                <button className="card-boton">Pìdeme</button>
                                        </div>
                                    </div>
                            
                            
                            <div className="card_con">
                                <div className="cardd">
                                        <img src="assets/images/inicio-card.jpg" className="card-im1" alt="" />
                                        <div className="card-bodyy">
                                            <p className="card-titul">Transporte en motocicletas 1</p>
                                            <p className="card-infor" >Servicio profesionalizado de personal en motocicleta.</p>
                                                <button className="card-boton">Pìdeme</button>
                                        </div>
                                    </div>
                            </div>

                            <div className="card_con">
                                <div className="cardd">
                                        <img src="assets/images/inicio-card.jpg" className="card-im1" alt="" />
                                        <div className="card-bodyy">
                                            <p className="card-titul">Transporte en motocicletas 1</p>
                                            <p className="card-infor" >Servicio profesionalizado de personal en motocicleta.</p>
                                                <button className="card-boton">Pìdeme</button>
                                        </div>
                                    </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
    <hr/>
        </article>


        
    <div className="container" id="containerClientes">
        <div className="row">
            {/*Abre Acordion-->*/}
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Clientes Salud
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    {/*Clientes Salud*/}
                    <div className="card" id="cardClientes" style={{"width":"10rem;"}}>
                        <img src="assets/images/clientesSalud/aurora.JPG" className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h6 className="card-title">Sector Salud</h6>
                        </div>
                    </div>
                    <div className="card" id="cardClientes" style={{"width":"10rem;"}}>
                        <img src="assets/images/clientesSalud/clinicaNorte.JPG" className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h6 className="card-title">Sector Salud</h6>
                        </div>
                    </div>
                    <div className="card" id="cardClientes" style={{"width":"10rem;"}}>
                        <img src="assets/images/clientesSalud/ClinicaSoma.JPG" className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h6 className="card-title">Sector Salud</h6>
                        </div>
                    </div>
                    <div className="card" id="cardClientes" style={{"width":"10rem;"}}>
                        <img src="assets/images/clientesSalud/HospitalSanVicente.JPG" className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h6 className="card-title">Sector Salud</h6>
                        </div>
                    </div> 
                    <div className="card" id="cardClientes" style={{"width":"10rem;"}}>
                        <img src="assets/images/clientesSalud/InstiGastronomico.JPG" className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h6 className="card-title">Sector Salud</h6>
                        </div>
                    </div> 
                    <div className="card" id="cardClientes" style={{"width":"10rem;"}}>
                        <img src="assets/images/clientesSalud/laboratoriosDelta.JPG" className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h6 className="card-title">Sector Salud</h6>
                        </div>
                    </div>
                    <div className="card" id="cardClientes" style={{"width":"10rem;"}}>
                        <img src="assets/images/clientesSalud/ManuelUribeAngel.JPG" className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h6 className="card-title">Sector Salud</h6>
                        </div>
                    </div> 
                    <div className="card" id="cardClientes" style={{"width":"10rem;"}}>
                        <img src="assets/images/clientesSalud/Medex.JPG" className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h6 className="card-title">Sector Salud</h6>
                        </div>
                    </div> 
                    <br/>
                    <div className="card" id="cardClientes" style={{"width":"10rem;"}}>
                        <img src="assets/images/clientesSalud/Medipiel.JPG" className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h6 className="card-title">Sector Salud</h6>
                        </div>
                    </div> 
                    <div className="card" id="cardClientes" style={{"width":"10rem;"}}>
                        <img src="assets/images/clientesSalud/Metrosalud.JPG" className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h6 className="card-title">Sector Salud</h6>
                        </div>
                    </div>
                    <div className="card" id="cardClientes" style={{"width":"10rem;"}}>
                        <img src="assets/images/clientesSalud/Moli.JPG" className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h6 className="card-title">Sector Salud</h6>
                        </div>
                    </div>
                    <div className="card" id="cardClientes" style={{"width":"10rem;"}}>
                        <img src="assets/images/clientesSalud/Proensalud.JPG" className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h6 className="card-title">Sector Salud</h6>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/*Clientes Empresariales-->*/}
                <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Clientes Empresariales 
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <div className="card" id="cardClientes" style={{"width":"10rem;"}}>
                            <img src="assets/images/ClientesEmpresas/antigas.JPG" className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h6 className="card-title">Sector Empresarial</h6>
                            </div>
                        </div>
                        <div className="card" id="cardClientes" style={{"width":"10rem;"}}>
                            <img src="assets/images/ClientesEmpresas/arquimuebles.JPG" className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h6 className="card-title">Sector Empresarial</h6>
                            </div>
                        </div>
                        <div className="card" id="cardClientes" style={{"width":"10rem;"}}>
                            <img src="assets/images/ClientesEmpresas/calima.JPG" className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h6 className="card-title">Sector Empresarial</h6>
                            </div>
                        </div>
                        <div className="card" id="cardClientes" style={{"width":"10rem;"}}>
                            <img src="assets/images/ClientesEmpresas/colorquimica.JPG" className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h6 className="card-title">Sector Empresarial</h6>
                            </div>
                        </div>
                        <div className="card" id="cardClientes" style={{"width":"10rem;"}}>
                            <img src="assets/images/ClientesEmpresas/conasfaltos.JPG" className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h6 className="card-title">Sector Empresarial</h6>
                            </div>
                        </div>
                        <div className="card" id="cardClientes" style={{"width":"10rem;"}}>
                            <img src="assets/images/ClientesEmpresas/confiar.JPG" className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h6 className="card-title">Sector Empresarial</h6>
                            </div>
                        </div>
                        <div className="card" id="cardClientes" style={{"width":"10rem;"}}>
                            <img src="assets/images/ClientesEmpresas/continentalgold.JPG" className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h6 className="card-title">Sector Empresarial</h6>
                            </div>
                        </div>
                        <div className="card" id="cardClientes" style={{"width":"10rem;"}}>
                            <img src="assets/images/ClientesEmpresas/EssoIndustriales.JPG" className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h6 className="card-title">Sector Empresarial</h6>
                            </div>
                        </div>
                        <div className="card" id="cardClientes" style={{"width":"10rem;"}}>
                            <img src="assets/images/ClientesEmpresas/fenalco.JPG" className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h6 className="card-title">Sector Empresarial</h6>
                            </div>
                        </div>
                        <div className="card" id="cardClientes" style={{"width":"10rem;"}}>
                            <img src="assets/images/ClientesEmpresas/fenalcosolidario.JPG" className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h6 className="card-title">Sector Empresarial</h6>
                            </div>
                        </div>
                        <div className="card" id="cardClientes" style={{"width":"10rem;"}}>
                            <img src="assets/images/ClientesEmpresas/galvaceros.JPG" className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h6 className="card-title">Sector Empresarial</h6>
                            </div>
                        </div>
                        <div className="card" id="cardClientes" style={{"width":"10rem;"}}>
                            <img src="assets/images/ClientesEmpresas/haceb.JPG" className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h6 className="card-title">Sector Empresarial</h6>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            {/*Cierra Acordión-->*/}
            </div> {/*Cierra row*/}
        </div> {/*Cierra container*/}
    </main>
    <br/>
        
    
    
    </div>
    </body>
        </div>
    )
}