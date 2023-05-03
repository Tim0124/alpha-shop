import style from './stepProgress.module.scss'

function StepProgress () {
  return (
      <div className={style.stepperPanel}>
        <div className={style.stepperContainer}>
          <div className={style.step}>
            <div className={`${style.circleContainer} ${style.circleNumOne}`}></div>
            <div className={style.labelContainer}>寄送地址</div>
          </div>
          <span className={`${style.connectLine} ${style.lineOne}`}></span>
          <div className={style.step}>
            <div className={`${style.circleContainer} ${style.circleNumTwo}` }></div>
            <div className={style.labelContainer}>運送方式</div> 
          </div>
          <span className={`${style.connectLine} ${style.lineTwo}`}></span>
          <div className={style.step}>
            <div className={`${style.circleContainer} ${style.circleNumThree}`}></div>
            <div className={style.labelContainer}>付款資訊</div>
          </div>
        </div>
      </div>      
  )
}

export default StepProgress