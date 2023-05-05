import style from './progressControl.module.scss'
import { ReactComponent as Arrow } from 'public/icons/arrow.svg';
import { ReactComponent as ArrowNext } from 'public/icons/arrowNext.svg';

function ProgressControl () {
  return (
    <section className={`${style.progressControlContainer}`}>
      <div className={`${style.buttonGroup}`}>
        <button className={`${style.next}`}>
          下一步&nbsp;&nbsp;
          <ArrowNext/>
        </button>
      </div>
    </section>
  )
}

export default ProgressControl