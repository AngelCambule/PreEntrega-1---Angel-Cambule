import React from 'react'
import styles from './styles.module.css'

const CartDetail = ({ product, qty }) => {
  return (
    <div className={styles.cartItem} style={{marginTop:"50px"}}>
      <img src={product.img} alt={product.nombre} className={styles.productImage} />
      <div className={styles.productDetails}>
        <h3 className={styles.productName}>{product.nombre}</h3>
        <p className={styles.productPrice}>${product.precio}</p>
        <p className={styles.productQuantity}>Cantidad: {qty.qty}</p>
      </div>
    </div>
  )
}

export default CartDetail