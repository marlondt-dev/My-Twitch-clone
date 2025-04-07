import { TwitchAPI } from '@/utils/twitchApi'; // Asegúrate de tener la ruta correcta

export const useEndpoint = () => {
  const twitchAPI = new TwitchAPI();

  // Función para obtener los streams
  const getStreams = async (params: string) => {
    try {
      const data = await twitchAPI.fetchData(`streams${params}`);
      return data;
    } catch (error) {
      console.error('Error al obtener streams', error);
      throw error;
    }
  };

  // Puedes agregar otras funciones para obtener diferentes tipos de datos
  // Por ejemplo, obtener juegos:
  const getGames = async (params: string) => {
    try {
      const data = await twitchAPI.fetchData(`games${params}`);
      return data;
    } catch (error) {
      console.error('Error al obtener juegos', error);
      throw error;
    }
  };

  return {
    getStreams,
    getGames,
  };
};
