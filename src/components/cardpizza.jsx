import React from 'react'



export const CardPizza = ({ name, price, ingredients, img,}) => {


    return (
        <>

        
            <div className="card">
                <div className="fotopizza">
                    <img src={img} alt={name} />
                </div>

                <p className="nombre"> {name} </p>
                <p className="precio">${price.toLocaleString('de-DE')}</p>
                <ul>
                   {ingredients.map(ingre => <li className='ingredientes' key={ingre}> {ingre} </li>)} 
                   
                </ul>
               
                
                <div className="botones">
                    <button className="verMas"> Ver más</button>
                    <button className="anadir"> Añadir </button>
                </div>
            </div>
        </>

    )
}

export default CardPizza