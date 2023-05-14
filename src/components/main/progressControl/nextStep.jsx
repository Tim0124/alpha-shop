import style from './nextStep.module.scss'
import { ReactComponent as ArrowNext } from 'public/icons/arrowNext.svg';

function NextStep ({onNext, onStep}) {
  const buttonText = onStep === 3 ? '確認下單' : (<span>下一步 <ArrowNext/></span>)
  return (
    <div className={`${style.buttonGroup}`}>
        <button className={`${style.next}`} onClick={onNext}>
          {buttonText}&nbsp;&nbsp;
         
        </button>
      </div>
  )
}

export default NextStep