import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './assets/index.css'
import Home from './pages/home'
import Register from './pages/auth/register'
import Login from './pages/auth/login'
import Tratamientos from './pages/page2'
import Reservar from './pages/Citas/Agendar'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page2" element={<Tratamientos />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/citas/agendar" element={<Reservar />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
