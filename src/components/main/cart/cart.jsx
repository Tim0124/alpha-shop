import style from './cart.module.scss'
import Product from './product'
import {  useContext, useState } from 'react';
import { CartContext } from 'components/main/context/CartContext.jsx'
import { TotalContext } from '../context/TotalContext';


function Cart ({onPriceChange}) {
  const Initial = useContext(CartContext)
  const totalPrice = useContext(TotalContext)

  return (
    <section className={`${style.cartWrapper}`}>
      <h3 className={`${style.cartTitle}`}>購物籃</h3>
        {Initial.map(item => 
          <Product key={item.id} {...item}  
          onPriceChange={onPriceChange}
          />
        )}
      <section className={`${style.cartInfo}`}>
        <div className={`${style.text}`}>運費</div>
        <div className={`${style.price}`}>免費</div>
      </section>
      <section className={`${style.cartInfo}`}>
        <div className={`${style.text}`}>小計</div>
        <div className={`${style.price}`}>${totalPrice}</div>
      </section>
    </section>
  )
}

export default Cart