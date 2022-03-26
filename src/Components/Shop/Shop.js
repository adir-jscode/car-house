import React, { useEffect, useState } from 'react';
import Order from '../Order/Order';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [count, setCount] = useState(0);


    
    useEffect(() => {
        fetch('products.json')
            .then(response => response.json())
        .then(data=>setProducts(data))
    }, [])
    
    function findProducts(cart) {
        const duplicate = [];
    for (var i = 0; i < cart.length; i++) {
        const element = cart[i];
        if (duplicate.indexOf(element) == -1) {
            duplicate.push(element);
        }
    }
    return duplicate;
    }

    const result = findProducts(cart);
    console.log(result);

    const handleProducts = (products) => {
        const newCart = [...cart, products];
        if (cart.length >= 4) {
            alert('You can select only 4 cars')
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
                    findProducts={findProducts}
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