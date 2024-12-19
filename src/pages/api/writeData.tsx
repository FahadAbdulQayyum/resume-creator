import fs from 'fs';
import path from 'path';

export default function handler(req: any, res: any) {
    // Define the path to the data.json file
    const filePath = path.join(process.cwd(), 'public', 'Data', 'data.json');
    console.log('....*****')
    if (req.method === 'GET') {
        // Handle GET request to retrieve data from data.json
        try {
            const fileData = fs.readFileSync(filePath, 'utf-8');
            const jsonData = JSON.parse(fileData);
            res.status(200).json(jsonData);
        } catch (error) {
            res.status(500).json({ message: 'Failed to read data.', error });
        }
    } else if (req.method === 'POST') {
        // Handle POST request to update data in data.json
        try {
            let arr = [];
            const fileData = fs.readFileSync(filePath, 'utf-8');
            console.log('fileData!....', fileData)
            const jsonData = JSON.parse(fileData);

            // Merge existing data with incoming data
            // const updatedData = [{ ...jsonData, ...req.body }];
            const updatedData = { ...jsonData, ...req.body };
            // const updatedData = [...jsonData, ...req.body]
            console.log('updateData...', updatedData)
            arr.push(updatedData)
            // Write the updated data back to data.json
            // fs.writeFileSync(filePath, JSON.stringify(updatedData), 'utf-8');
            fs.writeFileSync(filePath, JSON.stringify(arr, null, 2), 'utf-8');
            // fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 2), 'utf-8');
            res.status(200).json({ message: 'Data updated successfully!', updatedData });
        } catch (error) {
            res.status(500).json({ message: 'Failed to update data.', error });
        }
    } else {
        // Return 405 for methods other than GET and POST
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
