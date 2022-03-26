import React, { useState } from 'react';
import ShowOrder from '../ShowOrder/ShowOrder';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck,faArrowRotateRight} from '@fortawesome/free-solid-svg-icons'
import './Order.css'

const Order = ({ cart,setCart }) => {
    // const [count, setCount] = useState(0);
    // if (cart.length > 4) {
    //     setCount(0);
    // }
    // console.log(cart[0]);
    // const random = Math.random(cart[]);
    // console.log(random);
    
    const random = cart[Math.floor(Math.random() * cart.length)];
    console.log(random);
    // const productRandom = []
    
    function randomElement() {
        console.log(random,'click');
        // const randomElement = cart[Math.floor(Math.random() * cart.length)];
        // const select =productRandom.push(random)
        setCart([random]);
    }
    function chooseAgain() {
        setCart([]);
    }
    return (
        <div>
            
            <div className="order-summary">
                <h1>Order Summary</h1>
                <h5>Selected Items: {cart.length}</h5>
                {
                cart.map(order =><ShowOrder key={order._id} order={order}></ShowOrder>)
                }

                <button onClick={randomElement} className="choose-btn">
                    <p>Choose 1 for me </p>
                    
                    <FontAwesomeIcon style={{marginLeft:'10px'}} icon={faCheck}></FontAwesomeIcon>
                
                </button>
                 <button onClick={chooseAgain} className="choose-again">
                    <p>Choose Again </p>
                    
                    <FontAwesomeIcon style={{marginLeft:'10px'}} icon={faArrowRotateRight}></FontAwesomeIcon>
                
                </button>
            </div>
            
            {/* <p>{name}</p>
            <img style={{ width: '100px' }} src={image} alt="" />
            <br /> */}
            
        </div>
    );
};

export default Order;