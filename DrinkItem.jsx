import React from 'react';


function DrinkItem({ drink }) {
 const [volume, setVolume] = useState(drink.volumes[0].volume);

 const handleAddToCart = () => {
    const item = {
      type: 'drink',
      name: drink.name,
      volume,
      price: drink.volumes.find(v => v.volume === volume).price,
    };
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(item);
  localStorage.setItem('cart', JSON.stringify(cart));
};


  return (
    <div className="menu-item">
     <img src={drink.image} alt={drink.name} />
      <h3>{drink.name}</h3>
      <div>
        {drink.volumes.map(v => (
          <label key={v.volume}>
            <input
              type="radio"
              name={drink.name}
              value={v.volume}
              checked={volume === v.volume}
              onChange={() => setVolume(v.volume)}
            />
            {v.volume} — {v.price}₴
          </label>
        ))}
      </div>
      <button onClick={handleAddToCart}>Додати в кошик</button>
    </div>
  );
}

export default DrinkItem;
