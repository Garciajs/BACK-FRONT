import React from 'react'
import { useState } from 'react'
import Register from './register'

const Pagina = () => {

const [state, setState] = useState(false)


const cerrar = () => {
    setState(false)
}



  return (
    <div> 
           {!state && (
             <button onClick={() => {  setState(true)  } }>Mostrar formulario de registro</button>
           )}
        {state && (
        <>
           <button onClick={cerrar}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                         <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                       </svg>
                       </button>

                <Register/>
        </>
        ) }

    </div>
  )
}

export default  Pagina