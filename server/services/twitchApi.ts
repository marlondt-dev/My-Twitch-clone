// twitchApi.ts
export class TwitchAPI {
  private clientId = process.env.TWITCH_CLIENT_ID!;
  private clientSecret = process.env.TWITCH_CLIENT_SECRET!;
  private token: { value: string | null; expiry: number | null } = { value: null, expiry: null };

  private async getToken() {
    if (this.token.value && this.token.expiry && Date.now() < this.token.expiry) {
      return this.token.value;
    }
    try {
      const res = await $fetch<{ access_token: string; expires_in: number }>(
        "https://id.twitch.tv/oauth2/token",
        {
          method: "POST",
          params: {
            client_id: this.clientId,
            client_secret: this.clientSecret,
            grant_type: "client_credentials",
          },
        }
      );
      this.token.value = res.access_token;
      this.token.expiry = Date.now() + res.expires_in * 1000;
      return res.access_token;
    } catch (error) {
      console.error("Error getting Twitch token:", error);
      throw error;
    }
  }

  public async fetch<T>(
    endpoint: string,
    params?: Record<string, any>
  ): Promise<T> {
    try {
      const token = await this.getToken();
      const url = `https://api.twitch.tv/helix/${endpoint}`;

      const res = await $fetch<T>(url, {
        params,
        headers: {
          "Client-ID": this.clientId,
          Authorization: `Bearer ${token}`,
        },
      });
      return res;
    } catch (error) {
      console.error(`Twitch API error (${endpoint}):`, error);
      throw error;
    }
  }
}