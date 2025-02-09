import Home from './pages/home'
import Footer from './components/footer'
import Nav from './components/nav'
import './App.css'
import Cart from './pages/cart'
import Pizza from './pages/pizza'
import { Navigate, Route, Routes } from 'react-router-dom'
import Register from './pages/register'
import Login from './pages/login'
import NotFound from './pages/NotFound'
import Profile from './pages/Profile'
import CarritoProvider from './context/CarritoContext'
import { UserContext } from './context/UserContext'
import { useContext } from 'react'

function App() {

const {token} = useContext(UserContext)

  return (
    <>
      
        <CarritoProvider>

          <Nav />

          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/register"
              element={token ? <Navigate to="/"/> : <Register />}
            />
            <Route
              path="/login"
              element={token ? <Navigate to="/"/> : <Login />}
            />
            <Route
              path="/cart"
              element={<Cart />}
            />

            <Route
              path="/profile"
              element={!token ? <Profile /> : <Navigate to="/login"/>}
            />

            <Route
              path="/pizza/:id"
              element={<Pizza />}
            />

            <Route
              path="/404"
              element={<NotFound />}
            />

            <Route
              path="*"
              element={<NotFound />}
            />

          </Routes>

          <Footer />
        </CarritoProvider>
      
    </>
  )

}

export default App
