export default function vista3(){
    return (
        <div>
            <h1>this is vista 3 </h1>



            <body className="body_v1">
            <input type="checkbox" id="nav-toggle" />
        <div className="sidebar_v">
          <div className="sidebar-brand">
            <center>
            <span className=""><img src="assets/images/im5.jpg" id="im_user" alt="" /></span>
            
            </center>
            <center>
            <span className=" text-light">Don Quijote</span>
            </center>
          </div>
          
          <div className="side_menu">
            <ul style={{ "float":"inline-start"}}>
              
                <a href="/" className="active"><span ><i class="fa-solid fa-user"></i></span> <span>Perfil</span></a>
              
              
                <a href="/"className="side_span"><span ><i class="fa-solid fa-desktop"></i></span> <span>Usuarios</span></a>
              
              
                <a href="/"className="side_span"><span ><i class="fa-solid fa-th"></i></span> <span>Estadísticas</span></a>
              
              
                <a href="/"className="side_span"><span ><i class="fa-solid fa-cogs"></i></span> <span>Configuración</span></a>
              
              
                <a href="/"className="side_span"><span ><i class="fa-solid fa-table"></i></span> <span>Información</span></a>
              
            </ul>
          </div>
      </div>

      <div className="main-content">
        <header className="headerV">
          <h2>
            <label htmlFor="nav-toggle" className="nav-icon-toggle"> 
            <span><i class="fa-solid fa-bars"></i></span>
              </label>

              Domi <h2>Logística</h2> 
          </h2>
              
          <div className="search-wrapper">
            <span><i class="fa-solid fa-search"></i></span>
            <input type="search" placeholder="Buscar" />
          </div>

          <div className="user_wrapper">
            <img src="assets/images/im5.jpg"  style={{"max-width": "45px","border-radius": "100px", "margin-right": "20px"}} alt="" />
            <div className="">
              <h4>Don Quijote</h4>
              <small>Super Admin</small>
            </div>
          </div>
        </header>
</div>   

        </body>
</div>
    )
}