import React from 'react';
import './ShowOrder.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons'

const ShowOrder = (props) => {
    const { _id,picture, balance, name } = props.order;
    const { handleDelete } = props;
    return (
        <div className="show-order-container">
             <div className="show-order-img">

                <img style={{ width: '120px', borderRadius: '10px' }} src={picture} alt="" />
                
            </div>
            
            <div className="show-order-info">
                <div>
                    <h4>{ name}</h4>
                    <p>{balance}</p>
                    <button onClick={() =>handleDelete(props.order)}>Delete</button>
                </div>
                
                
                 
            </div>
        </div>
       
            
        
    );
};

export default ShowOrder;