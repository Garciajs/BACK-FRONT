
import './App.css';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Inicio from './pages/inicio';
// import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Servicios from './pages/servicios';
import Nosotros from './pages/nosotros';
import Login from './pages/login';
import Register from './pages/register';
import Footer from './components/Footer';
  import Vista1 from './pages/vistas_admin/vista1';
  import Vista2 from './pages/vistas_admin/vista2';
  import Vista3 from './pages/vistas_admin/vista3';
  import Pagina from './pages/pagina';


export const ConNavbar = () => {
  return (
    <>
    <Navbar/>
    <Footer/>
    </>
  )
}

  function App() {

  
    return (
      <div className="App">
        <BrowserRouter>

         
            
            <Routes >
              
              <Route element={<ConNavbar/>}>
              <Route path='/' element={<Inicio />} ></Route>
              <Route path='/nosotros' element={<Nosotros />} ></Route>
              <Route path='/servicios' element={<Servicios />} ></Route>
              <Route path='/login' element={<Login />} ></Route>
              <Route path='/register' element={<Register />} ></Route>
              
              
              
              </Route>

              <Route path='/vista1' element={<Vista1/>} ></Route>
            <Route path='/vista2' element={<Vista2/>} ></Route>
            <Route path='/vista3' element={<Vista3/>} ></Route>
            <Route path='/pagina' element={<Pagina />} ></Route>
            </Routes>
     
        </BrowserRouter>


      </div>
    )
  }
      export default App;







