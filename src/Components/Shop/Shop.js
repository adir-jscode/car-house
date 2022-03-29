import React, { useEffect, useState } from 'react';
import Order from '../Order/Order';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [count, setCount] = useState(0);
    for (const id of cart) {
        console.log(id._id);   
    }
   


    
    useEffect(() => {
        fetch('products.json')
            .then(response => response.json())
        .then(data=>setProducts(data))
    }, [])
    
    // function selectOne(item) {
    //     if (item in cart) {
    //         cart[item] = " ";
    //     }
    //     else {
    //         setCart([item])
    //     }
    // }
  
    const handleDelete = (item) => {
        console.log(item);
        const filterCar = cart.filter(car => car._id !== item._id);
        setCart(filterCar);
    }

    const handleProducts = (products) => {
        const newCart = [...cart, products];
        console.log(products);

        // Don't Show multiple products using map & find
        let exits = cart.find(cart => cart._id === products._id);
        if (exits) {
            alert('Please Select Another Car');
            return exits;
        }
        // console.log(cart._id);
        // let item = {}

        
        // Don't Show multiple products using basic loop

        // for (const cartId of cart) {
        //     if (cartId._id === products._id) {
        //         alert('Please Select Another Car');
        //         return cartId;
        //     }
        // }
        
        
        
        if (cart.length >= 4) {
            alert('You can select only 4 cars')
            setCount(0);
        }

        else {
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
                <Order setCart={setCart} handleDelete={handleDelete}  cart={cart}></Order>
            </div>
            
            
        </div>
    );
};

export default Shop;