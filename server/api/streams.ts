import axios from "axios";
import { getAppAccessToken } from "../services/twitch";

const getData = async () => {
  try {
    const token = await getAppAccessToken();
    const clientId = process.env.TWITCH_CLIENT_ID;

    const response = await axios.get(
      "https://api.twitch.tv/helix/streams?first=3",
      {
        headers: {
          "client-ID": clientId,
          authorization: ` Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};

console.log(getData);
