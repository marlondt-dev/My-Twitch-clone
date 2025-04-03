
import { useFetch } from "nuxt/app";
import type { Stream } from "@/types/stream";
import { computed, onMounted, onUnmounted } from "vue";

export const useStreams = (first = 3, after = '') => {
  const { data, pending, error, refresh } = useFetch<{ data: Stream[], pagination: { cursor?: string } }>(
    `/api/stream?first=${first}${after ? `&after=${after}` : ''}`
  );

  let interval: NodeJS.Timeout | null = null;

  onMounted(() => {
    interval = setInterval(() => {
      refresh();
    }, 30000);
  });

  onUnmounted(() => {
    if (interval) {
      clearInterval(interval);
    }
  });

  // Extraer el cursor para la siguiente página
  const cursor = computed(() => data.value?.pagination?.cursor || '');

  return {
    stream: data.value?.data || [],
    loading: pending,
    error,
    refresh,
    cursor // Retornamos el cursor para la paginación
  };
};
