import React from 'react'
import Header from './header'
import CardPizza from './cardpizza'
import { pizzas } from '../pizzas'


const Home = () => {
  return (
    <>
      <Header />

      <main>
        {pizzas.map(pizza => <CardPizza
          name={pizza.name}
          price={pizza.price}
          ingredients={pizza.ingredients}
          img={pizza.img}
          key={pizza.id}
           />)}

      </main>
    </>
  )
}

export default Home
