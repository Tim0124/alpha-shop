import style from './header.module.scss'
import Menu from './menu'
import Tool from'./tool'
import ShopLogo from './shopLogo';
import HamburgerIcon from './hamburger';

 function Header() {
  return (
      <header className={`${style.header}`}>
        <nav className={`${style.navbar}`}>
          <div className={`${style.hamburger}`}>
            <HamburgerIcon />
          </div>
          <input type="checkbox" className={`${style.hamburgerToggle}`}id="hamburgerToggle" />
          <div className={`${style.menuContainer}`}>
            <Menu />
          </div>
        <div className={`${style.headerLogo}`}>
          <ShopLogo />
        </div>
        <div className={`${style.tool}`}>
          <Tool />
        </div>
        </nav>
      </header>
  )
}

export default Header