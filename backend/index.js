const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/ecommerce', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
});

const Product = mongoose.model('Product', productSchema);

app.get('/products', async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

app.post('/products', async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.json(newProduct);
});

app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.json({ message: 'Product deleted' });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
