// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://boznealtoagwlrrdbcuy.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJvem5lYWx0b2Fnd2xycmRiY3V5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk1MzgwNzAsImV4cCI6MjA2NTExNDA3MH0.7jMY0-CWogta-1mXyOlgjieLmd9UPE4lopX5kI0DIS0";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);