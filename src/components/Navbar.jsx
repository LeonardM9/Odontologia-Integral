import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
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
                className="w-12 h-auto rounded-lg"
              />
              <div className="text-black font-bold text-xl">
                Odontología Integral
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

export default Navbar; 