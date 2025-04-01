import { getAppAccessToken } from "../services/twitch";

interface TwitchStream {
  id: string;
  user_id: string;
  user_name: string;
  title: string;
  viewer_count: number;
  thumbnail_url: string;
}

export default defineEventHandler(async () => {
  try {
    const token = await getAppAccessToken();
    if (!token) throw new Error("No se pudo obtener el token");

    const clientId = process.env.TWITCH_CLIENT_ID;
    if (!clientId) throw new Error("TWITCH_CLIENT_ID no está definido");

    const response = await $fetch<{ data: TwitchStream[] }>(
      "https://api.twitch.tv/helix/streams?first=3",
      {
        headers: {
          "Client-ID": clientId,
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return {
      status: "success",
      streams: response.data.map((stream) => ({
        id: stream.id,
        user_name: stream.user_name,
        title: stream.title,
        viewer_count: stream.viewer_count,
        thumbnail_url: stream.thumbnail_url
          .replace("{width}", "320")
          .replace("{height}", "180"),
        profile_image_url: `https://static-cdn.jtvnw.net/jtv_user_pictures/${stream.user_id}-profile_image-70x70.png`,
      })),
    };
  } catch (error: any) {
    console.error("Error completo:", error);
    return {
      status: "error",
      message: error.message, // error.message no error_message
      streams: [],
    };
  }
});
