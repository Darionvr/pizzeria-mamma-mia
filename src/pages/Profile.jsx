import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../context/UserContext'

const Profile = () => {

  const usuario = <FontAwesomeIcon icon={faUser} />
    const {token, Logout} =  useContext(UserContext)

  return (
    <div className='profile'>
      <div className='logeado'>
        <p className='correo'> usuario@correo.com </p>
        <p className='cerrarSesion' onClick={Logout}>  Cerrar Sesión </p>
      </div>
      <p className='usuario'>{usuario}</p>

    </div>
  )
}

export default Profile