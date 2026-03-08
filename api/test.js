export default function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json({ 
        message: 'API is working!',
        timestamp: new Date().toISOString(),
        database: process.env.DATABASE_URL ? 'Connected' : 'No DB URL'
    });
}
