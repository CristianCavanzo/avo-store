import Database from '../../../database/db';

const avo = async ({ query: { avo: avoQuery } }, res) => {
    const db = new Database();
    console.log(avoQuery);
    const avo = await db.getById(avoQuery);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(avo));
};

export default avo;
