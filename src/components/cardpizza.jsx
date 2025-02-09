import React, { useContext } from 'react'


export const CardPizza = ({ name, price, ingredients, img, descripcion, agregar, verPizza }) => {




    return (
        <>


            <div className="card">
                <div className="fotopizza">
                    <img src={img} alt={name} />
                </div>

                <p className="nombre"> {name} </p>
                <p className="precio">${price}</p>
                <p> {descripcion}</p>
                <ul>
                    {ingredients.map(ingre => <li className='ingredientes' key={ingre}> {ingre} </li>)}

                </ul>


                <div className="botones">

                    <button className="verMas" onClick={verPizza}> Ver más</button>

                    <button className="anadir" onClick={agregar} > Añadir </button>
                </div>
            </div>
        </>

    )
}

export default CardPizza