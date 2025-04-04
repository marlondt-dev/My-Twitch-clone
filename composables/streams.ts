import axios from "axios";
import { ref } from "vue";
import type { Stream } from "@/types/stream";

export const useStream = () => {
  const stream = ref<Stream[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const fetchData = async (endpoint: string) => {
    loading.value = true;
    error.value = null;

    try {
      const tokenResponse = await fetch("/api/testToken");
      const tokenData = await tokenResponse.json();

      if (!tokenData.tokenPreview) {
        throw new Error("No se pudo obtener el token");
      }

      const token = tokenData.tokenPreview;
      console.log(
        "Token obtenido correctamente:",
        token.substring(0, 10) + "..."
      );

      const config = useRuntimeConfig();
      const clientId = config.public.twitchClientId;

      console.log("Realizando petición a Twitch con:", {
        endpoint,
        clientIdLength: clientId?.length || 0,
      });

      const response = await axios({
        method: "GET",
        url: `https://api.twitch.tv/helix${endpoint}`,
        headers: {
          Authorization: `Bearer ${token}`,
          "Client-ID": clientId,
          "Content-Type": "application/json",
        },
      });

      console.log("Respuesta de Twitch:", response.status);

      if (response.data && response.data.data) {
        console.log("Datos obtenidos:", response.data.data.length);
        stream.value = response.data.data;
      } else {
        console.log("Sin datos en la respuesta:", response.data);
      }

      return response.data;
    } catch (err: any) {
      console.error("Error completo en fetchData:", err);
      error.value = err.message || "Error desconocido";
    } finally {
      loading.value = false;
    }
  };

  return {
    stream,
    loading,
    error,
    fetchData,
  };
};
