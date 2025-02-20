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
import ModalProvider, { ModalContext } from './context/ModalContext'

function App() {

  const { token } = useContext(UserContext)
  const { handleModal} = useContext(ModalContext)


  return (
    <>

      <CarritoProvider>

        
          <Nav />
          {handleModal && <Cart />}
        
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
            path="/profile"
            element={token ? <Profile /> : <Navigate to="/login" />}
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
