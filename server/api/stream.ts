import { getAppAccessToken } from "../services/twitch";

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event);
    const first = parseInt(query.first as string) || 3;
    const after = query.after as string || ''; 

    const token = await getAppAccessToken();
    const clientId = process.env.TWITCH_CLIENT_ID;

    if (!clientId) throw new Error("TWITCH_CLIENT_ID no está definido");

    // Obtener streams
    const streamsResponse = await $fetch("https://api.twitch.tv/helix/streams", {
      method: "GET",
      headers: {
        "Client-ID": clientId,
        "Authorization": `Bearer ${token}`
      },
      query: {
        first,
        language: "es",
        after: after || undefined 
      }
    });

    const userIds = streamsResponse.data.map((stream) => stream.user_id);

    if (userIds.length > 0) {
      
      const usersResponse = await $fetch("https://api.twitch.tv/helix/users", {
        method: "GET",
        headers: {
          "Client-ID": clientId,
          "Authorization": `Bearer ${token}`
        },
        query: {
          id: userIds
        }
      });

     
      const streamsWithUserData = streamsResponse.data.map((stream) => {
        const userData = usersResponse.data.find((user) => user.id === stream.user_id);
        return {
          ...stream,
          profile_image_url: userData?.profile_image_url || null,
          offline_image_url: userData?.offline_image_url || null
        };
      });

      
      return {
        data: streamsWithUserData,
        pagination: streamsResponse.pagination || {}
      };
    }

    return { data: [], pagination: {} };
  } catch (error) {
    console.error(error);
    return { data: [], pagination: {} };
  }
});
