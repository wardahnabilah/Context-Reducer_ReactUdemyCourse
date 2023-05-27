import { useCart } from "../context/CartContext"
import "./CardCart.css"

export function CardCart(props) {
    const { removeProduct } = useCart()
    const product = {
        id: props.id,
        name: props.name,
        price: props.price,
        image: props.image
    }

    return (
        <div className="card-cart">
            <div className="cardcart-image">
                <img src={props.image} alt={props.name} />
            </div>
            <p className="cardcart-name">{props.name}</p>
            <p className="cardcart-price">${props.price}</p>
            <button onClick={() => { removeProduct(product) }} className="button cardcart-button">Remove</button>
        </div>
    )
}