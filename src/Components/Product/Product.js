import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name,picture,balance } = props.product;
    return (
        <div className="product">
            <img style={{ width: '250px' }} src={picture} alt="" />
            <h2>{name}</h2>
            <p>price: { balance }</p>
        </div>
    );
};

export default Product;