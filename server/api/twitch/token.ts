// server/api/twitch/token.ts
export default defineEventHandler(async (_event) => {
    const config = useRuntimeConfig();
    
    if (!config.TWITCH_CLIENT_SECRET || !config.public.TWITCH_CLIENT_ID) {
      throw createError({
        statusCode: 500,
        statusMessage: 'Server configuration error: Missing Twitch credentials',
      });
    }
  
    try {
      
      const params = new URLSearchParams();
params.append('client_id', String(config.public.TWITCH_CLIENT_ID));
params.append('client_secret', String(config.TWITCH_CLIENT_SECRET));
params.append('grant_type', 'client_credentials');
      
    
      const response = await fetch('https://id.twitch.tv/oauth2/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params,
      });
      
     
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Twitch token error:', errorText);
        
        throw createError({
          statusCode: response.status,
          statusMessage: `Twitch API error: ${response.statusText}`,
          data: errorText
        });
      }
      
      
      const tokenData = await response.json();
      return tokenData;
    } catch (error) {
      console.error('Error getting Twitch token:', error);
      
      throw createError({
        statusCode: 500,
        statusMessage: 'Failed to obtain Twitch token',
        data: error
      });
    }
  });