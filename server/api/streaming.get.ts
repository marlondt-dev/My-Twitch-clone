// server/api/twitch.get.ts (renombrar de streaming.get.ts)
import { TwitchAPI } from "~/server/services/twitchApi";

// server/api/categories.get.ts
export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event);
    console.log("Categories query:", query);
    
    const queryString = new URLSearchParams(query as Record<string, string>).toString();
    console.log("Categories queryString:", queryString);

    const twitch = new TwitchAPI();
    const data = await twitch.fetchFromTwitch(`/games/top?${queryString}`);
    console.log("Categories response structure:", Object.keys(data));
    
    return data;
  } catch (error) {
    console.error("Categories error:", error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Error fetching categories from Twitch',
      data: error
    });
  }
});