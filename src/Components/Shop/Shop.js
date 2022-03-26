import React, { useEffect, useState } from 'react';
import Order from '../Order/Order';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [count,setCount] = useState(0);
    useEffect(() => {
        fetch('products.json')
            .then(response => response.json())
        .then(data=>setProducts(data))
    }, [])
    
    const handleProducts = (products) => {
        const newCart = [...cart, products];
        if (cart.length >= 4) {
            setCount(0);
        }
        else{
            setCart(newCart);
        }
        
       
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
                <Order setCart={setCart}  cart={cart}></Order>
            </div>
            
            
        </div>
    );
};

export default Shop;