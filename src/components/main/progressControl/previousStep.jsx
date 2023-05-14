import style from './previousStep.module.scss'
import { ReactComponent as Arrow } from 'public/icons/arrow.svg';

function Previous({onPrevious, onStep}){
  return(
    <div className={`${style.buttonGroup}`} style={onStep === 1 ? {opacity:0} : {}} >
        <button className={`${style.previous}`} onClick={onPrevious}>
           <Arrow/>
          上一步&nbsp;&nbsp;
        </button>
      </div>
  )
}

export default Previous
