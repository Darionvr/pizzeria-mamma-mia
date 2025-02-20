import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import { CarritoContext } from '../context/CarritoContext'
import { UserContext } from '../context/UserContext'
import { ModalContext } from '../context/ModalContext'


const Cart = () => {
    const carritoIcon = <FontAwesomeIcon icon={faCartShopping} />
    const cruz = <FontAwesomeIcon icon={faXmark} />
    const { cart, setCart, isSubmited, setIsSubmited, submitCarrito} = useContext(CarritoContext)
    const { token } = useContext(UserContext)


    const agregar = (pizza) => {
        const unaPizzamas = [...cart]
        const index = unaPizzamas.findIndex(el => el.id === pizza.id)
        unaPizzamas[index].count += 1
        setCart(unaPizzamas)
    }

    const quitar = (pizza) => {
        const unaPizzamenos = [...cart]
        const index = unaPizzamenos.findIndex(el => el.id === pizza.id)
        unaPizzamenos[index].count = unaPizzamenos[index].count > 1 ? unaPizzamenos[index].count - 1 : unaPizzamenos.splice(index, 1)
        setCart(unaPizzamenos)
    }

    const eliminar = (pizza) => {
        const pizzaEliminada = [...cart]
        const index = pizzaEliminada.findIndex(el => el.id === pizza.id)
        pizzaEliminada.splice(index, 1)
        setCart(pizzaEliminada)
    }

    const total = cart.reduce((acumulador, items) => acumulador + (items.count * items.price), 0)

    const { cerrarModal } = useContext(ModalContext)

    const cleanCarrito = () => {
        setIsSubmited(false)
        setCart([])
        cerrarModal()
    }

    return (

        <div className="modal">

            <aside className='cart'>
                <p className='botonCerrarModal' onClick={cerrarModal} >  {cruz} </p>

                {isSubmited ? (
                    <>  
                        <div> 
                        <p className='gracias'> ¡Gracias por tu compra! </p>
                        <p className='pronto'>  Tu pizza está siendo preparada y pronto estará en camino.</p>
                           </div>
                            

                        <img src="imgs/CompraLista.png" alt="gracias" className='compralista' />

                        <button className='anadir' onClick={cleanCarrito}> Realizar otra compra </button>
                    </>

                ) : (
                    <>
                        <p className='tituloCart'> Tu Pedido</p>

                        {total > 1 ? cart.map(pizza =>
                            <div key={pizza.id} className='pedido'>
                                <img src={`public/imgs/${pizza.name}.jpeg`} alt={pizza.name} className='imagenPedido' />
                                <div className='detalle'>
                                    <p className='nombrePedido'>{pizza.name}</p>
                                    <p className='precioPedido'> $ {pizza.price.toLocaleString('de-DE')} c/u</p>
                                    <div className="botones">
                                        <button className='sumaResta' onClick={() => quitar(pizza)}> - </button>
                                        <p> {pizza.count}</p>
                                        <button className='sumaResta' onClick={() => agregar(pizza)}> + </button>
                                    </div>
                                </div>
                                <p className='cerrarPedido' onClick={() => eliminar(pizza)}>{cruz}</p>
                            </div>

                        ) :
                            <div className='carritoVacio'>
                                <p className='iconoVacio'> {carritoIcon} </p>
                                <p> Tu carrito está vacío</p></div>

                        }

                        {total > 0 && <div className='pagoCart'>

                            <div className='totalCart'> <p> Total</p> <p className='totalmonto'> $ {total.toLocaleString('de-DE')} </p></div>

                            {token && <button className='anadir' onClick={submitCarrito}> Finalizar compra</button>}

                        </div>}

                    </>)}

            </aside>
        </div>

    )
}

export default Cart