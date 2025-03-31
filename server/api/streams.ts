export default defineEventHandler(async () => {
    const config = useRuntimeConfig();
    const token = await $fetch("/api/twitchToken"); // Obtenemos el token
  
    return await $fetch("https://api.twitch.tv/helix/streams?first=3", {
      headers: {
        "Client-ID": config.public.twitchClientId,
        Authorization: `Bearer ${token}`,
      },
    });
  });
  