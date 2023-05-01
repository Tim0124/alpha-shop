import './cart.scss'
import Photo from './photo.png'
import Photo2 from './photo2.png'
import { ReactComponent as Add } from './add.svg';
import { ReactComponent as Reduce } from './reduce.svg';


function Cart () {
  return (
    <section className='cartWrapper'>
      <h3 className='cartTitle'>購物籃</h3>
      <div className="productContainer">
        <img src={Photo} alt={Photo} className='cartPhoto'/>
        <div className="productInfo">
          <div className="productControlContainer">
            <div className="productName">破壞補丁修身牛仔褲</div>
            <div className="productControl">
              <Reduce className='reduce'/>
                <div className="quantity">1</div>
              <Add className='add'/>
            </div>
          </div>
          <div className="price">$3,999</div>
        </div>
      </div>
      <div className="productContainer">
        <img src={Photo2} alt={Photo2} className='cartPhoto'/>
        <div className="productInfo">
          <div className="productControlContainer">
            <div className="productName">刷色直筒牛仔褲</div>
            <div className="productControl">
              <Add className='add'/>
                <div className="quantity">1</div>
              <Reduce />
            </div>
          </div>
          <div className="price">$1,299</div>
        </div>
      </div>
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