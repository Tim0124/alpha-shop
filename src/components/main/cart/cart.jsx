import style from './cart.module.scss'
import { Initial } from './initial';
import Product from './product'
import {  useState } from 'react';

function Cart () {
  const [totalPrice, setTotalPrice] = useState(0)

  //最後加總的金額
  function handleTotalPriceChange(change) {
    setTotalPrice(prePrice => prePrice + change)
  }
  
  return (
    <section className={`${style.cartWrapper}`}>
      <h3 className={`${style.cartTitle}`}>購物籃</h3>
      {Initial.map(item => 
        <Product key={item.id} {...item}  
        onPriceChange={handleTotalPriceChange}
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