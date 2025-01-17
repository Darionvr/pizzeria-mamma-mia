import React, { useEffect, useState } from 'react'
import Header from './header'
import CardPizza from './cardpizza'


const Home = () => {

  const [menu, setMenu] = useState([])


  const getMenu = async () => {
    const response = await fetch("http://localhost:5000/api/pizzas");
    const data = await response.json();
    setMenu(data);
  };

  useEffect(() => {
    getMenu();
  }, []);


  return (
    <>
      <Header />

      <main>
        {menu.map(pizza => <CardPizza
          name={pizza.name}
          price={pizza.price}
          ingredients={pizza.ingredients}
          img={`src/assets/imgs/${pizza.name}.jpeg`}
          key={pizza.id}
        />)}

      </main>
    </>
  )
}

export default Home
