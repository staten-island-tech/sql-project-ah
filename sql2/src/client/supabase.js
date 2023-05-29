import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://flibcfehjdwznhdvkgsj.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsaWJjZmVoamR3em5oZHZrZ3NqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODUzODg2MzAsImV4cCI6MjAwMDk2NDYzMH0.kVKSHQysxYUa7gYyMY2ajlTW1uBA_VBPJvfpvs0qITQ'
const supabase = createClient(supabaseUrl, supabaseKey)

export { supabase }
