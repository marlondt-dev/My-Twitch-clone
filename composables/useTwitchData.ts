import { TwitchAPI } from '@/server/services/twitchApi';
import type { Stream } from '@/types/stream';

type Endpoint = 'streams' | 'games/top' | 'users';
type TwitchResponse<T> = { data: T[] };

const fetchStreamsWithProfiles = async (api: TwitchAPI, params: Record<string, any>) => {
  const streamsResult = await api.fetch<{ data: Stream[] }>('streams', params);
  if (!streamsResult.data || streamsResult.data.length === 0) return streamsResult;

  const userIds = streamsResult.data.map(stream => stream.user_id);
  const usersResult = await api.fetch<{ data: any[] }>('users', { id: userIds });

  if (usersResult.data) {
    streamsResult.data.forEach(stream => {
      const user = usersResult.data.find(u => u.id === stream.user_id);
      if (user) {
        stream.profile_image_url = user.profile_image_url;
        stream.offline_image_url = user.offline_image_url;
        stream.display_name = user.display_name;
        stream.description = user.description;
      }
    });
  }

  return streamsResult;
};

export const useTwitchData = <T, P extends Record<string, any> = { user_login?: string }>(
  endpoint: Endpoint,
  initialParams: P,
  options: {
    includeUserProfiles?: boolean;
    componentId?: string;
  } = {}
) => {
  const api = new TwitchAPI();
  const componentId = options.componentId || 'default';

  const params = reactive(initialParams) as P;
  (params as any).first ??= 6;

  const initialData = useState<TwitchResponse<T>>(
    `twitch-${endpoint}-${componentId}-initial`,
    () => ({ data: [] })
  );

  const key = computed(() =>
    `twitch-${endpoint}-${componentId}-${params.user_login || 'default'}`
  );

  const { data, error, pending, refresh } = useAsyncData<TwitchResponse<T>>(
    key.value, 
    async () => {
      try {
        const result = endpoint === 'streams' && options.includeUserProfiles
          ? await fetchStreamsWithProfiles(api, params)
          : await api.fetch<TwitchResponse<T>>(endpoint, params);

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
      dedupe: 'cancel',
    }
  );

  const safeRefresh = async () => {
    if (!pending.value) await refresh();
  };

  onMounted(safeRefresh);
  onActivated(safeRefresh);

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

  const items = computed(() => data.value?.data ?? []);

  return {
    data: items,
    error,
    pending,
    params,
    refresh: safeRefresh,
    startPeriodicRefresh,
    stopPeriodicRefresh,
  };
};
