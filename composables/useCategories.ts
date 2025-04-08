import type { Category } from "~/types/categoryCard";

export const useCategories = () => {
  const { data, pending, error, refresh } = useFetch<{ data: Category[] }>(
    "/api/categories"
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
    categories: data.value?.data || [],
    loading: pending,
    error,
  };
};
