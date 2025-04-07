// useTwitchData.ts
import { TwitchAPI } from '@/server/services/twitchApi';
import type { Stream } from '@/types/stream';

type Endpoint = 'streams' | 'games/top' | 'users';
type TwitchResponse<T> = { data: T[] };

const fetchStreamsWithProfiles = async (api: TwitchAPI, params: Record<string, any>) => {
  try {
    const streamsResult = await api.fetch<{ data: Stream[] }>('streams', params);
    if (!streamsResult.data || streamsResult.data.length === 0) {
      return streamsResult;
    }
    const userIds = streamsResult.data.map(stream => stream.user_id);
    const usersResult = await api.fetch<{ data: any[] }>('users', { id: userIds });
    if (usersResult.data) {
      streamsResult.data.forEach(stream => {
        const user = usersResult.data.find(u => u.id === stream.user_id);
        if (user) {
          stream.profile_image_url = user.profile_image_url;
          stream.offline_image_url = user.offline_image_url;
        }
      });
    }
    return streamsResult;
  } catch (error) {
    console.error('Error fetching streams with profiles:', error);
    throw error;
  }
};

export const useTwitchData = <T>(
  endpoint: Endpoint,
  initialParams: Record<string, any> = {},
  options: {
    includeUserProfiles?: boolean;
    componentId?: string;
  } = {}
) => {
  const api = new TwitchAPI();
  const componentId = options.componentId || 'default';

  const params = reactive({
    first: 6,
    ...initialParams,
  });

  const initialData = useState<TwitchResponse<T>>(`twitch-${endpoint}-${componentId}-initial`, () => ({ data: [] }));

  const baseKey = `twitch-${endpoint}-${componentId}`;

  const { data, error, pending, refresh } = useAsyncData<TwitchResponse<T>>(
    baseKey,
    async () => {
      try {
        let result;
        if (endpoint === 'streams' && options.includeUserProfiles) {
          result = await fetchStreamsWithProfiles(api, params);
        } else {
          result = await api.fetch<TwitchResponse<T>>(endpoint, params);
        }
        initialData.value = result as TwitchResponse<T>;
        return result as TwitchResponse<T>;
      } catch (err) {
        console.error(`Error fetching from ${endpoint}:`, err);
        return initialData.value;
      }
    },
    {
      server: true,
      lazy: false,
      default: () => initialData.value,
      watch: [() => JSON.stringify(params)],
      dedupe: 'cancel',
    }
  );

  const safeRefresh = async () => {
    if (!pending.value) {
      await refresh();
    }
  };

  onMounted(safeRefresh);
  onActivated(safeRefresh);

  const route = useRoute();
  watch(() => route.fullPath, () => {
    safeRefresh();
  }, { immediate: false });

  const refreshInterval = ref<number | null>(null);

  const startPeriodicRefresh = (intervalMs = 60000) => {
    stopPeriodicRefresh();
    refreshInterval.value = window.setInterval(safeRefresh, intervalMs);
  };

  const stopPeriodicRefresh = () => {
    if (refreshInterval.value !== null) {
      clearInterval(refreshInterval.value);
      refreshInterval.value = null;
    }
  };

  onUnmounted(stopPeriodicRefresh);

  const items = computed(() => {
    if (data.value && 'data' in data.value) {
      return data.value.data;
    }
    return [];
  });

  return {
    data: items,
    error,
    pending,
    params,
    refresh: safeRefresh,
    startPeriodicRefresh,
    stopPeriodicRefresh
  };
};