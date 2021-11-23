import Head from 'next/head'
import Image from 'next/image'
import { useAuth } from '../components/auth/AuthContext'
import { LoginForm } from '../components/auth/LoginForm'
import styles from '../styles/Home.module.scss'

const HomePage = () => {
	const { user, session } = useAuth()

	return (
		<div>
			<header>
				Authorization: {session?.token_type ?? 'Public'}
				<br />
				<LoginForm />
			</header>
		</div>
	)
}

export default HomePage
