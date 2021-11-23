import { z } from 'zod'

export const Account = z.object({
	id: z.string(),
	phone: z.string(),
})
export const NewAccount = Account.pick({ phone: true }).and(
	z.object({
		password: z.string(),
	})
)

export type Account = z.infer<typeof Account>
export type NewAccount = z.infer<typeof NewAccount>
