import './stepProgress.scss'

function StepProgress () {
  return (
      <div className="stepperPanel">
        <div className="stepperContainer">
          <div className="step active">
            <div className="circleContainer"></div>
            <div className="labelContainer">寄送地址</div>
          </div>
          <div className="step ">
            <div className="circleContainer"></div>
            <span className='connectLine'></span>
            <div className="labelContainer">運送方式</div>
          </div>
          <div className="step">
            <div className="circleContainer"></div>
            <span className='connectLine'></span>
            <div className="labelContainer">付款資訊</div>
          </div>
        </div>
      </div>      
  )
}

export default StepProgress