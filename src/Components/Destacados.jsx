import React from 'react'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'

const Destacados = () => {
  return (
    <div>
         <div style={{paddingTop:"140px"}}>
          <h1 className={styles.prodesctitle}>PRODUCTOS DESTACADOS</h1>
          <div className={styles.container}>
          <div className={styles.subcontainer1}>
            <Link to="/products/item/12">
              <h2>JUEGO ACAPULCO</h2>
              <p>Ver Detalle</p>
              <img src="https://imgur.com/GGk7GTx.png" alt="" />
              </Link>
          </div>
          <div className={styles.subcontainer2}>
          <div className={styles.subc21}>
          <div className={styles.subcc21}>
          <Link to="/products/item/4">
              <h2>JUEGO GERVASONI</h2>
              <p>Ver Detalle</p>
            <img src="https://i.imgur.com/XfjB1OB.jpg" alt="" />
            </Link>
          </div>
            <div className={styles.subcc22}>
            <Link to="/products/item/13">
              <h2>JUEGO CAPRI</h2>
              <p>Ver Detalle</p>
              <img src="https://i.imgur.com/78pq12K.jpg" alt="" />
            </Link>
            </div>
          </div>
          <div className={styles.subc22}>
          <div className={styles.subcc23}>
          <Link to="/products/item/5">
              <h2>JUEGO DOBLE</h2>
              <p>Ver Detalle</p>
            <img src="https://i.imgur.com/jVsMIQI.jpg" alt="" />
          </Link>
              
            </div>
            <div className={styles.subcc24}>
            <Link to="/products/item/11">
              <h2>JUEGO ASUNCION</h2>
              <p>Ver Detalle</p>
              <img src="https://i.imgur.com/ndeF0Z7.jpg" alt="" />
              </Link>
            </div>
          </div>
          </div>
          </div>
        
    </div>
    </div>
  )
}

export default Destacados