import './step1.scss'
import Areas from './areas'

function Step1() {
  return(
    <section className="formContainer">
      <form action="" className="formContent">
      <h2 className="formTitle">寄送地址</h2>
      <section className="formBody">
            <div className="inputGroup gender">
              <div className="inputLabel">稱謂</div>
              <div className="selectContainer">
                <select className='selected' id="">
                  <option value="mr" selected>先生</option>
                  <option value="ms">女士</option>
                  <option value="mx">不明</option>
                </select>
              </div>
            </div>
            <div className="inputGroup name">
            <div className="inputLabel">姓名</div>
            <input className='inputName' type="text" placeholder="請輸入姓名"/>
          </div> 
            <div className="inputGroup telephone">
              <div className="inputLabel">電話</div>
              <input className='inputTel' type="tel" placeholder="請輸入行動電話" />
            </div>
            <div className="inputGroup email">
              <div className="inputLabel">Email</div>
              <input type="email" placeholder="請輸入電子郵件" />
            </div>
            <div className="inputGroup areas">
              <div className="inputLabel">縣市</div>
              <div className="selectContainer">
                <Areas />
              </div>
            </div>
            <div className="inputGroup address">
              <div className="inputLabel">地址</div>
              <input type="text" placeholder="請輸入地址"/>
            </div>
          
      </section>
      </form>
      {/* shipping phase */}

    </section>
  )
}

export default Step1