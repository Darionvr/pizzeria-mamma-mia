import React, { useContext, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation, faXmark, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom"
import { UserContext,} from '../context/UserContext';

const Login = () => {
    const { email, setEmail, password, setPassword, user, submitUser, token} = useContext(UserContext)
    const [error, setError] = useState({ email: false, password: false })

    
    const errorIcon = <FontAwesomeIcon icon={faCircleExclamation} />
    const checkIcon = <FontAwesomeIcon icon={faCircleCheck} />
    const cruz = <FontAwesomeIcon icon={faXmark} />

    const validarInput = (e) => {
        e.preventDefault();
        let errores = {
            email: email === '',
            password: password === '' || password.length < 6
        };
        setError(errores);
        if (!errores.email && !errores.password) {
            submitUser()
        }
    }

    return (
        <header>
            <div>
                <div className="modal-contenido">
                    <p className='botonCerrarModal'><Link to='/'> {cruz} </Link></p>
                    {token ? (
                        <>
                            <p className='checkIcon'>{checkIcon}</p>
                            <h2 className='registrado'> ¡Bienvenido de nuevo! {user.email} <br /><span style={{ fontSize: "1rem" }}> El horno ya está listo y esperando tu pedido.</span></h2>
                        </>
                    ) : (
                        <>
                            <h2 className='registrate'>
                                Inicia sesión en <br /><span>Mamma Mía</span>
                            </h2>
                            <form noValidate onSubmit={validarInput}>
                                <div className="validaciones">
                                    <input type="text" placeholder='email de usuario' id='emailInput' value={email} required onChange={(e) => setEmail(e.target.value)} />
                                    {error.email ? <p className="error">{errorIcon}</p> : null}
                                    {error.email ? <p className="alert" id='emailAlert'> El email no puede estar vacío</p> : null}
                                </div>
                                <div className="validaciones">
                                    <input type="password" placeholder='Contraseña' id='passwordInput' required value={password} onChange={(e) => setPassword(e.target.value)} />
                                    {error.password ? <p className="error">{errorIcon}</p> : null}
                                    {error.password ? <p className="alert" id='passwordAlert'> La contraseña debe tener al menos 6 caracteres</p> : null}
                                </div>
                                <button type='submit' className='registrar'> Iniciar Sesión </button>
                            </form>
                        </>
                    )}
                </div>
            </div>
            <img src="/imgs/Header 2.jpeg" alt="" />
        </header>
    )
}

export default Login
