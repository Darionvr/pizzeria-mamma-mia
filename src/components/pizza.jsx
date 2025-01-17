import React, { useEffect, useState } from 'react'
import CardPizza from './cardpizza';

const Pizza = () => {


  const [descripcion, setDescripcion] = useState({})


  const getDescripcion = async () => {
    const response = await fetch("http://localhost:5000/api/pizzas/p001");
    const data = await response.json();
    console.log(data);
    setDescripcion(data);
    
  };

  useEffect(() => {
    getDescripcion();
  },[]);




  return (
    <>

    <CardPizza
              name={descripcion.name}
              price={descripcion.price}
              ingredients={descripcion.ingredients}
              img={`src/assets/imgs/${descripcion.name}.jpeg`}
              descripcion={descripcion.desc}
              key={descripcion.id}
            />

      
    </>
  )
}

export default Pizza