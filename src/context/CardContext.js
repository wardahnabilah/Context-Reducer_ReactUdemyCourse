import { createContext, useContext } from "react"

const CartContext = createContext()

export function useCart() {
    return useContext(CartContext)
}

export default function CartProvider({children}) {
    const value = {
        cartList: [],
        total: 0,
    }
    
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}