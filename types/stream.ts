export type Stream = {
  id: string;
  user_id: string;
  user_login: string;
  user_name: string;
  title: string;
  game_name: string;
  thumbnail_url: string;
  viewer_count: number;
  profile_image_url?: string;
  offline_image_url?: string;
  tags: string[];
  display_name: string;
  description: string;
  view_count: number;
};
