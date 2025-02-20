import React, { createContext, useContext, useEffect, useState } from 'react'


export const UserContext = createContext()

const UserProvider = ({ children }) => {

    const [token, setToken] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState(null);

    const Logout = () => {
        setToken(false);
        setUser(null);
    }

    const submitUser = async () => {
        console.log({ email, password });

        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });

        if(response.ok){
        const data = await response.json();
        localStorage.setItem("token", data.token);
        setToken(true);

    }}

    const registerUser = async () => {
        console.log({ email, password });

        const response = await fetch("http://localhost:5000/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });

        if(response.ok){
        const data = await response.json();
        localStorage.setItem("token", data.token);
        setToken(true);

    }}



    useEffect(() => {
        const jwtoken = localStorage.getItem("token");
        if (jwtoken) {
            fetch("http://localhost:5000/api/auth/me", {
                headers: {
                    Authorization: `Bearer ${jwtoken}`,
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    setUser(data);
                    setEmail('');
                    setPassword('')
                });
        }
    }, [token]);


    return (
        <UserContext.Provider value={{
            token,
            setToken,
            Logout,
            email,
            setEmail,
            password,
            setPassword,
            user,
            setUser,
            submitUser,
            registerUser
        }}>

            {children}
        </UserContext.Provider>

    )
}

export default UserProvider;

