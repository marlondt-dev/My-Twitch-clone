// composables/useTwitchAPI.ts

interface TwitchAuthResponse {
  access_token: string;
  expires_in: number;
  token_type: string;
}

export class TwitchAPI {
  private clientId: string;
  private clientSecret: string;
  private accessToken: string | null = null;
  private tokenExpiry: number = 0;

  constructor() {
    this.clientId = process.env.TWITCH_CLIENT_ID || '';
    this.clientSecret = process.env.TWITCH_CLIENT_SECRET || '';
    
    if (!this.clientId || !this.clientSecret) {
      console.error('Twitch client ID or secret missing from environment variables');
    }
  }

  /**
   * Obtiene o renueva el token de acceso de Twitch
   */
  private async getAccessToken(): Promise<string> {
    // Si ya tenemos un token válido, lo devolvemos
    const now = Date.now();
    if (this.accessToken && now < this.tokenExpiry) {
      return this.accessToken;
    }

    try {
      const response = await fetch(`https://id.twitch.tv/oauth2/token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          client_id: this.clientId,
          client_secret: this.clientSecret,
          grant_type: 'client_credentials',
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to get Twitch token: ${response.statusText}`);
      }

      const data = await response.json() as TwitchAuthResponse;
      this.accessToken = data.access_token;
      // Establecer la expiración un poco antes para asegurar la renovación
      this.tokenExpiry = now + (data.expires_in * 1000) - 60000;
      
      return this.accessToken;
    } catch (error) {
      console.error('Error getting Twitch access token:', error);
      throw error;
    }
  }

  /**
   * Realiza una petición a la API de Twitch
   * @param endpoint - El endpoint de la API (sin la URL base)
   * @param params - Parámetros de consulta opcionales
   */
  public async fetchData<T>(endpoint: string, params: Record<string, string> = {}): Promise<T> {
    try {
      const token = await this.getAccessToken();
      
      // Construir la URL con los parámetros
      const url = new URL(`https://api.twitch.tv/helix/${endpoint}`);
      Object.entries(params).forEach(([key, value]) => {
        url.searchParams.append(key, value);
      });

      const response = await fetch(url.toString(), {
        method: 'GET',
        headers: {
          'Client-ID': this.clientId,
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.statusText}`);
      }

      return await response.json() as T;
    } catch (error) {
      console.error(`Error fetching from Twitch API (${endpoint}):`, error);
      throw error;
    }
  }
}

// Composable para usar la API de Twitch
export function useTwitchAPI() {
  return new TwitchAPI();
}