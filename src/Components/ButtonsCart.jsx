import React, {useContext, useState} from 'react'
import { CartContext } from '../Context/CartContext'

const ButtonsCart = () => {
    const [state, setState] = useContext(CartContext)
    const [count, setCount] = useState(1)

    const handleAddClick = () => {
        setCount(count + 1)
    }
    const handleLessClick = () => {
        if (count > 1){
            setCount(count - 1)
        }
    }
    const handleAddtoCart = () => {
        setState(state + count)
    }

  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:"20px"}}>
        <div style={{display:"flex", gap:"10px", marginBottom:"10px"}}>
            <button onClick={handleLessClick} style={{padding:"0px 6px"}}>-</button>
            <span>{count}</span>
            <button onClick={handleAddClick} style={{padding:"0px 5px"}}>+</button>
            </div>
        <div style={{display:"flex"}}>
            <button onClick={handleAddtoCart} style={{padding:"0px 10px"}}>Agregar al carrito</button>
        
        </div>
        
    </div>
  )
}

export default ButtonsCart