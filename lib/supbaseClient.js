import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_SUPABASE_ENDPOINT;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

export const supabaseClient = createClient('https://fvgexbvyzbrwwvywxfpq.supabase.co', supabaseAnonKey)