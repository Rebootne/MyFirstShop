import React, { useState } from 'react'
import { FaShoppingCart  } from "react-icons/fa";
import Order from './order';

const showOrders = (props) => {
    let summa = 0
    props.orders.forEach(el => summa += Number.parseFloat(el.price))
    return (<div>
        {props.orders.map(el => (
            <Order onDelete={props.onDelete} key={el.id} item={el}/>
        ))}
        <p className='summa'>Сумма: {summa.toFixed(2)}$</p>
    </div>)
}

const showNothing = () => { 
    return (<div className='empty'>
        <h2>Добавьте товар в корзину &#128071;</h2>
    </div>)
}

export default function header(props) {
  let [cartOpen, setCartOpen] = useState(false)

  return (
    <header>
        <div>
            <span className="logo">House Staff</span>
            <ul className='nav'>
              <li>О нас</li>
              <li>Контакты</li>
              <li>Кабинет</li>
            </ul>
            <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`}/> 

            {cartOpen && (
                <div className='shop-cart'>
                    {props.orders.length > 0 ?
                        showOrders(props) : showNothing()}
                </div>
            )}

        </div>
        <div className="presentation"></div>
    </header>
  )
}
