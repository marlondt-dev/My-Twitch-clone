// server/api/test-token.get.ts
import { getAppAccessToken } from '../services/twitch' // Corregida la ruta de importación

interface ApiResponse {
  status: 'success' | 'error'
  tokenPreview?: string
  message?: string
}

export default defineEventHandler(async (): Promise<ApiResponse> => {
  try {
    // 1. Obtener token
    const token = await getAppAccessToken()
    
    // 2. Verificar que el token existe
    if (!token) {
      throw new Error('El token recibido está vacío')
    }

    // 3. Retornar respuesta exitosa
    return {
      status: 'success',
      tokenPreview: token.substring(0, 10) + '...' // Mostramos solo parte del token
    }
    
  } catch (error: unknown) {
    // 4. Manejo seguro de errores con TypeScript
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido al obtener el token'
    
    console.error('Error en endpoint test-token:', error)
    
    return {
      status: 'error',
      message: errorMessage
    }
  }
})