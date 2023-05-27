export function cartReducer(state, action) {
    switch (action.type) {
        case "ADD_TO_CART":
            return {...state, cartList: action.payload.products}
        case "REMOVE_FROM_CART":
            return {...state, cartList: action.payload.products}
        case "UPDATE_TOTAL":
            return {...state, total: action.payload.totalPrice}    
        default: 
            throw new Error("No Case Found In cartReducer")
    }
}