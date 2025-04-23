import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


function Login() {

  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  })

  const  cambioForm = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    })
  }

  useEffect (() => {
    console.log('testing useEffect');  
  }, [])

  const requestLogin = async (e) => {
    e.preventDefault();
    console.log(loginData);
    try {
      await getData();
      alert('Login exitoso');
      navigate('/');
    } catch (error) {
      console.error(error.message);
      alert('Hubo un error al iniciar sesión');
    }
  }

  async function getData() {
    const url = "https://example.org/products.json";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(error.message);
    }
  }

  const navigate = useNavigate();


  

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
        
{/* Login Form */}
    <section className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-white px-4">
        <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Inicia Sesión</h2>
          <form onSubmit={requestLogin} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={loginData.email}
                onChange={cambioForm}
                className="mt-1 block w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 py-2 px-1"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={loginData.password}
                onChange={cambioForm}
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