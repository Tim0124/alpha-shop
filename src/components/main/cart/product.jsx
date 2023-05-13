import style from './product.module.scss'
import ProductControl from './productControl';
import { useState } from 'react';


function Product({id, name, img, onPriceChange }) {
  const [productPrice, setProductPrice] = useState(0)

  //將點擊數量後的價格進行加總
  function handlePriceChange (change) {
    setProductPrice(prevPrice => prevPrice + change)
    onPriceChange(change)
  }


  return(
    <div className={`${style.productContainer}`}>
      <img src={img} alt={name} className={`${style.cartPhoto}`}/>
      <div className={`${style.productInfo}`} key={id}>
        <div className={`${style.productControlContainer}`}>
          <div className={`${style.productName}`}>{name}</div>
          <ProductControl 
          onPriceChange={handlePriceChange}
          id={id}
          />
        </div>
        <div className={`${style.price}`} onProductPrice={handlePriceChange}>${productPrice}</div>
      </div>
    </div>
  )
}

export default Product