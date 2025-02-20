import React, { useContext, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react'
import { Link } from "react-router-dom"
import { UserContext } from '../context/UserContext';

const Register = () => {

    const { email, setEmail, password, setPassword, user, registerUser, token } = useContext(UserContext)

    
    const [repassword, setRepassword] = useState("")
    const [error, setError] = useState({ email: false, password: false, repassword: false })

    const errorIcon = <FontAwesomeIcon icon={faCircleExclamation} />
    const checkIcon = <FontAwesomeIcon icon={faCircleCheck} />
    const cruz = <FontAwesomeIcon icon={faXmark} />




    const validarInput = (e) => {
        e.preventDefault();
        let errores = {
            email: false,
            password: false,
            repassword: false
        };

        if (email === '') {
            errores.email = true
        } if (password === '' || password.length < 6) {
            errores.password = true
        } if (password !== repassword) {
            errores.repassword = true
        } if (errores.email || errores.password || errores.repassword) {
            setError(errores);
            
        }
        else {
            setError(errores)
            setRepassword('')
            registerUser()
        }
    }

    return (

        <header>


            <>
                <div >

                    <div className="modal-contenido">
                        <p className='botonCerrarModal' > <Link to='/'> {cruz} </Link> </p>
                        {token ? (
                            <>
                                <p className='checkIcon'>{checkIcon}</p>
                                <h2 className='registrado'> ¡Gracias por registrarte! <br /> <span style={{ fontSize: "1rem" }}> Tu próxima pizza está a solo un click.</span></h2>
                            </>
                        ) : (
                            <><h2 className='registrate'>
                                Regístrate en <br /><span>Mamma Mía</span>
                            </h2><form noValidate onSubmit={validarInput}>
                                    <div className="validaciones">
                                        <input type="text" placeholder='Tu correo' id='emailInput' value={email} required onChange={(e) => setEmail(e.target.value)} />
                                        {error.email ? <p className="error"> {errorIcon}</p> : null}
                                        {error.email ? <p className="alert" id='emailAlert'> El email no puede estar vacío</p> : null}
                                    </div>
                                    <div className="validaciones">
                                        <input type="password" placeholder='Tu contraseña' id='passwordInput' required value={password} onChange={(e) => setPassword(e.target.value)} />
                                        {error.password ? <p className="error"> {errorIcon}</p> : null}
                                        {error.password ? <p className="alert" id='passwordAlert'> La contraseña debe tener al menos 6 caracteres</p> : null}
                                    </div>
                                    <div className="validaciones">
                                        <input type="password" placeholder='Confirma tu contraseña' id='repassword' required value={repassword} onChange={(e) => setRepassword(e.target.value)} />
                                        {error.repassword ? <p className="error"> {errorIcon}</p> : null}
                                        {error.repassword ? <p className="alert" id='reAlert'> Las passwords no coinciden</p> : null}
                                    </div>
                                    <button type='submit' className='registrar'> Registrar </button>
                                </form>
                            </>
                        )}


                    </div>


                </div>

                <img src="/imgs/Header 2.jpeg" alt="" />
            </>



        </header>

    )
}

export default Register