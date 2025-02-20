import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import UserProvider from './context/UserContext.jsx'
import ModalProvider from './context/ModalContext.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <ModalProvider >
        <BrowserRouter>

          <App />

        </BrowserRouter>
      </ModalProvider>
    </UserProvider>
  </StrictMode>,
)
