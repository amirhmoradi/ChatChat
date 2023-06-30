import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        return res.status(200).json({ name: 'John Doe' });
    } else {
        return res.status(405).json({ error: 'Method not allowed' });
    }
}
