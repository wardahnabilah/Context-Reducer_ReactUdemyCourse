import { createContext, useContext, useReducer } from "react"
import { cartReducer } from "../reducer/cartReducer"

const CartContext = createContext()

const initialState = {
    cartList: [],
    total: 0
}

export function useCart() {
    return useContext(CartContext)
}

export default function CartProvider({children}) {
    const [state, dispatch] = useReducer(cartReducer, initialState)

    const value = {
        cartList: state.cartList,
        total: state.total,
        addProduct,
        removeProduct
    }
    
    // Add product
    function addProduct(product) {
        const updatedCarts = state.cartList.concat(product)

        dispatch({
            type: "ADD_TO_CART",
            payload: {products: updatedCarts}
        })
    }

    // Remove product
    function removeProduct(product) {
        const updatedCarts = state.cartList.filter(cartListProduct => cartListProduct.id !== product.id)

        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {products: updatedCarts}
        })
    }
    
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}