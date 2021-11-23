import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
	process.env.NEXT_PUBLIC_SUPABASE_URL,
	process.env.NEXT_PUBLIC_SUPABASE_ANONYMOUS_KEY,
	{} // supabase client options
)
// TODO: remove -- for debugging
// @ts-expect-error
globalThis.supabase = supabase
