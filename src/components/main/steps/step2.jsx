import style from './step2.module.scss'
import {  useState } from 'react'

function StepTwo ({onShipping}) {
  const[isCheckStand, setIsCheckStand] = useState(true)

  function handleClickStand () {
  setIsCheckStand(!isCheckStand)
  }

  const checked = isCheckStand

  return(
    <section className={`${style.formContainer}`}>
      <form action="" className={`${style.formInfo}`}>
        <h3 className={`${style.formTitle}`}>運送方式</h3>
        <section className={`${style.formBody}`}>
          <label htmlFor="inputToggle" className={`${style.formLabel}`} style={checked === false ? {border:'1px solid #F0F0F5'}:{}}>
            <div className={`${style.inputContainer}`}>
              <input id='inputToggle' type="radio" className={`${style.formInput}`}
                onChange={handleClickStand} checked={isCheckStand} />
            </div>
            <div className={`${style.sendGroup}`}>
              <div className={`${style.sendInfo}`}>
                <div className={`${style.sendText}`}>標準運送</div>
                <div className={`${style.sendPrice}`}>{onShipping.free}</div>
              </div>
              <div className={`${style.sendPeriod}`}>約3~7個工作天</div>
            </div>
          </label>
          <label htmlFor="inputToggleTwo" className={`${style.formLabel}`} style={checked === true ? {border:'1px solid #F0F0F5'}:{}}>
            <div className={`${style.inputContainer}`}>
              <input id='inputToggleTwo' type="radio" className={`${style.formInput}`} onChange={handleClickStand} checked={!isCheckStand}/>
            </div>
            <div className={`${style.sendGroup}`}>
              <div className={`${style.sendInfo}`}>
                <div className={`${style.sendText}`}>DHL 貨運</div>
                <div className={`${style.sendPrice}`}>{onShipping.DHL}</div>
              </div>
              <div className={`${style.sendPeriod}`}>48小時內送達</div>
            </div>
          </label>
        </section>
      </form>
    </section>
  )
}

export default StepTwo