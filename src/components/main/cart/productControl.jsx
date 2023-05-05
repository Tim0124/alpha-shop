import { ReactComponent as Add } from 'public/icons/add.svg';
import { ReactComponent as Reduce } from 'public/icons/reduce.svg';
import style from './productControl.module.scss'

function ProductControl ({quantity}) {
  return (
    <div className={`${style.productControl}`}>
    <Reduce />
    <div className={`${style.quantity}`}>{quantity}</div>
    <Add />
    </div>
  )
}

export default ProductControl