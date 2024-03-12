
import React from 'react'

const Footer = () => {
    return (
        <>
             {/*Footer */}

    
  <footer className="py-5 footer-2 ">
    <div className="row " >
      <div className="col-6 col-md-2 mb-3 text-light">
        <hr />
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light"><i className="fa-solid  fa-location-dot p-2">
                </i>Cl. 40 Sur # 27 - 141, Zona 6, Envigado, Antioquia</a></li>
          <li className="nav-item mb-2"><a href="https://maps.app.goo.gl/NxpXLEjabV48dWJa8" className="nav-link p-0 text-light"><i class="fa-solid fa-map-location-dot p-2"></i>Mapa</a></li>
        </ul>
      </div>


      <div className="col-6 col-md-2 mb-3 text-light">
        <hr />
        <ul className="nav flex-column ">
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light">DOMILOGISTICA SAS </a></li>
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light">Empresa de Mensajería</a></li>
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light">NIT: 8110346008</a></li>
        </ul>
      </div>
      <div className="col-4 col-md-3 mb-3 text-light">
        <hr />
        <ul className="nav flex-column ">
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light"><i className="fa-solid fa-envelope p-2"></i>
            solicitudes@domilogistica.com</a></li>
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light"><i className="fa-solid fa-phone p-2"></i>
        444 22 43</a></li>
        </ul>
      </div>
      <div className="col-md-4 offset-md-1 mb-3 text-light">
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of what's new and exciting from us.</p>
          <div className="d-flex flex-column flex-sm-row w-100 gap-2">
            <label for="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
            <button className="btn btn-primary" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    <div className="footer-page d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top ">
      <p className="text-light">&copy; 2023 Company, Inc. All rights reserved.</p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3 " ><a className="link-body-emphasis"  width="50" height="24" href="https://www.instagram.com/domilogisticasas?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><i class="fa-brands fa-instagram ms-3 "></i></a></li>
        <li className="ms-3" ><a className="link-body-emphasis"  width="24" height="24" href="https://www.facebook.com/domilogistica"><i class="fa-brands fa-facebook ms-3"></i></a></li>
        <li className="ms-3" ><a className="link-body-emphasis"  width="24" height="24" href="https://twitter.com/Domientregas"><i class="fa-brands fa-twitter ms-3"></i></a></li>
        
      </ul>
    </div>
  </footer>






        
        </>
    )
}

export default Footer
