import "./CardCart.css"

export function CardCart(props) {
    return (
        <div className="card-cart">
            <div className="cardcart-image">
                <img src={props.image} alt={props.name} />
            </div>
            <p className="cardcart-name">{props.name}</p>
            <p className="cardcart-price">${props.price}</p>
            <button className="button cardcart-button">Remove</button>
        </div>
    )
}