import React, { useContext } from 'react'
import Header from '../components/header'
import CardPizza from '../components/cardpizza'
import { CarritoContext } from '../context/CarritoContext'

const Home = () => {

  const { menu, isLoading, carrito, setCarrito } = useContext(CarritoContext);

  const onAgregar = (pizza) => {
    const unaPizzamas = [...carrito]
    const seleccionada = unaPizzamas.find(el => el.id === pizza.id)

    if (!seleccionada) {
      unaPizzamas.push({ ...pizza, count: 1 });
    } else {
      seleccionada.count += 1;
    }

    setCarrito(unaPizzamas)
   
  }

  return (
    <>

      <Header />

      <main>
        {isLoading ? (<p>Cargando...</p>) : (menu.map(pizza => <CardPizza
          name={pizza.name}
          price={pizza.price.toLocaleString('de-DE')}
          ingredients={pizza.ingredients}
          img={`public/imgs/${pizza.name}.jpeg`}
          key={pizza.id}
          agregar={() => onAgregar(pizza)}

        />))}

      </main>
    </>
  )
}

export default Home
