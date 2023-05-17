import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://xqazmuzrpdimzoxsqsgw.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhxYXptdXpycGRpbXpveHNxc2d3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQyNDQ4NTQsImV4cCI6MTk5OTgyMDg1NH0.yN2dgbNXdTegJkxnUnKqvmae4l4AQmRYwbUNTzt4k-A"
);
