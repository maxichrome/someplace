import { NextApiHandler } from 'next'

const onPingRoute: NextApiHandler = (req, res) => {
	res.status(200).json({ success: true, ping: 'pong' })
}

export default onPingRoute
