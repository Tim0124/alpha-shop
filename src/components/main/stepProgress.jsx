import style from './stepProgress.module.scss'
import { ReactComponent as Check } from 'public/icons/check.svg';

function StepProgress ({onStep}) {
 console.log(onStep)
 const stepOneCheck  = onStep === 1 ? '1' : <Check/>
 const stepTwoCheck = onStep === 3 ? <Check/> : '2'
 const circleNumTwoStyle = {
  color: onStep === 2 ? '#000' : '#d8d8d8',
  backgroundColor: onStep === 3 && '#000',
  border: onStep === 2 ? '1px solid #000' : ''
 }
 const circleNumThreeStyle = {
  color: onStep === 3 && '#000',
  border: onStep === 3 && '1px solid #000'
 }
 const labelShippingStyle = {
  color: onStep !== 1 ? '#000' : '#d8d8d8',
 }

 const labelPayStyle = {
  color: onStep === 3 && '#000'
 }

 const lineStyle = {
  color: onStep !== 1 && '#000' ,
  backgroundColor: onStep !== 1 && '#000'
 }

  return (
      <div className={style.stepperPanel}>
        <div className={style.stepperContainer}>
          <div className={`${style.step} ${style.stepOne}`}>
            <div className={`${style.circleContainer} ${style.circleNumOne} `}>{stepOneCheck}</div>
            <div className={`${style.labelContainer} ${style.labelOne}`}>寄送地址</div>
          </div>
          <span className={`${style.connectLine} ${style.lineOne}`}></span>
          <div className={`${style.step} ${style.stepTwo}`}>
            <div className={`${style.circleContainer}  ${style.circleNumTwo}`} style={circleNumTwoStyle}>{stepTwoCheck}</div>
            <div className={`${style.labelContainer} ${style.labelTwo}`} style={labelShippingStyle}>運送方式</div> 
          </div>
          <span className={`${style.connectLine} ${style.lineTwo}`} style={lineStyle}></span>
          <div className={`${style.step} ${style.stepThree}`}>
            <div className={`${style.circleContainer} ${style.circleNumThree}`} style={circleNumThreeStyle}>3</div>
            <div className={`${style.labelContainer} ${style.labelThree}`} style={labelPayStyle}>付款資訊</div>
          </div>
        </div>
      </div>      
  )
}

export default StepProgress