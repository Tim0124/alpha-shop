import style from './main.module.scss'
import StepProgress from "./stepProgress"
import Step1 from './steps/step1'
import Step2 from './steps/step2'
import Step3 from './steps/step3'
import Cart from './cart/cart'
import Previous from './progressControl/previousStep'
import NextStep from './progressControl/nextStep';
import ProgressControl from './progressControl/progressControl'

function Main (props) {

  return (
    <main className={`${style.mainWrapper}`}>
      <div className={`${style.mainContainer}`}>
        <div className={`${style.leftContainer}`}>
        <section className={`${style.registerContainer}`}>
          <h1 className={`${style.registerTitle}`}>結帳</h1>
          <StepProgress />
          <Step1 />
          {/* <Step2 /> */}
          {/* <Step3 /> */}
        </section>
        </div>
        <div className={`${style.rightContainer}`}>
        <section className={`${style.cartContainer}`}>
          <Cart />
        </section>
        </div>
      </div>
      <ProgressControl />
      {/* <section className={`${style.progressControl}`}>
      <Previous />
      <NextStep />
      </section> */}
    </main>
  )
}

export default Main