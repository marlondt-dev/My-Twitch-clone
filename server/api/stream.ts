import { getAppAccessToken } from "@/server/services/twitch";

export default defineEventHandler(async (event) => {
  const token = await getAppAccessToken();
  const clientId = process.env.TWITCH_CLIENT_ID;

  if (!clientId) throw new Error("TWITCH_CLIENT_ID no está definido");

  const fullPath = event.path.replace("/api/stream/", "");

  let twitchUrl = "https://api.twitch.tv/helix/streams";

  if (fullPath) {
    if (fullPath.startsWith("?")) {
      twitchUrl += fullPath;
    } else {
      twitchUrl = `https://api.twitch.tv/helix/${fullPath}`;
    }
  } else {
    twitchUrl += "?first=3";
  }

  try {
    const response = await $fetch(twitchUrl, {
      method: "GET",
      headers: {
        "Client-ID": clientId,
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
    throw createError({
      statusCode: 500,
      statusMessage: "Error al obtener datos de Twitch",
    });
  }
});
