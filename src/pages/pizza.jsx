import React, { useEffect, useState } from 'react'
import CardPizza from '../components/cardpizza';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Pizza = () => {


  const { id } = useParams();

  const [descripcion, setDescripcion] = useState({});
  const [isLoading, setIsLoading] = useState(true);


  const getDescripcion = async () => {
    const response = await fetch(`http://localhost:5000/api/pizzas/${id}`);
    const data = await response.json();
    setDescripcion(data);
    setIsLoading(false);

  };

  useEffect(() => {
    getDescripcion();
  }, []);




  return (
    <>
      {isLoading ? (<p>Cargando...</p>) : (

        <div className="pizzainfo">
          <div style={{width: '100%'}}>
            <img src={`/imgs/${descripcion.name}.jpeg`} alt={descripcion.name} />

          </div>
          <div>
            <p className="nombre"> {descripcion.name} </p>
            <p className="precio">${descripcion.price}</p>

            <p> {descripcion.desc}</p>
            <ul>
              {descripcion.ingredients.map(ingre => <li className='ingredientes' key={ingre}> {ingre} </li>)}

            </ul>
            <div className="botones">

              <Link to="/"> <button className="verMas" >Volver</button></Link> 

            </div>
          </div>

        </div>
      )}

    </>
  )
}

export default Pizza