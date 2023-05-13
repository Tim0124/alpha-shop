import { ReactComponent as Add } from 'public/icons/add.svg';
import { ReactComponent as Reduce } from 'public/icons/reduce.svg';
import style from './productControl.module.scss'
import { useState } from 'react';


function ProductControl ({ onPriceChange,id}) {
  const [count, setCount] = useState(0)

  //處理點擊Reduce按鈕，數量會減1，count如果大於0才做減少的動作
  function handleReduceClick() {
    if (count > 0 ) {
      setCount(prevCount => prevCount - 1)
      if (id === '1') {
        onPriceChange(-100)
      }
      if (id === '2') {
        onPriceChange(-200)
      }
      
    }
  }

  //處理點擊Add按鈕，數量加1
  function handleAddClick() {
    setCount(prevCount => prevCount + 1)
    console.log(id)
    if(id === '1') {
      onPriceChange(100)
    }if(id ==='2') {
      onPriceChange(200)
    }
    
  }

  return (
    <div className={`${style.productControl}`}>
      <div className={`${style.reduce}`}>
        <Reduce onClick={handleReduceClick}/>  
      </div>
      <div className={`${style.quantity}`}>{count}</div>
      <div className={`${style.add}`}>
        <Add onClick={handleAddClick} />
      </div>
    </div>
  )
}

export default ProductControl