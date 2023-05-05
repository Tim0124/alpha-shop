import style from './product.module.scss'
import ProductControl from './productControl';

function Product({id, name, img, price, quantity}) {
  return(
    <div className={`${style.productContainer}`}>
      <img src={img} alt={name} className={`${style.cartPhoto}`}/>
      <div className={`${style.productInfo}`} key={id}>
        <div className={`${style.productControlContainer}`}>
          <div className={`${style.productName}`}>{name}</div>
          <ProductControl quantity={quantity}/>
        </div>
        <div className={`${style.price}`}>${price}</div>
      </div>
    </div>
  )
}

export default Product