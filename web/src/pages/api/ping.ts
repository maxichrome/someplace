import { NextApiHandler } from 'next'

const onPingRoute: NextApiHandler = (req, res) => {
	if (req.method !== 'GET') return res.status(404).end()

	res.status(200).json({ success: true, ping: 'pong' })
}

export default onPingRoute
