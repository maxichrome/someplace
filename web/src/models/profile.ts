import { z } from 'zod'

export const Profile = z.object({
	id: z.string(),
	accountId: z.string(),
	firstName: z.string().min(2).max(32),
	lastName: z.string().min(2).max(32).optional(),
	nickname: z.string().optional(),
})
export const NewProfile = Profile.omit({ id: true, accountId: true }).and(
	z.object({
		otp: z.string().length(6),
	})
)

export type Profile = z.infer<typeof Profile>
export type NewProfile = z.infer<typeof NewProfile>
