// utils/TwitchAPI.js
export class TwitchAPI {
  constructor(clientId, accessToken) {
    this.clientId = clientId;
    this.accessToken = accessToken;
    this.baseUrl = "https://api.twitch.tv/helix"; // Twitch API base URL
  }

  // Fetch data from Twitch API
  async fetchEndpoint(endpoint, params = {}) {
    const url = new URL(`${this.baseUrl}/${endpoint}`);

    // Add query parameters to the URL
    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key])
    );

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Client-ID": this.clientId,
          Authorization: `Bearer ${this.accessToken}`,
        },
      });

      if (!response.ok) {
        throw new Error("Twitch API request failed");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data from Twitch API:", error);
      return null;
    }
  }

  // Function to get streams
  async getStreams(first = 3) {
    const params = {
      first: first, // Number of streams
    };
    return await this.fetchEndpoint("streams", params);
  }
}
