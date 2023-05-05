import { ReactComponent as Add } from 'public/icons/add.svg';
import { ReactComponent as Reduce } from 'public/icons/reduce.svg';

function Product({id, name, img, price, quantity}) {
  return(
    <div className='productContainer'>
      <img src={img} alt={name} className='cartPhoto'/>
      <div className="productInfo" key={id}>
        <div className="productControlContainer">
          <div className="productName">{name}</div>
          <div className="productControl">
                <Reduce className='reduce'/>
                  <div className="quantity">{quantity}</div>
                <Add className='add'/>
              </div>
        </div>
        <div className="price">{price}</div>
      </div>
    </div>
  )
}

export default Product