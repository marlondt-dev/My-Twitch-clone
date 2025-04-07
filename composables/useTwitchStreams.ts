// composables/useTwitchStreams.ts
import { TwitchAPI } from '@/server/services/twitchApi'
import type { Stream } from '@/types/stream'

export function useTwitchStreams(params = { first: 3, language: 'es' }) {
  const api = new TwitchAPI()

  const data = ref<Stream[]>([])
  const error = ref<Error | null>(null)
  const loading = ref(true)

  const loadStreams = async () => {
    loading.value = true
    error.value = null

    try {
      const response = await api.fetch<{ data: Stream[] }>('streams', params)
      data.value = response.data
    } catch (err) {
      error.value = err as Error
    } finally {
      loading.value = false
    }
  }

  onMounted(() => {
    loadStreams()
  })

  return {
    data,
    error,
    loading,
    refresh: loadStreams,
  }
}
