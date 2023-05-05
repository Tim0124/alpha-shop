import style from './cart.module.scss'
import { Initial } from './initial';
import Product from './product'
import ProgressControl from '../progressControl/progressControl';
function Cart () {
  
  return (
    <section className={`${style.cartWrapper}`}>
      <h3 className={`${style.cartTitle}`}>購物籃</h3>
      {Initial.map(item => 
        <Product key={item.id} {...item}/>
      )}
      <section className={`${style.cartInfo}`}>
        <div className={`${style.text}`}>運費</div>
        <div className={`${style.price}`}>免費</div>
      </section>
      <section className={`${style.cartInfo}`}>
        <div className={`${style.text}`}>小計</div>
        <div className={`${style.price}`}>$5,298</div>
      </section>
      <section className={`${style.progressControl}`}>
      <ProgressControl />
      </section>
    </section>
    
  )
}

export default Cart