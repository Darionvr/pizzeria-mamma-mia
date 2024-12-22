import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import Register from './register'
import Login from './login'

export const Nav = () => {

  const carrito = <FontAwesomeIcon icon={faShoppingCart} />
  const pizza = <FontAwesomeIcon icon={faPizzaSlice} />
  const cruz = <FontAwesomeIcon icon={faXmark} />

  const total = 25000;
  const token = false;

  const [abrirRegister, setAbrirRegister] = useState(false)
  const [abrirLogin, setAbrirLogin] = useState(false)

  const abrirModalRegistro = () => {
    setAbrirRegister(true)
  }
  const cerrarModalRegistro = () => {
    setAbrirRegister(false)
  }

  const abrirModalLogin = () => {
    setAbrirLogin(true)
  }
  const cerrarModalLogin = () => {
    setAbrirLogin(false)
  }

  return (
    <>

      <nav>

        <p className='logo'> {pizza} Mamma Mía </p>

        <ul>
          <li><a href="#"> Home </a></li>
          <li className={token == false ? 'noRegistrado' : null}><a href="#"> Profile</a></li>
          <li className={token == false ? 'noRegistrado' : null}><a href="#" > Logout</a></li>
          <li className={token == true ? 'noRegistrado' : null}><a href="#" onClick={abrirModalRegistro} >Register</a></li>
          <li className={token == true ? 'noRegistrado' : null}><a href="#" onClick={abrirModalLogin} >Login</a></li>

        </ul>

        <button className='total'><a href="#">{carrito} ${total.toLocaleString('de-DE')}</a></button>
      </nav>


      {abrirRegister == true ? (
        <div className='modal'>
          <div className="modal-contenido">
            <p className='botonCerrarModal' onClick={cerrarModalRegistro}>{cruz}</p>
            <Register />
          </div>
        </div>
      ) : null}

      {abrirLogin == true ? (
        <div className='modal'>
          <div className="modal-contenido">
            <p className='botonCerrarModal' onClick={cerrarModalLogin}>{cruz}</p>
            <Login />
          </div>
        </div>
      ) : null}


    </>
  )
}

export default Nav
