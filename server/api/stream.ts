import { getAppAccessToken } from "../services/twitch";

export default defineEventHandler(async () => {
  try {
    const token = await getAppAccessToken();

    const clientId = process.env.TWITCH_CLIENT_ID;
    if (!clientId) throw new Error("TWITCH_CLIENT_ID no está definido");

    const response = await $fetch(
      "https://api.twitch.tv/helix/streams?first=3&language=es",
      {
        method: "GET",
        headers: {
          "Client-ID": clientId,
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response;
  } catch (error) {
    console.log(error);
  }
});
