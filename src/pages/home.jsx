import React, { useContext, useState } from 'react'
import Header from '../components/header'
import CardPizza from '../components/cardpizza'
import { CarritoContext } from '../context/CarritoContext'
import { useNavigate} from 'react-router-dom'


const Home = () => {

  const { menu, isLoading, cart, setCart } = useContext(CarritoContext);

  const onAgregar = (pizza) => {
    const unaPizzamas = [...cart]
    const seleccionada = unaPizzamas.find(el => el.id === pizza.id)

    if (!seleccionada) {
      unaPizzamas.push({ ...pizza, count: 1 });
    } else {
      seleccionada.count += 1;
    }

    setCart(unaPizzamas)
  }


  const navigate = useNavigate();
 

  const vistaPizza = (pizza) => {
    navigate(`/pizza/${pizza.id}`);

  }

  return (
    <>

      <Header />

      <main>
        {isLoading ? (<p>Cargando...</p>) : (menu.map(pizza => <CardPizza
          name={pizza.name}
          price={pizza.price.toLocaleString('de-DE')}
          ingredients={pizza.ingredients}
          img={`/imgs/${pizza.name}.jpeg`}
          key={pizza.id}
          agregar={() => onAgregar(pizza)}
          verPizza={() => vistaPizza(pizza)}


        />))}

      </main>
    </>
  )
}

export default Home
