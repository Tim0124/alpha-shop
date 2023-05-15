import style from './main.module.scss'
import StepProgress from "./stepProgress"
import Step1 from './steps/step1'
import Step2 from './steps/step2'
import Step3 from './steps/step3'
import Cart from './cart/cart'
import ProgressControl from './progressControl/progressControl'
import { useState } from 'react'

const shipping = {
  free: '免運',
  DHL:'$500'
}

function Main ({onStep, onNext, onPrevious}) {
  

  return (
    <main className={`${style.mainWrapper}`}>
      <div className={`${style.mainContainer}`}>
        <div className={`${style.leftContainer}`}>
        <section className={`${style.registerContainer}`}>
          <h1 className={`${style.registerTitle}`}>結帳</h1>
          <StepProgress onStep={onStep}/>
          {onStep === 1 && <Step1 />}
          {onStep === 2 && <Step2 onShipping={shipping}/>}
          {onStep === 3 && <Step3 />}
        </section>
        </div>
        <div className={`${style.rightContainer}`}>
        <section className={`${style.cartContainer}`}>
          <Cart />
        </section>
        </div>
      </div>
      <ProgressControl 
        onPrevious={onPrevious} 
        onNext={onNext}
        onStep={onStep}
      />
    </main>
  )
}

export default Main