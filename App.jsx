import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Menu from './components/Menu';
import Cart from './components/Cart';
import OrderForm from './components/OrderForm';
import './styles/global.scss';


function App() {
  return (
    <div className="app" style={{ backgroundColor: '#ffc0cb' }}>
      <Router>
        <nav>
          <Link to="/">Меню</Link> | <Link to="/cart">Кошик</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<OrderForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
