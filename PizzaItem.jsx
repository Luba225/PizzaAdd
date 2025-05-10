import React, { useState } from 'react';


function PizzaItem({ pizza }) {
  const [size, setSize] = useState('Середня');
  const [dough, setDough] = useState('Традиційне');
  const [extras, setExtras] = useState([]);

const handleAddToCart = () => {
  const item = {
    type: 'pizza',
    name: pizza.name,
    size,
    dough,
    extras,
    price: pizza.prices[size] + extras.reduce((acc, e) => acc + e.price, 0),
  };
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(item);
  localStorage.setItem('cart', JSON.stringify(cart));
};


  return (
    <div className="pizza-item">
      <h3>{pizza.name}</h3>
      <p>{pizza.description}</p>
      <select onChange={(e) => setSize(e.target.value)}>
        {Object.keys(pizza.prices).map(size => (
          <option key={size}>{size}</option>
        ))}
      </select>
      <select onChange={(e) => setDough(e.target.value)}>
        <option>Традиційне</option>
        <option>Тонке</option>
      </select>
      <div>
        {pizza.extras.map(extra => (
          <label key={extra.name}>
            <input
              type="checkbox"
              value={extra.name}
              onChange={(e) => {
                if (e.target.checked) {
                  setExtras([...extras, extra]);
                } else {
                  setExtras(extras.filter(item => item.name !== extra.name));
                }
              }}
            />
            {extra.name} (+{extra.price}₴)
          </label>
        ))}
      </div>
      <button onClick={handleAddToCart}>Додати в кошик</button>
    </div>
  );
}

export default PizzaItem;
