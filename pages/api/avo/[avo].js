import Database from '../../../database/db';

const avo = async ({ query: { avo: avoQuery } }, res) => {
    try {
        const db = new Database();
        const avo = await db.getById(avoQuery);

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json({ avo });
    } catch (error) {
        res.status(500).json({ error: 'failed to load data' });
    }
};

export default avo;
