import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/logo.png';
import "./Header.css";
import { useCart } from '../context/CartContext';

export function Header() {
    
    const cart = useCart()
    
    return (
        <header className="container header">
            <Link to="/" className="header-logo">
                <img src={Logo} alt="logo" />
                <span className="text">Shopping Cart</span>
            </Link>
            <nav className="nav">
                <NavLink to="/" className="nav-link" end>Home</NavLink>
                <NavLink to="/cart" className="nav-link">Cart</NavLink>
            </nav>
            <Link to="/cart" className="cart-qty">Cart: {cart.cartList.length}</Link>
        </header>
    )
}