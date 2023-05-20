import style from './nextStep.module.scss'
import { ReactComponent as ArrowNext } from 'public/icons/arrowNext.svg';

function NextStep ({onNext, onStep, onFinal}) {
  const buttonText = onStep === 3 ? '確認下單' : (<span>下一步 <ArrowNext/></span>)
  function handleClick () {
    onNext()
    if(buttonText === '確認下單'){
    onFinal()
    }
  }
  return (
    <div className={`${style.buttonGroup}`}>
        <button className={`${style.next}`} onClick={handleClick} >
          {buttonText}&nbsp;&nbsp;
         
        </button>
      </div>
  )
}

export default NextStep