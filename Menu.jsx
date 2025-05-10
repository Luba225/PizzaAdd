import React, { useRef } from 'react';
import pizzas from '../data/pizzas';
import drinks from '../data/drinks';
import PizzaItem from './PizzaItem';
import DrinkItem from './DrinkItem';


function Menu() {
  return (
    <div>
      <h2>Піца</h2>
      {pizzas.map(pizza => <PizzaItem key={pizza.id} pizza={pizza} />)}

      <h2>Напої</h2>
      {drinks.map(drink => <DrinkItem key={drink.id} drink={drink} />)}
    </div>
  );
}

export default Menu;
