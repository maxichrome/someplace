import * as React from 'react'
import { supabase } from '../../utils/supabase'

export const LoginForm: React.FC<{}> = (props) => {
	const [phone, setPhone] = React.useState<string>('')
	const [otp, setOtp] = React.useState<string>('')

	return (
		<form
			onSubmit={async (e) => {
				e.preventDefault()

				try {
					if (otp) {
						const { user, error, ...res } = await supabase.auth.verifyOTP({
							phone,
							token: otp,
						})

						console.log({ user, error, ...res })
					} else {
						const { user, error, ...res } = await supabase.auth.signIn({
							phone,
						})

						console.log({ user, error, ...res })
					}
				} catch (err) {
					console.error('could not sign in !', err)
				}
			}}
		>
			<input
				name="username"
				value={phone}
				placeholder="phone number"
				onChange={(e) => setPhone(e.target.value)}
			/>
			<input
				name="otp"
				placeholder="otp"
				value={otp}
				onChange={(e) => setOtp(e.target.value)}
			/>
			<button type="submit">log in</button>
		</form>
	)
}
