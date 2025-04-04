import type { Stream } from "@/types/stream";

export const useStreams = (endpointPart: string = "") => {
  const endpoint = endpointPart.startsWith("/")
    ? endpointPart.substring(1)
    : endpointPart;

  const { data, pending, error, refresh } = useFetch<{ data: Stream[] }>(
    `/api/stream/${endpoint}`
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
