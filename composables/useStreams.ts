import type { Stream } from "@/types/stream";

export const useStreams = () => {
  const { data, pending, error, refresh } = useFetch<{ data: Stream[] }>(
    "/api/stream"
  );

  let interval: NodeJS.Timeout;
  onMounted(() => {
    interval = setInterval(() => {
      refresh();
    }, 30000);
  });

  onUnmounted(() => {
    clearInterval(interval);
  });

  return {
    stream: data.value?.data || [],
    loading: pending,
    error,
  };
};
