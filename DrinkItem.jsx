import React from 'react';


function DrinkItem({ drink }) {
  const handleAddToCart = () => {
  const item = {
    type: 'drink',
    name: drink.name,
    volume: drink.volume,
    price: drink.price,
  };

  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(item);
  localStorage.setItem('cart', JSON.stringify(cart));
};


  return (
    <div className="drink-item">
      <h3>{drink.name}</h3>
      <p>{drink.volume}</p>
      <p>{drink.price}₴</p>
      <button onClick={handleAddToCart}>Додати в кошик</button>
    </div>
  );
}

export default DrinkItem;
