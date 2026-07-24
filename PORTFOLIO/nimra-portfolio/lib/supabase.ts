import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

// Used for reading public data (projects) from client or server components.
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  github_url: string | null;
  demo_url: string | null;
  image_url: string | null;
  featured: boolean;
  sort_order: number;
  created_at: string;
};
