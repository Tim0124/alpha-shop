 import style from './menu.module.scss'
 
 function Menu () {
  return(

      <ul className={`${style.menuList}`}>
        <li className={`${style.menuItem}`}>男款</li>
        <li className={`${style.menuItem}`}>女款</li>
        <li className={`${style.menuItem}`}>最新消息</li>
        <li className={`${style.menuItem}`}>客製商品</li>
        <li className={`${style.menuItem}`}>聯絡我們</li>
      </ul>

  )
}

export default Menu