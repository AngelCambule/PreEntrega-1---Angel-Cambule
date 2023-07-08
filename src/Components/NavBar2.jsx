import React from 'react'
import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget';



const NavBar2 = () => {
    
  return (
    <div>
        <div className={styles.navbar}>
        <div className={styles.navbarleft}>
            <Link style={{textDecoration:"none"}} to="/"><img class={styles.logoimg} src="https://i.imgur.com/oldlc1W.png" alt='XD'/></Link>
            <Link style={{textDecoration:"none"}} to="/"><div className={styles.btnsnav}>Home</div></Link>
            <Link style={{textDecoration:"none"}} to="/products"><div className={styles.btnsnavproduct}>Productos <FontAwesomeIcon icon={faBars} className={styles.i}/></div></Link>
            <div className={(styles.categorymenu)}>
            <div className={styles.categorymenutitle}>Categorias</div>
                <Link to="/products/category/jardin" style={{textDecoration:"none"}}><div className={styles.categorysubmenu}>Jardin</div></Link>
                <Link to="/products/category/interior" style={{textDecoration:"none"}}><div className={styles.categorysubmenu}>Interior</div></Link>
                <Link to="/products/category/mesa" style={{textDecoration:"none"}}><div className={styles.categorysubmenu}>Mesas</div></Link>
                <Link to="/products/category/combos" style={{textDecoration:"none"}}><div className={styles.categorysubmenu}>Combos</div></Link>
                <Link to="/products/category/unidad" style={{textDecoration:"none"}}><div className={styles.categorysubmenu}>Unidades</div></Link>
                <Link to="/products" style={{textDecoration:"none"}}><div className={styles.categorysubmenu}>Ver Todo</div></Link>
            </div>
            <Link style={{textDecoration:"none"}} to="/seguimiento"><div className={styles.btnsnav}>Seguimiento</div></Link>
        </div>
        <div className={styles.navbarcenter}>
        <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon}/>
            <input type="text" placeholder="Buscar"/>
        </div>
        <div className={styles.navbarright}>
            <Link style={{textDecoration:"none"}} to="/contacto"><div id="productos" className={styles.btnsnav}>Contacto</div></Link>
            <Link style={{textDecoration:"none"}} to="/reclamos"><div className={styles.btnsnav}>Reclamos</div></Link>
            <div className={(styles.btnsnav, styles.acc)}>
                <div className={styles.acctext}>Cuenta</div>
                <div className={styles.menu}>
                    <Link style={{textDecoration:"none"}} to="/help"><div className={styles.menu1}>AYUDA</div></Link>
                    <Link style={{textDecoration:"none"}} to="/register"><div className={styles.menu2}>CREAR CUENTA</div></Link>
                    <Link style={{textDecoration:"none"}} to="/login"><div className={styles.menu3}>INICIAR SESION</div></Link>
                </div>
            </div>
        <CartWidget />
        </div>
    </div>
    </div>
  )
}

export default NavBar2