import Layout from "../../components/Layout";

export default function Vista1(){
    return (
        <>
            <Layout/>
            
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
              
                <a href="vista2" className="active"><span ><i class="fa-solid fa-user"></i></span> <span>Perfil</span></a>
              
              
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

        <main className="main_v">
          <div className="cards">
            <div className="card-single">
              <div className="">
              <h3>54</h3>
              <span>Activos</span>
            </div>
            
            <div className="">
              <span><i class="fa-solid fa-square-check m-1"></i></span>
            </div>
          </div>

          <div className="card-single">
              <div className="">
              <h3>30</h3>
              <span>En proceso</span>
            </div>
            
            <div className="">
              <span><i class="fa-solid fa-pencil"></i></span>
            </div>
          </div>

          <div className="card-single">
              <div className="">
              <h3>79</h3>
              <span>Culminados</span>
            </div>
            
            <div className="">
              <span><i class="fa-solid fa-list-check"></i></span>
            </div>
          </div>
          <div className="card-single" >
              <div className="">
              <h3>54</h3>
              <span>Órdenes                  </span>
              <span>Disponibles</span>
            </div>
            
            <div className="">
              <span><i class="fa-solid fa-user"></i></span>
            </div>
          </div>
          </div>

          <div className="cards-t">
          <div class="containerlist " id="">
      <div class="table_header">
        <h2>Productos</h2>
        <button>Crear nuevo</button>
        <div class="input_search">
          <input type="search" placeholder="Buscar" />
          <i class="bi bi-search" id="search"></i>
        </div>
      </div>
      <table className="table table-hover active" id="table_list">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th>Nombre </th>
            <th>Tipo </th>
            <th>Localización </th>
            <th>Precio </th>
            <th>Operaciones </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Producto01</td>
            <td>TipoProducto01</td>
            <td>LocalProducto01</td>
            <td>PrecioProducto01</td>
            <td>
              <i class="bi bi-pencil-square" id="icons"></i
              ><i class="bi bi-trash" id="icons"></i>
            </td>
          </tr>
          <tr>
          <th scope="row">2</th>
            <td>Producto01</td>
            <td>TipoProducto01</td>
            <td>LocalProducto01</td>
            <td>PrecioProducto01</td>
            <td>
              <i class="bi bi-pencil-square" id="icons"></i
              ><i class="bi bi-trash" id="icons"></i>
            </td>
          </tr>
          <tr>
          <th scope="row">3</th>
            <td>Producto01</td>
            <td>TipoProducto01</td>
            <td>LocalProducto01</td>
            <td>PrecioProducto01</td>
            <td>
              <i class="bi bi-pencil-square" id="icons"></i
              ><i class="bi bi-trash" id="icons"></i>
            </td>
          </tr>
          <tr>
          <th scope="row">4</th>
            <td>Producto01</td>
            <td>TipoProducto01</td>
            <td>LocalProducto01</td>
            <td>PrecioProducto01</td>
            <td>
              <i class="bi bi-pencil-square" id="icons"></i
              ><i class="bi bi-trash" id="icons"></i>
            </td>
          </tr>
          <tr>
          <th scope="row">5</th>
            <td>Producto01</td>
            <td>TipoProducto01</td>
            <td>LocalProducto01</td>
            <td>PrecioProducto01</td>
            <td>
              <i class="bi bi-pencil-square" id="icons"></i
              ><i class="bi bi-trash" id="icons"></i>
            </td>
          </tr>
          <tr>
          <th scope="row">6</th>
            <td>Producto01</td>
            <td>TipoProducto01</td>
            <td>LocalProducto01</td>
            <td>PrecioProducto01</td>
            <td>
              <i class="bi bi-pencil-square" id="icons"></i
              ><i class="bi bi-trash" id="icons"></i>
            </td>
          </tr>
          <tr>
          <th scope="row">6</th>
            <td>Producto01</td>
            <td>TipoProducto01</td>
            <td>LocalProducto01</td>
            <td>PrecioProducto01</td>
            <td>
              <i class="bi bi-pencil-square" id="icons"></i
              ><i class="bi bi-trash" id="icons"></i>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="table_fotter">
        <p>Total de filas : 06</p>
      </div>
</div>

        </div>
      </main>



      
      </div>
      
        
      </body>
  

        </>
    )
}