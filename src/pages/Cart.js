import { CardCart } from "../components";
import { useCart } from "../context/CartContext";
import { useDocTitle } from "../hooks/useDocTitle.";
import "./Cart.css";

export function Cart() {
    
    const cart = useCart()

    useDocTitle("Cart")

    return (
        <main className="container">
            <section>
                <h1 className="cart-heading">Cart Items: {cart.cartList.length} / ${cart.total}</h1>
                {cart.cartList.map(product => {
                    return <CardCart 
                                key={product.id}
                                id={product.id}
                                name={product.name}
                                price={product.price}
                                image={product.image}
                            />
                })}
            </section>
        </main>
    )
}