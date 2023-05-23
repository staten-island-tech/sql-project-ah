import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ktpuaccotkmpjxwcahjs.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt0cHVhY2NvdGttcGp4d2NhaGpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM2Mzk4NDIsImV4cCI6MTk5OTIxNTg0Mn0.PN1mALBfVGmTwyQaBVLzVSaP2w9p-7XPcC2Cvs9RGDw";
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };
