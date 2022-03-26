import React, { useEffect, useState } from 'react';
import Order from '../Order/Order';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [click, setClick] = useState([products]);
    console.log(click);
    useEffect(() => {
        fetch('products.json')
            .then(response => response.json())
        .then(data=>setProducts(data))
    }, [])
    
    const handleProducts = (products) => {
        const newCart = [...cart,products];
        setCart(newCart);
       
    }
    return (
        
        <div className="shop-container">
            <div className="product-container">
                {
                products.map(product => <Product
                    key={product._id}
                    product={product}
                    handleProducts={handleProducts}
                ></Product>)
            }
            </div>
            <div className="order-container">
                <Order  cart={cart}></Order>
            </div>
            
            
        </div>
    );
};

export default Shop;