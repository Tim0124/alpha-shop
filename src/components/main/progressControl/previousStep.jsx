import style from './previousStep.module.scss'
import { ReactComponent as Arrow } from 'public/icons/arrow.svg';

function Previous(){
  return(
    <div className={`${style.buttonGroup}`}>
        <button className={`${style.previous}`}>
           <Arrow/>
          上一步&nbsp;&nbsp;
        </button>
      </div>
  )
}

export default Previous
