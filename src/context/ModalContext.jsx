import React, { createContext, useContext, useState } from 'react'

export const ModalContext = createContext();

const ModalProvider = ({ children }) => {

    const [handleModal, setHandleModal] = useState(false)

    const abrirModal = () => { 
        document.body.classList.add('modal-open');
        setHandleModal(true) }
    const cerrarModal = () => { 
        document.body.classList.remove('modal-open');
        setHandleModal(false) }

    return (
        <ModalContext.Provider value={{ handleModal, abrirModal, cerrarModal }}>

            {children}

        </ModalContext.Provider>

    )
}

export default ModalProvider;