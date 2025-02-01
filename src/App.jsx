import Home from './pages/home'
import Footer from './components/footer'
import Nav from './components/nav'
import './App.css'
import Cart from './pages/cart'
import Pizza from './pages/pizza'
import { Route, Routes } from 'react-router-dom'
import Register from './pages/register'
import Login from './pages/login'
import NotFound from './pages/NotFound'
import Profile from './pages/Profile'
import CarritoProvider from './context/CarritoContext'

function App() {


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
            element={<Register />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/cart"
            element={<Cart />}
          />
          <Route
            path="/pizza/p001"
            element={<Pizza />}
          />

          <Route
            path="/profile"
            element={<Profile />}
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
