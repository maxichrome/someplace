import { accountBase } from './account.mock'
import { Profile } from './profile'

export const userBase: Profile = {
	id: '123456789012',
	accountId: accountBase.id,
	firstName: 'John',
	lastName: 'Doe',
}

export const userWithNickname: Profile = {
	...userBase,
	nickname: 'Jonathan',
}
