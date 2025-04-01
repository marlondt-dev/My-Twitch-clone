import axios from "axios";
import type { AxiosError } from "axios";

export const getAppAccessToken = async (): Promise<string> => {
  try {
    const response = await axios.post(
      "https://id.twitch.tv/oauth2/token",
      null,
      {
        params: {
          client_id: process.env.TWITCH_CLIENT_ID,
          client_secret: process.env.TWITCH_CLIENT_SECRET,
          grant_type: "client_credentials",
        },
      }
    );

    if (!response.data.access_token) {
      throw new Error("Twitch no devolvió un token válido");
    }

    return response.data.access_token;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.error("Error al obtener token de Twitch:", {
      message: axiosError.message,
      status: axiosError.response?.status,
      data: axiosError.response?.data,
      config: {
        url: axiosError.config?.url,
        params: axiosError.config?.params,
      },
    });
    throw new Error("No se pudo obtener el token de Twitch");
  }
};
