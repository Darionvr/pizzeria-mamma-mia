import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react'

const Register = () => {

    const [nombre, setNombre] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [reContraseña, setReContraseña] = useState("")
    const [registrado, setRegistrado] = useState(false)
    const [error, setError] = useState({ nombre: false, contraseña: false, reContraseña: false })

    const errorIcon = <FontAwesomeIcon icon={faCircleExclamation} />
    const checkIcon = <FontAwesomeIcon icon={faCircleCheck} />

    const validarInput = (e) => {
        e.preventDefault();
        let errores = {
            nombre: false,
            contraseña: false,
            reContraseña: false
        };

        if (nombre === '') {
            errores.nombre = true
        } if (contraseña === '' || contraseña.length < 6) {
            errores.contraseña = true
        } if (contraseña !== reContraseña) {
            errores.reContraseña = true
        } if (errores.nombre || errores.contraseña || errores.reContraseña) {
            setError(errores);
        }
        else {
            setError(errores)
            setNombre('')
            setContraseña('')
            setReContraseña('')
            setRegistrado(true)
        }
    }

    return (
        <div className='modal'>

            <div className="modal-contenido">
                {registrado == true ? (
                    <>
                    <p className='checkIcon'>{checkIcon}</p>
                    <h2 className='registrado'> ¡Gracias por registrarte! <br /> <span style={{fontSize: "1rem"}}> Tu próxima pizza está a solo un click.</span></h2>
                    </>
                ) : (
                    <><h2 className='registrate'>
                        Regístrate en <br /><span>Mamma Mía</span>
                    </h2><form noValidate onSubmit={validarInput}>
                            <div className="validaciones">
                                <input type="text" placeholder='Nombre' id='nombreInput' value={nombre} required onChange={(e) => setNombre(e.target.value)} />
                                {error.nombre ? <p className="error"> {errorIcon}</p> : null}
                                {error.nombre ? <p className="alert" id='nombreAlert'> El nombre no puede estar vacío</p> : null}
                            </div>
                            <div className="validaciones">
                                <input type="password" placeholder='Contraseña' id='contraseñaInput' required value={contraseña} onChange={(e) => setContraseña(e.target.value)} />
                                {error.contraseña ? <p className="error"> {errorIcon}</p> : null}
                                {error.contraseña ? <p className="alert" id='contraseñaAlert'> La contraseña debe tener al menos 6 caracteres</p> : null}
                            </div>
                            <div className="validaciones">
                                <input type="password" placeholder='Confirma tu Contraseña' id='reContraseña' required value={reContraseña} onChange={(e) => setReContraseña(e.target.value)} />
                                {error.reContraseña ? <p className="error"> {errorIcon}</p> : null}
                                {error.reContraseña ? <p className="alert" id='reAlert'> Las contraseñas no coinciden</p> : null}
                            </div>
                            <button type='submit' className='registrar'> Registrar </button>
                        </form>
                    </>
                )}


            </div>
        </div>
    )
}

export default Register