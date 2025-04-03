import { useFetch } from "nuxt/app";
import type { Stream } from "@/types/stream";
import { onMounted, onUnmounted } from "vue";

export const useStreams = () => {

  const { data, error, refresh } = useFetch<{ data: Stream[] }>("/api/stream");
  
  let interval: NodeJS.Timeout;
  
  onMounted(() => {
    interval = setInterval(() => {
      refresh();
    }, 30000); // Refresca cada 30 segundos
  });
  
  onUnmounted(() => {
    clearInterval(interval);
  });
  
  return {
    stream: data.value?.data || [],
    loading: !data.value && !error.value,
    error,
  };
};