/// <reference types="node" />

// custom process.env types
declare namespace NodeJS {
	interface ProcessEnv extends NodeJS.ProcessEnv {
		NEXT_PUBLIC_SUPABASE_URL: string
		NEXT_PUBLIC_SUPABASE_ANONYMOUS_KEY: string
	}
}
