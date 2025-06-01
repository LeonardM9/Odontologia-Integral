import { API_URL } from './config';

export const authService = {
  async login(email, password) {
    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Error en login');
      localStorage.setItem('token', data.token);
      return data;
    } catch (error) {
      console.error('Error en login:', error);
      throw new Error(error.message || 'No se pudo conectar con el servidor');
    }
  },

  async register(nombre, email, password) {
    try {
      const response = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, email, password }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Error en registro');
      localStorage.setItem('token', data.token);
      return data;
    } catch (error) {
      console.error('Error en registro:', error);
      throw new Error(error.message || 'No se pudo conectar con el servidor');
    }
  },

  logout() {
    localStorage.removeItem('token');
  }
}; 