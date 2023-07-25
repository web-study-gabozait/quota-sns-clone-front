export interface User {
  email: string;
  name: string;
  profile_image_url: string | null;
  login_count: number;
  last_login_at: string;
  create_at: string;
}
