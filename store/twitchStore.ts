// store/twitchStore.ts
import { defineStore } from 'pinia'
import { TwitchAPI } from '@/server/services/twitchApi'
import type { Stream } from '@/types/stream'

export const useTwitchStore = defineStore('twitch', {
  state: () => ({
    streams: [] as Stream[],
    loading: false,
    error: null as Error | null,
  }),
  actions: {
    async fetchStreams() {
      this.loading = true
      const api = new TwitchAPI()
      try {
        const response = await api.fetch<{ data: Stream[] }>('streams', { first: 3, language: 'es' })
        this.streams = response.data
        this.error = null
      } catch (err) {
        this.error = err as Error
      } finally {
        this.loading = false
      }
    },
  },
})
