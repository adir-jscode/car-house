import React from 'react';
import './ShowOrder.css'

const ShowOrder = (props) => {
    const {picture,balance,name} = props.order;
    console.log(props)
    return (
        <div>
            <img style={{ width: '100px', borderRadius: '10px' }} src={picture} alt="" />
            <div>
                <h4>{ name}</h4>
               <p>{balance}</p>
            </div>
            
        </div>
    );
};

export default ShowOrder;