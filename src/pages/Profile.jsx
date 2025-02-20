import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const Profile = () => {

 
    const {token, Logout, user} =  useContext(UserContext)

  return (
    <div className='profile'>
      
      <div className='logeado'>
        <p className='tuPerfil'>Tu Perfil</p>
        <p className='correo'>Correo : {user.email} </p>
        <p className='cerrarSesion' onClick={Logout}>  Cerrar Sesión </p>
      </div>
      

    </div>
  )
}

export default Profile