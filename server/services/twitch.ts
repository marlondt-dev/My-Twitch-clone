import axios from 'axios';

export async function getAppAccessToken(): Promise<string> {
  try {
    const clientId = process.env.TWITCH_CLIENT_ID;
    const clientSecret = process.env.TWITCH_CLIENT_SECRET;

    if (!clientId || !clientSecret) {
      throw new Error('Client-ID o Client-Secret no definidos');
    }

    const response = await axios.post(
      'https://id.twitch.tv/oauth2/token',
      null, // Sin cuerpo, ya que estamos usando parámetros de consulta
      {
        params: {
          client_id: clientId,
          client_secret: clientSecret,
          grant_type: 'client_credentials',
        },
      }
    );

    // Devolvemos el token
    return response.data.access_token;
  } catch (error) {
    console.error('Error al obtener el token de Twitch:', error);
    throw new Error('No se pudo obtener el token de Twitch');
  }
}
