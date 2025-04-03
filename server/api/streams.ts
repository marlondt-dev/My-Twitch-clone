import { getAppAccessToken } from "@/server/services/twitch";
export class GetApi {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  }

  async getData(endpoint = null, params = {}) {
    const token = await getAppAccessToken();
    const clientId = process.env.TWITCH_CLIENT_ID;
    const apiEndpoint = `this.apiUrl/${endpoint}?first=${params}`;

    try {
      const response = await $fetch(apiEndpoint, {
        method: "GET",
        headers: {
          "Client-ID": clientId,
          Authorization: `Bearer ${token}`,
        },
      });

      return response;
    } catch (error) {
      console.log(error);
    }
  }
}
