import './App.css'
// import Routes from "./assets/Routes"
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart'
import Products from './components/Products'

function App() {

  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Cart" element={<Cart />} />
    </Routes>
  )
}

export default App
