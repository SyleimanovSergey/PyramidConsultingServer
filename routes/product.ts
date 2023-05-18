import {Request, Response} from 'express';

const {Router} = require('express')
const Product = require('../schemas/product')

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    try {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        const products = await Product.find().exec();
        res.send(products);
    } catch (err) {
        console.error('Mistake when receiving products:', err);
        res.status(500).send('Server error');
    }
});

module.exports = router;