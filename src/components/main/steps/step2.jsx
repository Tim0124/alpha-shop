import style from './step2.module.scss'
import ProgressControl from '../progressControl/progressControl'

function StepTwo () {
  return(
    <section className={`${style.formContainer}`}>
      <form action="" className={`${style.formInfo}`}>
        <h3 className={`${style.formTitle}`}>運送方式</h3>
        <section className={`${style.formBody}`}>
          <label htmlFor="" className={`${style.formLabel}`}>
            <div className={`${style.inputContainer}`}>
              <input id='' type="radio" className={`${style.formInput}`}
               checked/>
            </div>
            <div className={`${style.sendGroup}`}>
              <div className={`${style.sendInfo}`}>
                <div className={`${style.sendText}`}>標準運送</div>
                <div className={`${style.sendPrice}`}>免費</div>
              </div>
              <div className={`${style.sendPeriod}`}>約3~7個工作天</div>
            </div>
          </label>
          <label htmlFor="" className={`${style.formLabel}`}>
            <div className={`${style.inputContainer}`}>
              <input id='' type="radio" className={`${style.formInput}`}/>
            </div>
            <div className={`${style.sendGroup}`}>
              <div className={`${style.sendInfo}`}>
                <div className={`${style.sendText}`}>DHL 貨運</div>
                <div className={`${style.sendPrice}`}>$500</div>
              </div>
              <div className={`${style.sendPeriod}`}>48小時內送達</div>
            </div>
          </label>
        </section>
        
      </form>
      {/* <section class={`${style.progressControl}`}>
        <ProgressControl />
      </section> */}
    </section>
  )
}

export default StepTwo