// import { useFetch } from "nuxt/app";
// import { useRuntimeConfig } from "#imports";

// export const useUser = (userLogin: string) => {
//   const config = useRuntimeConfig();

//   const { data, pending, error } = useFetch(
//     `https://api.twitch.tv/helix/users?login=${userLogin}`,
//     {
//       headers: {
//         "Client-ID": config.public.twitchClientId,
//         Authorization: `Bearer ${config.public.twitchAccessToken}`,
//       },
//     }
//   );

//   return {
//     user: data,
//     loading: pending,
//     error,
//   };
// };
