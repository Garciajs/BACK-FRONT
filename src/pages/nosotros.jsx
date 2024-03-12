
import Layout from "../components/Layout";


const nosotros = () => {
  return (
    <div>
        <Layout/>


        <body id='body_color'>
<main>
  <article>
  {/*<!--Carrusel -->*/}
    <div className="container">
        <div className="row">
            <div className="col" id="carruselwe">
                <div id="carouselExampleCaptions" className="carousel slide">
                    <div className="carousel-indicators">
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src="assets/images/carruselWe/cuidarnos.jpg" className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block" id="letracarruselwe">
                          <h5>Rápido, seguro, confiable: ¡tu entrega perfecta!</h5>
                          <p>Es Domilogisitca</p>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <img src="assets/images/carruselWe/rapidinnn.jpg" className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block" id="letracarruselwe">
                          <h5>Sigue tu Pedido desde nuestra App</h5>
                          <p>Somos Domilogistica</p>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <img src="assets/images/carruselWe/confianzaaa.jpg" className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block" id="letracarruselwe">
                          <h5>Manjea tu tiempo, estamos diseñados para eso</h5>
                          <p>Es Domilogisitca</p>
                        </div>
                      </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
            </div>
            </div>
        </div>
        {/*<!--Cierra Carrusel -->*/}
        <hr/>
  </article>
  {/*<!--Abre cards we-->*/}
    <div className="container">
        <div className="row">
            <div className="col-6">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam possimus soluta, reiciendis quibusdam expedita eligendi illo doloribus inventore deserunt dicta enim corrupti earum aperiam quod ullam nostrum cumque dolorum mollitia! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus illo ullam velit quam, iure consequuntur inventore ipsum quo nisi itaque aspernatur, dolores facere. Sequi vitae repudiandae facilis incidunt? Ea, voluptas?</p>
            </div>
            <div className="col-6">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa id culpa tempore molestias adipisci veniam aliquam, rem dolorum, ipsum repellat consequatur recusandae. Magnam suscipit nulla ex, nihil fugit quia autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aliquid, accusantium dignissimos, voluptatem quae nam cupiditate nisi ab eveniet alias debitis ratione quo minus id? Reiciendis, mollitia. Optio, nam blanditiis!
            </div>
        </div>
    </div>
    <div className="container">
        <div className="row">
            <div className="col-4">
                <div className="card" style={{"width": "18rem", "height":"24rem"}}>
                    <img src="assets/images/Logo Domi.JPG" style={{"height": "180px"}} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">Identidad de la Empresa.</h5>
                      <p className="card-text">Historia: La empresa podría proporcionar información sobre su origen, historia y cómo ha evolucionado a lo largo del tiempo.</p>
                      <p className="card-text">Nombre y Marca: Una descripción de por qué se eligió el nombre de la empresa y la importancia de su marca.</p>
                    </div>
                  </div>
                  {/*<!--Card2-->*/}
            </div>
            <div className="col-4">
                <div className="card" style={{"width": "18rem", "height":"24rem"}}>
                    <img src="assets/images/vision.png" className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">Misión y Visión</h5>
                      <p className="card-text">
                        Misión: Una declaración que explica el propósito fundamental de la empresa, es decir, por qué existe y qué intenta lograr.
                      </p>
                      <p>
                        Visión: Una descripción de la visión a largo plazo de la empresa, su aspiración para el futuro.</p>
                    </div>
                  </div>
                 {/*} <!--Card3-->*/}
            </div>
            <div className="col-4">
                <div className="card" style={{"width": "18rem", "height":"24rem"}}>
                    <img src="assets/images/mision.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">Solicita tu servicio </h5>
                      <p className="card-text">¡Podemos brindar el servicio que necesitas!</p>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">Seguridad</li>
                      <li className="list-group-item">Confianza</li>
                      <li className="list-group-item">Agilidad</li>
                    </ul>
                    <div className="card-body">
                      <a href="servicios.html" className="card-link">Pide tu servicio Aquí </a>
                      <a href="servicios.html" className="card-link">o aquí</a>
                    </div>
                  </div>
            </div>
        </div>
    </div>
    <br/>
    <br/>
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="Eslogan" id="esloganwe">"Conectando distancias, entregando confianza. Tu mensaje, nuestro compromiso en cada paso."</h1>
        </div>
      </div>
    </div>
    <br/>
</main>
    </body>
    
    </div>
  )
}

export default nosotros
