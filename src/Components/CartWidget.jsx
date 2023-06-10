import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
    
    return (
        <div style={{marginRight:"100px"}}>
            <FontAwesomeIcon style={{marginRight:"5px", height:"20px"}} icon={faCartShopping} />
            <span>0</span>
        </div>
    );
}

export default CartWidget;