import * as React from 'react'
import { AppProps } from 'next/app'
import { AuthContext } from '../components/auth/AuthContext'
import '../styles/globals.scss'
import { supabase } from '../utils/supabase'
import { AuthChangeEvent, Session } from '@supabase/gotrue-js'

const MyApp: React.FC<AppProps> = (props) => {
	const { Component, pageProps } = props

	const [user, setUser] = React.useState(supabase.auth.user())
	const [session, setSession] = React.useState(supabase.auth.session())
	const authStateListener = React.useCallback(
		(event: AuthChangeEvent, session: Session | null) => {
			if (!session) {
				setUser(null)
				setSession(null)
				return
			}

			setSession(supabase.auth.session())
			setUser(supabase.auth.user())
		},
		[]
	)

	React.useEffect(() => {
		if (!session?.access_token)
			return void window.localStorage.removeItem('token')

		window.localStorage.setItem('token', session.access_token)
	}, [session])

	React.useEffect(() => {
		supabase.auth.onAuthStateChange(authStateListener)
	}, [authStateListener])

	return (
		<AuthContext.Provider
			value={{ user: user ?? undefined, session: session ?? undefined }}
		>
			<Component {...pageProps} />
		</AuthContext.Provider>
	)
}

export default MyApp
