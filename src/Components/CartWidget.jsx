import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const {count} = useContext(CartContext)
        return (
        <div style={{marginRight:"100px"}}>
            <Link to="/cart">
            <FontAwesomeIcon style={{marginRight:"5px", height:"20px", color:"white"}} icon={faCartShopping} />
            <span style={{color:"white"}}>{count.qtyItems}</span>
            </Link>
        </div>
    );
}

export default CartWidget;