import { useContext } from 'react'
import style from './step3.module.scss'
import { FormContext } from '../context/FormContext'

function StepThree ({onChange}) {
  const formState = useContext(FormContext)
  
  return (
    <section className={`${style.formContainer}`}>
      <form action="" className={`${style.formInfo}`}>
        <h3 className={`${style.formTitle}`}>付款資訊</h3>
        <section className={`${style.formBody}`}>
          <div className={`${style.inputContainer}`}>
            {formState.map((form, index) => (
              <div className={`${style.inputGroup} ${style[form.name]}`} key={form.name}>
                <div className={`${style.inputLabel}`}>{form.label}</div>
                <input type="text" placeholder={form.default} onChange={(e) => onChange(e, index)}/>  
              </div>
            ))}
          </div>
        </section>
      </form>
    </section>
  )
}

export default StepThree