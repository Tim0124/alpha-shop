import style from './main.module.scss'
import StepProgress from "./stepProgress"
import Step1 from './steps/step1'
import Step2 from './steps/step2'
import Step3 from './steps/step3'
import Cart from './cart/cart'
import ProgressControl from './progressControl/progressControl'
import { FormContext } from './context/FormContext'
import { TotalContext } from './context/TotalContext'
import { useContext, useState } from 'react'

const shipping = {
  free: '免運',
  DHL:'$500'
}

function Main ({onStep, onNext, onPrevious}) {
  const form = useContext(FormContext)
  const total = useContext(TotalContext)
  const [formState, setFormState] = useState(form)
  const [totalPrice, setTotalPrice] = useState(total)
  
  //最後加總的金額  
  function handleTotalPriceChange(change) {
    setTotalPrice(prePrice => prePrice + change)
  }

  //更新input的值
  function handleInputChange(e, index) {
    const value = e.target.value
    const updateFormState = formState.map((form, i ) => {
      if(i === index) {
        return {...form, value }
      }
      return form
    })
    setFormState(updateFormState)
  }
  
  //點擊確認下單，印出資訊
  function handleFinalCheck () {
    formState.map((data) => {
      return console.log(`${data.label}:${data.value}`)
    })
    return console.log(`總金額:${totalPrice}`)
  }
  

  return (
    <FormContext.Provider value={formState}>
      <TotalContext.Provider value={totalPrice}>
        <main className={`${style.mainWrapper}`}>
        <div className={`${style.mainContainer}`}>
          <div className={`${style.leftContainer}`}>
          <section className={`${style.registerContainer}`}>
            <h1 className={`${style.registerTitle}`}>結帳</h1>
            <StepProgress onStep={onStep}/>
            {onStep === 1 && <Step1 />}
            {onStep === 2 && <Step2 onShipping={shipping}/>}
            {onStep === 3 && <Step3 onChange={handleInputChange}/>}
          </section>
          </div>
          <div className={`${style.rightContainer}`}>
          <section className={`${style.cartContainer}`}>
            <Cart onPriceChange={handleTotalPriceChange}/>
          </section>
          </div>
        </div>
        <ProgressControl 
          onPrevious={onPrevious} 
          onNext={onNext}
          onStep={onStep}
          onFinal ={handleFinalCheck}
        />
      </main>
    </TotalContext.Provider>
    </FormContext.Provider>
  )
}

export default Main