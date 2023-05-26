import { Routes, Route } from 'react-router-dom';
import { Header } from './components';
import { Home, Cart } from './pages';
import './App.css';

export default function App() {
  return (
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </>    
  )
}