import React, { useState, useEffect } from 'react';
import { Products, Navbar, Cart, Checkout, About, Contact, Header } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    // const response = await fetch('http://127.0.0.1:8000/api/v1/products/')
    const response = await fetch('https://jadonsshop.herokuapp.com/api/v1/products')
    let data = await response.json()
    setProducts(data)
  }

  const [cart, setCart] = useState([])

  const handleAddToCart = async (productId) => {
    const response = await fetch(`https://jadonsshop.herokuapp.com/api/v1/products/${productId}`)
    let data = await response.json()
    let a = cart
    a.push(data)
    setCart(a)
    localStorage.setItem('cart', JSON.stringify(cart))
  }

  const handleEmptyCart = () => {
    setCart([])
    localStorage.setItem('cart', JSON.stringify(cart))
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <Navbar totalItems={cart.total_items} />
        <Routes>
          <Route path='/' element={<Products products={products} onAddToCart={handleAddToCart}/>} />
          <Route path='/cart' element={<Cart cart={cart} handleEmptyCart={handleEmptyCart} />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
