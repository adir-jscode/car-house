import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    // const [click, setClick] = useState([props.product]);
    // console.log(click);
    const { name, picture, balance } = props.product;
    const { handleProducts } = props;
    return (
        <div className="product">
            <img style={{ width: '300px',height: '300px'}} src={picture} alt="" />
            <h2>{name}</h2>
            <p>price: {balance}</p>
            
            
            <button style={{ textAlign: 'center'}}onClick={() => handleProducts(props.product) } className="cart-btn">
                <p>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart} ></FontAwesomeIcon>
            
            </button>
        </div>
    );
};

export default Product;