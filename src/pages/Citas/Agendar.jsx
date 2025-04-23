import React from 'react'
import { Link } from 'react-router-dom'

function Reservar() {
  return (
    <>
        <header class="bg-white bg-opacity-80 shadow-md">
        <nav class="container mx-auto px-6 py-4">
          <div class="flex items-center justify-between">
            <Link to="/">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-3 my-1 mx-2">
              {/* Imagen */}
              <img
                src="https://hr-dental.com/wp-content/uploads/2018/09/imagen-odontologia-hr-dental.jpg"
                alt="Odontología"
                className="w-12 h-auto rounded-lg "
              />
                <div class="text-black font-bold text-xl">
                Odontologia Integral
                </div>
              </div>
            </Link>
            <div class="hidden md:block">
              <ul class="flex items-center space-x-8">
              <li><Link to="/" class="text-black font-bold text-l">Inicio</Link></li>
                <li><Link to="/page2" class="text-black font-bold text-l">Tratamientos</Link></li>
                <li><Link to="/login" class="text-black font-bold text-l">Iniciar Sesión</Link></li>
                <li><Link to="/" class="text-black font-bold text-l">Contactos</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    
        <div className="min-h-screen bg-blue-50 py-12 px-6">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-6 text-blue-600 text-center">Agendar Cita</h1>
            <form className="space-y-4">
            <div>
                <label className="block text-gray-700 font-semibold">Nombre completo</label>
                <input type="text" className="w-full border border-gray-300 rounded px-4 py-2 mt-1" placeholder="Juan Pérez" />
            </div>
            <div>
                <label className="block text-gray-700 font-semibold">Correo electrónico</label>
                <input type="email" className="w-full border border-gray-300 rounded px-4 py-2 mt-1" placeholder="correo@ejemplo.com" />
            </div>
            <div>
                <label className="block text-gray-700 font-semibold">Fecha de la cita</label>
                <input type="date" className="w-full border border-gray-300 rounded px-4 py-2 mt-1" />
            </div>
            <div>
                <label className="block text-gray-700 font-semibold">Hora</label>
                <input type="time" className="w-full border border-gray-300 rounded px-4 py-2 mt-1" />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                Reservar cita
            </button>
            </form>
        </div>
        </div>
    </>
  )
}

export default Reservar
