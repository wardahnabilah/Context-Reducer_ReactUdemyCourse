import "./Card.css";

export function Card(props) {
    const {name, price, image} = props.product

    return (
        <div className="card">
            <div className="card-image">
                <img src={image} alt={name} />
            </div>
            <p className="card-name">{name}</p>
            <div className="card-detail">
                <p className="price">${price}</p>
                <button className="button card">Add To Cart</button>
            </div>
        </div>
    )
}