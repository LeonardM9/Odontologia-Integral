import { API_URL } from './config';

export const citasService = {
  async agendarCita(citaData) {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}/citas/agendar`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(citaData)
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Error al agendar cita');
    return data;
  },

  async obtenerCitas() {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}/citas`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Error al obtener citas');
    return data;
  }
}; 