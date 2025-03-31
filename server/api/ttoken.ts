export default defineEventHandler(async () => {
    const config = useRuntimeConfig();
  
    const response = await $fetch<{ access_token: string }>("https://id.twitch.tv/oauth2/token", {
      method: "POST",
      body: {
        client_id: config.public.twitchClientId,
        client_secret: config.twitchClientSecret,
        grant_type: "client_credentials",
      },
    });
  
    return response.access_token;
  });
  