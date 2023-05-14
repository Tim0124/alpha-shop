import style from './progressControl.module.scss'
import Previous from './previousStep';
import NextStep from './nextStep';


function ProgressControl ({onStep, onNext, onPrevious}) {
  
  return (
    <section className={`${style.progressControlContainer}`}>
      {onStep > 1 && <Previous onPrevious={onPrevious} onStep={onStep}/>}
      <NextStep onNext={onNext} onStep={onStep}/>
    </section>
  )
}

export default ProgressControl