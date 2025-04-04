export class TwitchAPI {
    private baseUrl: string;
    private token: string;
    private clientId: string;
  
    constructor(token: string, clientId: string) {
      this.baseUrl = "https://api.twitch.tv/helix";
      this.token = token;
      this.clientId = clientId;
    }
  
    async fetchData<T>(endpoint: string): Promise<T> {
      try {
        const response = await fetch(`${this.baseUrl}/${endpoint}`, {
          headers: {
            "Client-ID": this.clientId,
            Authorization: `Bearer ${this.token}`,
          },
        });
        if (!response.ok) throw new Error("Error fetching data");
        return await response.json();
      } catch (error) {
        console.error("Error:", error);
        return {} as T;
      }
    }
  }
  