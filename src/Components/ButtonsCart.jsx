import React, {useContext, useState} from 'react'
import { CartContext } from '../Context/CartContext'

const ButtonsCart = ({productId}) => {
    const [state, setState] = useState(1)
    const {count, setCount} = useContext(CartContext)

    const handleAddClick = () => {
        setState(state + 1)
    }
    const handleLessClick = () => {
        if(state > 1)
            setState(state - 1)
    }
    const handleAddtoCart = () => {
        const existingProduct = count.products.find((p) => p.productId === productId)
        if (existingProduct) {
            existingProduct.qty += state;
        }else{
            const newProduct = {
                productId,
                qty: state
            }
            setCount((prevState) => ({
                qtyItems: prevState.qtyItems + 1,
                products: [...prevState.products, newProduct]
            }))
        }
        
    console.log(count.products)
    }
  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:"20px"}}>
        <div style={{display:"flex", gap:"10px", marginBottom:"10px"}}>
            <button onClick={handleLessClick} style={{padding:"0px 6px"}}>-</button>
            <span>{state}</span>
            <button onClick={handleAddClick} style={{padding:"0px 5px"}}>+</button>
            </div>
        <div style={{display:"flex"}}>
            <button onClick={handleAddtoCart} style={{padding:"0px 10px"}}>Agregar al carrito</button>
        
        </div>
        
    </div>
  )
}

export default ButtonsCart