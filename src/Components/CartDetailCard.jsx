import React from "react";
import styles from "./styles.module.css";

export const CartDetailCard = ({ product, qty }) => {
  return (
    <div className={styles.cardsWrapper}>
      { (
        <div className={styles.itemWrapper}>
          <div>
            <img src={product.img} alt={product.nombre} />
          </div>
          <div className={styles.productInfo}>
            <h2>{product.nombre}</h2>
            <p>{product.medidas}</p>
            <p>Precio: ${product.precio}</p>
            <p>Cantidad: {qty.qty}</p>
          </div>
        </div>
      )}
    </div>
  );
};