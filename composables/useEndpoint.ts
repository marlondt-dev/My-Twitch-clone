import { ref } from 'vue';
import axios from 'axios';

// Asegúrate de ajustar esta ruta según donde esté tu función
import { getAppAccessToken } from '~/server/services/twitch';

export const useStream = () => {
  const stream = ref([]);
  const loading = ref(false);
  const error = ref(null);

  const fetchData = async (endpoint: string) => {
    loading.value = true;
    error.value = null;
    
    try {
      // Obtener token usando tu función existente
      const token = await getAppAccessToken();
      const clientId = process.env.TWITCH_CLIENT_ID;

    if (!clientId) throw new Error("TWITCH_CLIENT_ID no está definido");

      
      // Realizar petición a la API de Twitch
      const response = await axios({
        method: 'GET',
        url: `https://api.twitch.tv/helix${endpoint}`,
        headers: {
          'Authorization': `Bearer ${token}`,
          'Client-ID':clientId,
          'Content-Type': 'application/json'
        }
      });
      
      // Asignar datos al stream
      if (response.data && response.data.data) {
        stream.value = response.data.data;
      }
      
      return response.data;
    } catch (err) {
      console.error('Error completo:', err);
      error.value = err.message || 'Error desconocido';
    } finally {
      loading.value = false;
    }
  };
  
  return {
    stream,
    loading,
    error,
    fetchData
  };
};