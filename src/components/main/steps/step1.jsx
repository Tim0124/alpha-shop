import style from './step1.module.scss'
import Areas from './areas'
import ProgressControl from '../progressControl/progressControl'

function Step1() {
  return(
    <section className={`${style.formContainer}`}>
      <form action="" className={`${style.formContent}`}>
      <h2 className={`${style.formTitle}`}>寄送地址</h2>
      <section className={`${style.formBody}`}>
            <div className={`${style.inputGroup} ${style.gender}`}>
              <div className={`${style.inputLabel}`}>稱謂</div>
              <div className={`${style.selectContainer}`}>
                <select className={`${style.selected}`} id="">
                  <option value="mr" selected>先生</option>
                  <option value="ms">女士</option>
                  <option value="mx">不明</option>
                </select>
              </div>
            </div>
            <div className={`${style.inputGroup} ${style.name}`}>
            <div className={`${style.inputLabel}`}>姓名</div>
            <input className={`${style.inputName}`} type="text" placeholder="請輸入姓名"/>
          </div> 
            <div className={`${style.inputGroup} ${style.telephone}`}>
              <div className={`${style.inputLabel}`}>電話</div>
              <input className={`${style.inputTel}`} type="tel" placeholder="請輸入行動電話" />
            </div>
            <div className={`${style.inputGroup} ${style.email}`}>
              <div className={`${style.inputLabel}`}>Email</div>
              <input type="email" placeholder="請輸入電子郵件" />
            </div>
            <div className={`${style.inputGroup} ${style.areas}`}>
              <div className={`${style.inputLabel}`}>縣市</div>
              <div className={`${style.selectContainer}`}>
                <Areas />
              </div>
            </div>
            <div className={`${style.inputGroup} ${style.address}`}>
              <div className={`${style.inputLabel}`}>地址</div>
              <input type="text" placeholder="請輸入地址"/>
            </div>
          
      </section>
      </form>
      {/* shipping phase */}
      <section class={`${style.progressControl}`}>
        <ProgressControl />
      </section>
    </section>
  )
}

export default Step1