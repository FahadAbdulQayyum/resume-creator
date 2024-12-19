import fs from 'fs';
import path from 'path';

export default function handler(req: any, res: any) {
    if (req.method === 'POST') {
        const data = req.body;

        // console.log('data...', data)

        // Define the file path
        // const filePath = path.join(process.cwd(), 'data.json');
        const filePath = path.join(process.cwd(), '/public/Data/data.json');
        // const filePath = path.join(process.cwd(), '../../Data/data.json');

        console.log('filePath...', filePath)

        try {
            // Write the data to data.json
            fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
            res.status(200).json({ message: 'Data written successfully!' });
        } catch (error) {
            res.status(500).json({ message: 'Failed to write data.', error });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
