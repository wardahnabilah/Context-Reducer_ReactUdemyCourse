import { Card } from '../components';
import { products } from '../data';
import { useDocTitle } from '../hooks/useDocTitle.';
import "./Home.css";

export function Home() {
    
    useDocTitle("Home")
    
    return (
        <main className="container">
            <section className="products">
                {
                    products.map(product => {
                        return <Card 
                                    key={product.id}
                                    product={product}
                                />
                    })
                }
            </section>
        </main>
    )
}