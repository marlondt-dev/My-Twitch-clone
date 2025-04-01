import { useFetch } from "nuxt/app";

export const useStreams = () => {
  const { data, pending, error } = useFetch("/api/stream");
  return {
    stream: data,
    loading: pending,
    error,
  };
};
