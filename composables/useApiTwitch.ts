// composables/TwitchApi.ts
import { $fetch } from 'ofetch';

export class TwitchApi {
  private clientId: string;
  private clientSecret: string;
  private accessToken: string | null = null;

  constructor(clientId: string, clientSecret: string) {
    this.clientId = clientId;
    this.clientSecret = clientSecret;
  }

  private async getAccessToken(): Promise<string> {
    if (this.accessToken) {
      return this.accessToken;
    }

    const response = await $fetch<{ access_token: string }>(
      'https://id.twitch.tv/oauth2/token',
      {
        method: 'POST',
        params: {
          client_id: this.clientId,
          client_secret: this.clientSecret,
          grant_type: 'client_credentials',
        },
      }
    );

    this.accessToken = response.access_token;
    return this.accessToken;
  }

  async request<T>(url: string): Promise<T> {
    const accessToken = await this.getAccessToken();

    const response = await $fetch<T>(url, {
      headers: {
        'Client-ID': this.clientId,
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response;
  }
}