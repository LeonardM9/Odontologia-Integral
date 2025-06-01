import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="bg-[url('https://www.teeth22.com/wp-content/uploads/2020/03/absceso-dental-800x399.png')] bg-cover bg-center min-h-screen">
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
                <li><a href="#sobre-nosotros" class="text-black font-bold text-l">Contactos</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <div className="text-center mt-50 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Tu sonrisa, nuestra prioridad
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-6">
          En Odontología Integral te ofrecemos atención personalizada y profesional.
        </p>
        <Link to= "/citas/agendar" className="inline-block">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300">
          Reservar cita
        </button>
        </Link>
      </div>
    </div>
    
    <div className="bg-white py-16 px-6 md:px-12">
      <div id="sobre-nosotros" className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Sobre Nosotros</h2>
        <p className="text-lg text-gray-600 mb-10 text-center">
          En Odontología Integral nos apasiona cuidar tu sonrisa. Nuestro equipo de profesionales está comprometido con brindar atención personalizada, cálida y de alta calidad. Contamos con tecnología moderna y un ambiente cómodo para que te sientas en confianza desde tu primera visita.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contacto */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Contáctanos</h3>
            <ul className="text-gray-700 text-lg space-y-2">
              <li><strong>📍 Dirección:</strong> Carrera 12 #34-56, Bogotá</li>
              <li><strong>📞 Teléfono:</strong> (601) 123-4567</li>
              <li><strong>📧 Correo:</strong> contacto@odontologiaintegral.com</li>
              <li><strong>🕒 Horario:</strong> Lunes a Viernes 8am - 6pm</li>
            </ul>
          </div>

          {/* Imagen decorativa o mapa */}
          <div className="flex justify-center items-center">
            <img 
              src="https://www.clinicalorenzo.com/wp-content/uploads/2019/02/estomatologia-odontologia-zaragoza.jpg" 
              alt="Equipo odontológico" 
              className="rounded-lg shadow-md w-full max-w-sm"
            />
          </div>
        </div>
      </div>
  </div>
    </>
  )
}

export default Home