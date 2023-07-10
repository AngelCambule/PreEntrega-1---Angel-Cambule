import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'

const Sidebar = () => {
    
    const [showSidebar, setShowSidebar] = useState(true)

    const handleSidebar = () => {
        setShowSidebar(!showSidebar)
    }
    
    
    
  return (
    <div>
        {showSidebar && (<div className={(styles.categorymenu)}>
            <div className={styles.categorymenutitle}>Categorias</div>
                <Link to="/products/category/jardin" style={{textDecoration:"none"}}><div className={styles.categorysubmenu}>Jardin</div></Link>
                <Link to="/products/category/interior" style={{textDecoration:"none"}}><div className={styles.categorysubmenu}>Interior</div></Link>
                <Link to="/products/category/mesa" style={{textDecoration:"none"}}><div className={styles.categorysubmenu}>Mesas</div></Link>
                <Link to="/products/category/combos" style={{textDecoration:"none"}}><div className={styles.categorysubmenu}>Combos</div></Link>
                <Link to="/products/category/unidad" style={{textDecoration:"none"}}><div className={styles.categorysubmenu}>Unidades</div></Link>
                <Link to="/products" style={{textDecoration:"none"}}><div className={styles.categorysubmenu}>Ver Todo</div></Link>
                <div className={styles.categoryclose} onClick={handleSidebar}>Cerrar</div>
        </div>)}
         
    </div>
  )
}

export default Sidebar