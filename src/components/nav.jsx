import React, { useContext, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import Register from '../pages/register'
import Login from '../pages/login'
import { Link } from "react-router-dom"
import Profile from '../pages/Profile'
import { CarritoContext } from '../context/CarritoContext'



export const Nav = () => {

  const carritoIcon = <FontAwesomeIcon icon={faShoppingCart} />
  const pizza = <FontAwesomeIcon icon={faPizzaSlice} />
  const cruz = <FontAwesomeIcon icon={faXmark} />
  const {carrito} = useContext(CarritoContext)

  const total = carrito.reduce((acumulador, items) => acumulador + (items.count * items.price), 0)


  const token = false;





  return (
    <>

      <nav>

        <p className='logo'> {pizza} Mamma Mía </p>

        <ul>
          <li> <Link to="/"> Home</Link></li>
          <li className={token == false ? 'noRegistrado' : null}><a href="#"> Profile</a></li>
          <li className={token == false ? 'noRegistrado' : null}><a href="#" > Logout</a></li>
          <li className={token == true ? 'noRegistrado' : null}> <Link to="/register"> Register</Link> </li>
          <li className={token == true ? 'noRegistrado' : null}> <Link to='/login'> Login </Link> </li>

        </ul>
        <div className='profile'>
          
         <Link to='/cart'>  <button className='total' > {carritoIcon} ${total.toLocaleString('de-DE')} </button></Link> 
          <Profile />
        </div>
      </nav>
      

    </>
  )
}

export default Nav
