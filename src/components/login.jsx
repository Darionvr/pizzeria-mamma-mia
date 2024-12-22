import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const Login = () => {

    const [nombre, setNombre] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [error, setError] = useState({ nombre: false, contraseña: false })
    const [logeado, setLogeado] = useState(false)

    const errorIcon = <FontAwesomeIcon icon={faCircleExclamation} />
    const checkIcon = <FontAwesomeIcon icon={faCircleCheck} />

    const validarInput = (e) => {

        e.preventDefault();
        let errores = {
            nombre: false,
            contraseña: false,
        }
        if (nombre === '') {
            errores.nombre = true
        } if (contraseña === '' || contraseña.length < 6) {
            errores.contraseña = true
        } if (errores.nombre || errores.contraseña) {
            setError(errores);
        } else {
            setError(errores)
            setNombre('')
            setContraseña('')
            setLogeado(true)
        }
    }

    return (

        <div className='modal'>

            <div className="modal-contenido">
                {logeado == true ? (
                    <>
                        <p className='checkIcon'>{checkIcon}</p>
                        <h2 className='registrado'> ¡Bienvenido de nuevo! <br /> <span style={{fontSize: "1rem"}}> El horno ya está listo y esperando tu pedido.</span></h2>
                    </>
                ) : (
                    <><h2 className='registrate'>
                        Inicia sesión en <span>Mamma Mía</span>
                    </h2><form noValidate onSubmit={validarInput}>
                            <div className="validaciones">
                                <input type="text" placeholder='Nombre de usuario' id='nombreInput' value={nombre} required onChange={(e) => setNombre(e.target.value)} />
                                {error.nombre ? <p className="error"> {errorIcon}</p> : null}
                                {error.nombre ? <p className="alert" id='nombreAlert'> El nombre no puede estar vacío</p> : null}
                            </div>
                            <div className="validaciones">
                                <input type="password" placeholder='Contraseña' id='contraseñaInput' required value={contraseña} onChange={(e) => setContraseña(e.target.value)} />
                                {error.contraseña ? <p className="error"> {errorIcon}</p> : null}
                                {error.contraseña ? <p className="alert" id='contraseñaAlert'> La contraseña debe tener al menos 6 caracteres</p> : null}
                            </div>
                            <button type='submit' className='registrar'> Iniciar Sesión </button>
                        </form>
                    </>
                )}

            </div>
        </div>



    )
}

export default Login