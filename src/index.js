import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Vista1 from './pages/vistas_admin/vista1';
import Vista2 from './pages/vistas_admin/vista2';
import Vista3 from './pages/vistas_admin/vista3';
import Inicio from './pages/inicio';
import Servicios from './pages/servicios';
import Nosotros from './pages/nosotros';
import Login  from './pages/login';
import Register from './pages/register';
import App from './App';

const router = createBrowserRouter([
  
  {
    path: '/',
    element: <Inicio/>
  },
  {
    path: '/servicios',
    element: <Servicios/>
  },
  {
    path: '/nosotros',
    element: <Nosotros/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/register',
    element: <Register/>
  },
  { 
    path: '/vista1',
    element: <Vista1 />
  },
  {
    path: '/Vista2',
    element: <Vista2 />
  },
  {
    path: '/Vista3',
    element: <Vista3/>
  },
  


]
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <RouterProvider router = {router}/>  */}
    <App></App>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
