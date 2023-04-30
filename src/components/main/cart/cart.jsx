import './cart.scss'
import Photo from './photo.png'
import Photo2 from './photo2.png'
import { ReactComponent as Add } from './add.svg';
import { ReactComponent as Reduce } from './reduce.svg';


function Cart () {
  return (
    <section className='cartWrapper'>
      <h2 className='cartTitle'>購物籃</h2>
      <div className="productContainer">
        <img src={Photo} alt={Photo} />
        <div className="productInfo">
          <div className="productName">破壞補丁修身牛仔褲</div>
          <div className="productControlContainer">
            <div className="productControl">
              <Reduce className='reduce'/>
                <div className="quantity">1</div>
              <Add className='add'/>
            </div>
            <div className="price">$3,999</div>
          </div>
        </div>
      </div>
      <div className="productContainer">
        <img src={Photo2} alt={Photo2} />
        <div className="productInfo">
          <div className="productName">刷色直筒牛仔褲</div>
          <div className="productControlContainer">
            <div className="productControl">
              <Add className='add'/>
                <div className="quantity">1</div>
              <Reduce />
            </div>
            <div className="price">$3,999</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cart