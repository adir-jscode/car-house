import React, { useState } from 'react';
import ShowOrder from '../ShowOrder/ShowOrder';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck,faArrowRotateRight} from '@fortawesome/free-solid-svg-icons'
import './Order.css'

const Order = ({ cart,setCart }) => {
    const random = cart[Math.floor(Math.random() * cart.length)];
    

    
    function randomElement() {
        if (random) {
         setCart([random]);    
        }
        else {
            setCart([]);
        }
        
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
                    <p>Choose One</p>
                    
                    <FontAwesomeIcon style={{marginLeft:'10px'}} icon={faCheck}></FontAwesomeIcon>
                
                </button>
                 <button onClick={chooseAgain} className="choose-again">
                    <p>Choose Again </p>
                    
                    <FontAwesomeIcon style={{marginLeft:'10px'}} icon={faArrowRotateRight}></FontAwesomeIcon>
                
                </button>
            </div>
            
            
        </div>
    );
};

export default Order;