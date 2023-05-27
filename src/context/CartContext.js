import { createContext, useContext, useEffect, useReducer } from "react"
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

    useEffect(()=>{updateTotal()}, [state.cartList])
    
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

    // Calculate total price
    function updateTotal() {
        let totalPrice = 0
        state.cartList.map(product => {
            totalPrice += product.price
        })

        dispatch({
            type: "UPDATE_TOTAL",
            payload: {totalPrice: totalPrice}
        })
    }
    
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}