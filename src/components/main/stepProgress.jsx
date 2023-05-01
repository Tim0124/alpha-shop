import './stepProgress.scss'

function StepProgress () {
  return (
      <div className="stepperPanel">
        <div className="stepperContainer">
          <div className="step ">
            <div className="circleContainer"></div>
            <div className="labelContainer">寄送地址</div>
            <span className='connectLine'></span>
          </div>
          <div className="step ">
            <div className="circleContainer"></div>
            <div className="labelContainer">運送方式</div>
            <span className='connectLine'></span>
          </div>
          <div className="step">
            <div className="circleContainer"></div>
            <div className="labelContainer">付款資訊</div>
          </div>
        </div>
      </div>      
  )
}

export default StepProgress