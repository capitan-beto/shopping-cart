import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import Products from './components/Products';
import CartProvider from './context/CartProvider';
import Product from './components/Product';

function App() {
  
  return (
    <CartProvider>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path='/Products/:productId' element={<Product />} />
      </Routes>
    </CartProvider>

  )
}

export default App
