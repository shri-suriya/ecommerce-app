const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

const Product = mongoose.model('Product', new mongoose.Schema({ name: String, price: Number }));

app.get('/products', async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

describe('GET /products', () => {
    it('should return all products', async () => {
        const res = await request(app).get('/products');
        expect(res.status).toBe(200);
        expect(res.body.length).toBeGreaterThanOrEqual(0);
    });
});

beforeAll(async () => {
    await mongoose.connect('mongodb://localhost:27017/ecommerce', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
});

afterAll(async () => {
    await mongoose.connection.close();
});

