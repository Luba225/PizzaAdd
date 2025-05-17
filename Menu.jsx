import React, { useRef } from 'react';
import pizzas from '../data/pizzas';
import drinks from '../data/drinks';
import PizzaItem from './PizzaItem';
import DrinkItem from './DrinkItem';


function Menu() {
  return (
    <div className="menu">
      <h2 className="section-title">🍕Піца</h2>
      <div className="menu-items">
        {pizzas.map(pizza => <PizzaItem key={pizza.id} pizza={pizza} />)}
      </div>

      <h2 className="section-title">🥤Напої</h2>
      <div className="menu-items">
        {drinks.map(drink => <DrinkItem key={drink.id} drink={drink} />)}
      </div>
    </div>
  );
}

export default Menu;
