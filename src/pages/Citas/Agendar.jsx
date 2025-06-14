import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { citasService } from '../../api/citas.service'

const Navbar = () => {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <header className="bg-white bg-opacity-80 shadow-md">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-3 my-1 mx-2">
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
  );
};

const Agendar = () => {
  const navigate = useNavigate()
  const [citaData, setCitaData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    fecha: '',
    hora: '',
    motivo: ''
  })
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setCitaData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await citasService.agendarCita(citaData)
      alert('Cita agendada exitosamente')
      navigate('/')
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Agendar Cita</h2>
          {error && <div className="text-red-500 mb-4 text-center">{error}</div>}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre Completo</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={citaData.nombre}
                onChange={handleChange}
                required
                className="mt-1 block w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 py-2 px-1"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                value={citaData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 py-2 px-1"
              />
            </div>

            <div>
              <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">Teléfono</label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={citaData.telefono}
                onChange={handleChange}
                required
                className="mt-1 block w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 py-2 px-1"
              />
            </div>

            <div>
              <label htmlFor="fecha" className="block text-sm font-medium text-gray-700">Fecha</label>
              <input
                type="date"
                id="fecha"
                name="fecha"
                value={citaData.fecha}
                onChange={handleChange}
                required
                className="mt-1 block w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 py-2 px-1"
              />
            </div>

            <div>
              <label htmlFor="hora" className="block text-sm font-medium text-gray-700">Hora</label>
              <input
                type="time"
                id="hora"
                name="hora"
                value={citaData.hora}
                onChange={handleChange}
                required
                className="mt-1 block w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 py-2 px-1"
              />
            </div>

            <div>
              <label htmlFor="motivo" className="block text-sm font-medium text-gray-700">Motivo de la Consulta</label>
              <textarea
                id="motivo"
                name="motivo"
                value={citaData.motivo}
                onChange={handleChange}
                required
                rows="3"
                className="mt-1 block w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 py-2 px-1"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
            >
              Agendar Cita
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Agendar
