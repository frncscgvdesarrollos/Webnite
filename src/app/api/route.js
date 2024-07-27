import { messageSender } from './firebase';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;
        try {
            await messageSender({ name, email, message });
            res.status(200).json({ success: true });
        } catch (error) {
            console.error('Error sending message:', error);
            res.status(500).json({ error: 'Failed to send message' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
