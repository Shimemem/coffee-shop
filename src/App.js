import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import './index.css'

function App() {
  const [cartItems, setCartItems] = useState([]);
  const products = [
    { id: 1, name: 'Espresso', price: 5, description: 'Rich and bold espresso', image: 'espresso.jpg' },
    { id: 2, name: 'Cappuccino', price: 6, description: 'Creamy cappuccino', image: 'cappuccino.jpg' },
    { id: 3, name: 'Latte', price: 5.5, description: 'Smooth latte with milk', image: 'latte.jpg' },
    // Add more products as needed
  ];

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage products={products} />} />
        <Route path="/product/:id" element={<ProductDetailPage products={products} />} />
        <Route path="/cart" element={<CartPage cartItems={cartItems} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;