import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { authService } from '../../api/auth.service'

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

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('¡Se hizo submit en login!');
    setError('')
    try {
      await authService.login(email, password)
      navigate('/')
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <>
      <Navbar />
      {/* Login Form */}
      <section className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-white px-4">
        <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Inicia Sesión</h2>
          {error && <div className="text-red-500 mb-4 text-center">{error}</div>}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="mt-1 block w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 py-2 px-1"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                className="mt-1 block w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 py-2 px-1"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
            >
              Iniciar sesión
            </button>
          </form>
          <div className="text-center text-sm text-gray-600 mt-6">
            <Link to="#" className="underline">¿Olvidaste tu contraseña?</Link>
            <span className="mx-2">|</span>
            <Link to="/register" className="underline">Crear una cuenta</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login