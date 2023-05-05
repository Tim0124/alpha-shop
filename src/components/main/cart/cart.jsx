import './cart.scss'
import { Initial } from './initial';
import Product from './product'

function Cart () {
  
  return (
    <section className='cartWrapper'>
      <h3 className='cartTitle'>購物籃</h3>
      {Initial.map(item => 
        <Product key={item.id} {...item}/>
      )}
      <section className="cartInfo shipping">
        <div className="text">運費</div>
        <div className="price">免費</div>
      </section>
      <section className="cartInfo total">
        <div className="text">小計</div>
        <div className="price">$5,298</div>
      </section>
    </section>
  )
}

export default Cart