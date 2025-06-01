import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Tratamientos() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <>
      <div className="bg-[url('https://www.teeth22.com/wp-content/uploads/2020/03/absceso-dental-800x399.png')] bg-cover bg-center min-h-screen">
        <header className="bg-white bg-opacity-80 shadow-md">
          <nav className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Link to="/">
              <div className="flex flex-col lg:flex-row items-center justify-center gap-3 my-1 mx-2">
                {/* Imagen */}
                <img
                  src="https://hr-dental.com/wp-content/uploads/2018/09/imagen-odontologia-hr-dental.jpg"
                  alt="Odontología"
                  className="w-12 h-auto rounded-lg "
                />
                  <div className="text-black font-bold text-xl">
                  Odontologia Integral
                  </div>
                </div>
              </Link>
              <div className="hidden md:block">
                <ul className="flex items-center space-x-8">
                  <li><Link to="/" className="text-black font-bold text-l">Inicio</Link></li>
                  <li><Link to="/page2" className="text-black font-bold text-l">Tratamientos</Link></li>
                  {!isAuthenticated ? (
                    <li><Link to="/login" className="text-black font-bold text-l">Iniciar Sesión</Link></li>
                  ) : (
                    <li>
                      <button
                        onClick={handleLogout}
                        className="text-black font-bold text-l bg-transparent border-none cursor-pointer"
                      >
                        Cerrar Sesión
                      </button>
                    </li>
                  )}
                  <li><Link to="/" className="text-black font-bold text-l">Contactos</Link></li>
                </ul>
              </div>
            </div>
          </nav>
        </header>

        <div className="py-12  px-4 md:px-10">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Nuestros Servicios
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Servicio 1 */}
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <img src="https://clinicadentaldrmestres.com/wp-content/uploads/2023/04/limpieza-dental-antes-despues-1500x750.jpg" alt="Icono limpieza" className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-center text-blue-600">Limpieza Dental</h3>
              <p className="text-gray-600 text-center mt-2">Removemos placa y sarro para mantener tus dientes sanos.</p>
            </div>

            {/* Servicio 2 */}
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <img src="https://www.clinicadentallarranaga.com/wp-content/uploads/que_es_una_ortodoncia-1024x558.jpg" alt="Icono ortodoncia" className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-center text-blue-600">Ortodoncia</h3>
              <p className="text-gray-600 text-center mt-2">Mejora la alineación de tus dientes con brackets o alineadores.</p>
            </div>

            {/* Servicio 3 */}
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <img src="https://staticnew-prod.topdoctors.cl/files/Image/large/5cff68b6748abacf98a87e5051188d16.jpg" alt="Icono estética" className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-center text-blue-600">Estética Dental</h3>
              <p className="text-gray-600 text-center mt-2">Blanqueamientos y carillas para una sonrisa más brillante.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Tratamientos