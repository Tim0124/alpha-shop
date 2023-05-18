import style from './step3.module.scss'

function StepThree () {
  return (
    <section className={`${style.formContainer}`}>
      <form action="" className={`${style.formInfo}`}>
        <h3 className={`${style.formTitle}`}>付款資訊</h3>
        <section className={`${style.formBody}`}>
          <div className={`${style.inputContainer}`}>
            <div className={`${style.inputGroup} ${style.cardName}`} >
              <div className={`${style.inputLabel}`}>
                持卡人姓名
              </div>
              <input type="text" placeholder='John Doe' />
            </div>
            <div className={`${style.inputGroup} ${style.cardNumber}`}>
              <div className={`${style.inputLabel}`}>
                卡號
              </div>
              <input type="text" placeholder='1111 2222 3333 4444' />
            </div>
            <div className={`${style.inputGroup} ${style.cardDate}`}>
              <div className={`${style.inputLabel}`}>
                有效期限
              </div>
              <input type="text" placeholder='MM/YY' />
            </div>
            <div className={`${style.inputGroup} ${style.cardCCV}`}>
              <div className={`${style.inputLabel}`}>
                CVC{' '}/{' '}CCV
              </div>
              <input type="text" placeholder='123' />
            </div>
          </div>
        </section>
      </form>
    </section>
  )
}

export default StepThree