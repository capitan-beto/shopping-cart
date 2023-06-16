import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart'
import Products from './components/Products'
import CartProvider from './context/CartProvider'

function App() {
  
  return (
    <CartProvider>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Cart" element={<Cart />} />
      </Routes>
    </CartProvider>

  )
}

export default App
