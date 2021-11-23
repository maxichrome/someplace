import { Account } from './account'

export const accountBase: Account = {
	id: '123456789012',
	phone: '+15558882222',
}

export const accountWithEmpire: Account = {
	...accountBase,
	phone: '+18005882300', // iykyk
}
