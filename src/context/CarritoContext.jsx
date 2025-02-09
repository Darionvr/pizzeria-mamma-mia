import { createContext, useContext, useEffect, useState } from "react";


export const CarritoContext = createContext();

const CarritoProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([]);
    const [menu, setMenu] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    



    const getMenu = async () => {
        const response = await fetch("http://localhost:5000/api/pizzas");
        const data = await response.json();
        setMenu(data);
        setIsLoading(false);
    };

    useEffect(() => {
        getMenu();
    }, []);


    return (

        <CarritoContext.Provider value={{ carrito, setCarrito, menu, isLoading}}>

            {children}

        </CarritoContext.Provider>
    )
};

export default CarritoProvider;
