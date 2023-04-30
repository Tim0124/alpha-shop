import './main.scss'
import StepProgress from "./stepProgress.jsx"
import Step1 from './steps/step1.jsx'
import Cart from './cart/cart.jsx'
import ProgressControl from './progressControl/progressControl.jsx'


function Main () {
  return (
    <main className="mainWrapper">
      <div className="mainContainer">
        <div className="leftContainer">
        <section className="registerContainer">
          <h1 className="registerTitle">結帳</h1>
          <StepProgress className='stepProgress'/>
          <Step1 className='step1'/>
          <ProgressControl className='ProgressControl'/>
        </section>
        </div>
        <div className="rightContainer">
        <section className="cartContainer">
          <Cart className='cart'/>
        </section>
        </div>
      </div>
    </main>
  )
}

export default Main