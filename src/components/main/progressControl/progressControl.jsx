import './progressControl.scss'
import { ReactComponent as Arrow } from './arrow.svg';
import { ReactComponent as ArrowNext } from './arrowNext.svg';

function ProgressControl () {
  return (
    <section className="progressControlContainer">
      <div className="buttonGroup">
        <button className="next">
          下一步&nbsp;&nbsp;
          <ArrowNext/>
        </button>
      </div>
    </section>
  )
}

export default ProgressControl