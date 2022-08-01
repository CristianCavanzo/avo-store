import DB from '../../../database/db';

const allAvos = async (req, res) => {
    const db = new DB();
    const avos = await db.getAll();
    const length = avos.length;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ data: length, avos }));
};

export default allAvos;
