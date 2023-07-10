import React, { useState } from 'react'
import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget';
import Sidebar from './Sidebar';



const NavBar2 = () => {
    const [showSidebar, setShowSidebar] = useState(false)

    const handleSidebar = () => {
            setShowSidebar(!showSidebar)
    }

  return (
    <div>
        {showSidebar ? <Sidebar/> : null}
        <div className={styles.navbar}>
        <div className={styles.navbarleft}>
            <Link style={{textDecoration:"none"}} to="/"><img class={styles.logoimg} src="https://i.imgur.com/oldlc1W.png" alt='XD'/></Link>
            <Link style={{textDecoration:"none"}} to="/"><div className={styles.btnsnav}>Home</div></Link>
            <Link style={{textDecoration:"none"}} onClick={handleSidebar}><div className={styles.btnsnavproduct}>Productos <FontAwesomeIcon icon={faBars} className={styles.i}/></div></Link>
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
        <Sidebar/>
    </div>

    </div>
  )
}

export default NavBar2