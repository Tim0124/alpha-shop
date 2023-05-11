import style from './nextStep.module.scss'
import { ReactComponent as ArrowNext } from 'public/icons/arrowNext.svg';

function NextStep () {
  return (
    <div className={`${style.buttonGroup}`}>
        <button className={`${style.next}`}>
          下一步&nbsp;&nbsp;
          <ArrowNext/>
        </button>
      </div>
  )
}

export default NextStep