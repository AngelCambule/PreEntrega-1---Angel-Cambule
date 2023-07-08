import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../Context/CartContext';

const CartWidget = () => {
    const state = useContext(CartContext)
        return (
        <div style={{marginRight:"100px"}}>
            <FontAwesomeIcon style={{marginRight:"5px", height:"20px", color:"white"}} icon={faCartShopping} />
            <span style={{color:"white"}}>{state}</span>
        </div>
    );
}

export default CartWidget;