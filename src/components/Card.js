import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import "./Card.css";

export function Card(props) {
    const {id, name, price, image} = props.product
    const {cartList, addProduct, removeProduct} = useCart()
    const [isInCart, setIsInCart] = useState(false)

    useEffect(()=>{
        const productExist = cartList.find(productInCart => productInCart.id === id)
        
        if(productExist) {
            setIsInCart(true)
        } else {
            setIsInCart(false)
        }
    
    }, [cartList, id])

    return (
        <div className="card">
            <div className="card-image">
                <img src={image} alt={name} />
            </div>
            <p className="card-name">{name}</p>
            <div className="card-detail">
                <p className="price">${price}</p>
                {isInCart ? <button onClick={() => { removeProduct(props.product) }} className="button remove">Remove</button> :
                            <button onClick={() => { addProduct(props.product) }} className="button">Add To Cart</button>
                }
            </div>
        </div>
    )
}