import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Cart() {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const total = cart.reduce((acc, item) => acc + item.price * (item.qty || 1), 0);

  const updateQty = (index, qty) => {
    if (qty < 1) return;
    const updated = [...cart];
    updated[index].qty = qty;
    setCart(updated);
  };

  const removeItem = (index) => {
    const updated = cart.filter((_, i) => i !== index);
    setCart(updated);
  };

  return (
    <div className="cart-container">
      <h2>🛒 Ваш кошик</h2>

      {cart.length === 0 ? (
        <p>Кошик порожній. Оберіть щось смачне :)</p>
      ) : (
        cart.map((item, i) => (
          <div key={i} className="cart-item">
            <p>
              {item.name} {item.size && `(${item.size})`} - {item.price}₴
            </p>
            <div>
              <input
                type="number"
                value={item.qty || 1}
                onChange={(e) => updateQty(i, parseInt(e.target.value))}
                min={1}
              />
              <button onClick={() => removeItem(i)}>Видалити</button>
            </div>
          </div>
        ))
      )}

      <h3>Загальна сума: {total}₴</h3>

      {cart.length > 0 && (
        <Link to="/order">
          <button className="order-btn">Оформити замовлення</button>
        </Link>
      )}
    </div>
  );
}

export default Cart;