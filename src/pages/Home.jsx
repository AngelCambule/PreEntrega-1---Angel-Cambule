import React from 'react'
import styles from '../Components/styles.module.css'
import Destacados from '../Components/Destacados'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast, faCreditCard, faScrewdriverWrench, faClock } from '@fortawesome/free-solid-svg-icons';


const home = () => {
  return (
    <div className={styles.body}>
        
    <Destacados/>
    <hr/>
    <div className={styles.infocontainer}>
      <div className={styles.infoc1}>
      <FontAwesomeIcon style={{fontSize:"40px", marginBottom:"20px"}} icon={faTruckFast} />
        <h2>Trabajamos con BUSPACK, VIA CARGO, MDCARGAS y mas!</h2>
        <p>Envios a todo el pais!</p>
      
      </div>
      <div className={styles.infoc2}>
      <FontAwesomeIcon style={{fontSize:"40px", marginBottom:"20px"}} icon={faCreditCard} />
        <h2>Pagos con tarjeta de credito <br/>(Hasta 6 cuotas sin interes!)<br/> A precio de lista</h2>
        <p>Pagos contraentrega SOLO EFECTIVO (CABA / GBA)</p>
      </div>
      <div className={styles.infoc3}>
      <FontAwesomeIcon style={{fontSize:"40px", marginBottom:"20px"}} icon={faScrewdriverWrench} />
        <h2>FABRICACION PROPIA!<br/>Tambien restauramos sillones del mismo estilo! (cableados)</h2>
        <p>Garantia de FABRICA 6 meses</p>
      </div>
      <div className={styles.infoc4}>
      <FontAwesomeIcon style={{fontSize:"40px", marginBottom:"20px"}} icon={faClock} />
        <h2>Demora minima de entrega: <br/>4/6 dias <br/>(Depende el modelo!)</h2>
        <p>Tambien contamos con stock de entrega inmediata (Consultar)</p>
      </div>
      
    </div>
    </div>
  )
}

export default home