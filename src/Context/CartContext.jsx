import React from 'react'
import { useState } from 'react'

export const CartContext = React.createContext() 

export const CartProvider = ({children}) => {

    const [state, setState] = useState(0);
    
    
    

  return (
    
    <CartContext.Provider value={[state, setState]}>
        {children}
    </CartContext.Provider>
  )
}
