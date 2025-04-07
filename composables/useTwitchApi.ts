// composables/useTwitchApi.ts
import { TwitchAPI } from '@/server/services/twitchApi'

type TwitchEndpoint = 'streams' | 'users' | 'games/top';

export function useTwitchApi<T = any>(
  endpoint: TwitchEndpoint, // Ahora solo acepta 'streams', 'users' o 'games/top'
  params: Record<string, any> = {}
) {
  const api = new TwitchAPI()

  const data = ref<T | null>(null)
  const error = ref<Error | null>(null)
  const loading = ref(true)

  const fetchData = async () => {
    loading.value = true
    error.value = null
    try {
      const response = await api.fetch<T>(endpoint, params)
      data.value = response
    } catch (err) {
      error.value = err as Error
    } finally {
      loading.value = false
    }
  }

  onMounted(() => {
    fetchData()
  })

  return {
    data,
    error,
    loading,
    refresh: fetchData,
  }
}
