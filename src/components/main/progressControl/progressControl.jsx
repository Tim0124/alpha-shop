import style from './progressControl.module.scss'
import Previous from './previousStep';
import NextStep from './nextStep';


function ProgressControl ({onStep, onNext, onPrevious}) {
  const progressControlStyle = {
    justifyContent: onStep === 1 && 'end'
  }

  return (
    <section className={`${style.progressControlContainer}`} style={progressControlStyle}>
      {onStep > 1 && <Previous onPrevious={onPrevious} onStep={onStep}/>}
      <NextStep onNext={onNext} onStep={onStep}/>
    </section>
  )
}

export default ProgressControl