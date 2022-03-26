import React, { useState } from 'react';
import ShowOrder from '../ShowOrder/ShowOrder';
import './Order.css'

const Order = ({ cart,setCart }) => {
    // const [click, setClick] = useState([props.product]);
    // console.log(click);
    const [count, setCount] = useState(0);
    if (cart.length > 4) {
        setCart(0);
        break;
    }
    let name;
    let image;
    for (const product of cart) {
        console.log(product);
        name = product.name;
        image = product.picture;
    }
    return (
        <div>
            
            <div className="order-summary">
                <h1>Order Summary</h1>
                <h5>Selected Items: {cart.length}</h5>
                {
                cart.map(order =><ShowOrder key={order._id} order={order}></ShowOrder>)
                }
                <button>Choose 1 for me</button>
            </div>
            
            {/* <p>{name}</p>
            <img style={{ width: '100px' }} src={image} alt="" />
            <br /> */}
            
        </div>
    );
};

export default Order;