import React from 'react'
import { Link } from "react-router-dom"

const NotFound = () => {
  return (

    
    <div className='notfound'>
<h1 className='errorPizza'> 4 <img className='errorPizza' src="imgs/404.png" alt="pizza error" /> 4</h1>
<p className='errortitle'>  ¡Oh no! Alguien ya se comió este pedido.</p>
<p> Mejor volvamos al menú principal</p>
<Link to='/'> 
<button className="verMas"> Regresar </button>
</Link>


    </div>


  )
}

export default NotFound