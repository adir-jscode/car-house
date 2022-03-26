import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(response => response.json())
        .then(data=>setProducts(data))
    },[])
    return (
        
        <div className="shop-container">
            <div className="product-container">
                {
                products.map(product => <Product
                    key={product._id}
                    product={product}
                
                ></Product>)
            }
            </div>
            <div className="order-container">
                <h1>Orde</h1>
            </div>
            
            
        </div>
    );
};

export default Shop;