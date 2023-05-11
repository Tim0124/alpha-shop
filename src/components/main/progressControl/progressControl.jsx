import style from './progressControl.module.scss'
import Previous from './previousStep';
import NextStep from './nextStep';

function ProgressControl () {
  return (
    <section className={`${style.progressControlContainer}`}>
      <Previous/>
      <NextStep />
    </section>
  )
}

export default ProgressControl