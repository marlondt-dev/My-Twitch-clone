
import { getAppAccessToken } from '../services/twitch' 

interface ApiResponse {
  status: 'success' | 'error'
  tokenPreview?: string
  message?: string
}

export default defineEventHandler(async (): Promise<ApiResponse> => {
  try {
    
    const token = await getAppAccessToken()
    
    // 2. Verificar que el token existe
    if (!token) {
      throw new Error('El token recibido está vacío')
    }

 
    return {
      status: 'success',
      tokenPreview: token.substring(0, 10) + '...' 
    }
    
  } catch (error: unknown) {
   
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido al obtener el token'
    
    console.error('Error en endpoint test-token:', error)
    
    return {
      status: 'error',
      message: errorMessage
    }
  }
})