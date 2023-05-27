import { useCart } from "../context/CartContext";
import "./Card.css";

export function Card(props) {
    const {id, name, price, image} = props.product

    const {addProduct} = useCart()

    return (
        <div className="card">
            <div className="card-image">
                <img src={image} alt={name} />
            </div>
            <p className="card-name">{name}</p>
            <div className="card-detail">
                <p className="price">${price}</p>
                <button onClick={() => { addProduct(props.product) }} className="button card">Add To Cart</button>
            </div>
        </div>
    )
}