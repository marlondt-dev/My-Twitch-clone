import { getAppAccessToken } from "../services/twitch";


export default defineEventHandler(async () => {
  try {
    const token = await getAppAccessToken();
    
    const clientId = process.env.TWITCH_CLIENT_ID;
    if (!clientId) throw new Error("TWITCH_CLIENT_ID no está definido");
    
  
    const streamsResponse = await $fetch(
      "https://api.twitch.tv/helix/streams?first=3&language=es",
      {
        method: "GET",
        headers: {
          "Client-ID": clientId,
          "Authorization": `Bearer ${token}`
        }
      }
    );
    
  
    const userIds = streamsResponse.data.map(stream => stream.user_id);
    
    
    if (userIds.length > 0) {
      const usersResponse = await $fetch(
        `https://api.twitch.tv/helix/users?id=${userIds.join('&id=')}`,
        {
          method: "GET",
          headers: {
            "Client-ID": clientId,
            "Authorization": `Bearer ${token}`
          }
        }
      );
   
      const streamsWithUserData = streamsResponse.data.map(stream => {
        const userData = usersResponse.data.find(user => user.id === stream.user_id);
        return {
          ...stream,
          profile_image_url: userData?.profile_image_url || null,
          offline_image_url: userData?.offline_image_url || null
        };
      });
      
      return {
        ...streamsResponse,
        data: streamsWithUserData
      };
    }
    
    return streamsResponse;
  } catch (error) {
    console.log(error);
    return { data: [] };
  }
});