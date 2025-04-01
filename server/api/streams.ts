import axios from "axios";
import { getAppAccessToken } from "../services/twitch";

export const getData = async () => {
  try {
    const token = await getAppAccessToken();
    const clientId = process.env.TWITCH_CLIENT_ID;

    const response = await axios.get(
      "https://api.twitch.tv/helix/streams?first=3",
      {
        headers: {
          "Client-ID": clientId,
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};
