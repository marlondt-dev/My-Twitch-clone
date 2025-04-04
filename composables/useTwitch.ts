import { TwitchAPI } from "~/utils/twitchApi";
import { getAppAccessToken } from "@/server/services/twitch";

export const useTwitch = async () => {
  const token = await getAppAccessToken();
  const config = useRuntimeConfig();
  const twitchAPI = new TwitchAPI(token, config.public.twitchClientId);

  return { twitchAPI };
};
