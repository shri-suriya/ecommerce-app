import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000/products')
            .then(response => setProducts(response.data))
            .catch(error => console.error(error));
    }, []);

    const addProduct = () => {
        axios.post('http://localhost:5000/products', { name, price })
            .then(response => setProducts([...products, response.data]))
            .catch(error => console.error(error));
    };

    const deleteProduct = (id) => {
        axios.delete(`http://localhost:5000/products/${id}`)
            .then(() => setProducts(products.filter(product => product._id !== id)))
            .catch(error => console.error(error));
    };

    return (
        <div>
            <h2>Product List</h2>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
            <button onClick={addProduct}>Add Product</button>
            <ul>
                {products.map(product => (
                    <li key={product._id}>
                        {product.name} - ${product.price}
                        <button onClick={() => deleteProduct(product._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
