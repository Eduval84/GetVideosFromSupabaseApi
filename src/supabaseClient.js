import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mfmnlqduugkcnngimlgg.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1mbW5scWR1dWdrY25uZ2ltbGdnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzU2MzYwNDksImV4cCI6MTk5MTIxMjA0OX0.vRDcpYwWLjgHv4ptS_gE1NZKUWP1_pBuLGT5wNAjhZk";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
