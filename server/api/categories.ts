import { getAppAccessToken } from "~/server/services/twitch";

export default defineEventHandler(async () => {
  const token = await getAppAccessToken();
  const clientId = process.env.TWITCH_CLIENT_ID;
  if (!clientId) throw new Error("TWITCH_CLIENT_ID no está definido");

  try {
    const response = await $fetch(
      "https://api.twitch.tv/helix/games/top?first=6",
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
