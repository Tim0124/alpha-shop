import style from './main.module.scss'
import StepProgress from "./stepProgress.jsx"
import Step1 from './steps/step1.jsx'
import Cart from './cart/cart.jsx'


function Main () {
  return (
    <main className={`${style.mainWrapper}`}>
      <div className={`${style.mainContainer}`}>
        <div className={`${style.leftContainer}`}>
        <section className={`${style.registerContainer}`}>
          <h1 className={`${style.registerTitle}`}>結帳</h1>
          <StepProgress />
          <Step1 />
        </section>
        </div>
        <div className={`${style.rightContainer}`}>
        <section className={`${style.cartContainer}`}>
          <Cart />
        </section>
        </div>
      </div>
    </main>
  )
}

export default Main