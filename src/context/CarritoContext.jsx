import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";


export const CarritoContext = createContext();

const CarritoProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [menu, setMenu] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [isSubmited, setIsSubmited] = useState(false)
    const { user } = useContext(UserContext)




    const getMenu = async () => {
        const response = await fetch("http://localhost:5000/api/pizzas");
        const data = await response.json();
        setMenu(data);
        setIsLoading(false);
    };


    const submitCarrito = async () => {

        const jwtoken = localStorage.getItem("token");
        if (jwtoken) {
            const response = await fetch("http://localhost:5000/api/checkouts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${jwtoken}`,
                },
                body: JSON.stringify({
                    cart: cart,
                }),
            });
            if (response.ok) {
                setIsSubmited(true);
            }
        }
    };

 


    useEffect(() => {
        getMenu();
    }, []);


    return (

        <CarritoContext.Provider value={{ cart, setCart, menu, isLoading, submitCarrito, isSubmited, setIsSubmited}}>

            {children}

        </CarritoContext.Provider>
    )
};

export default CarritoProvider;
