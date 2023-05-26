import { CardCart } from "../components";
import { products } from "../data";
import { useDocTitle } from "../hooks/useDocTitle.";
import "./Cart.css";

export function Cart() {
    
    useDocTitle("Cart")

    return (
        <main className="container">
            <section>
                <h1 className="cart-heading">Cart Items: 2</h1>
                <CardCart 
                    key={products[0].id}
                    id={products[0].id}
                    name={products[0].name}
                    price={products[0].price}
                    image={products[0].image}
                />

                <CardCart 
                    key={products[1].id}
                    id={products[1].id}
                    name={products[1].name}
                    price={products[1].price}
                    image={products[1].image}
                />
            </section>
        </main>
    )
}