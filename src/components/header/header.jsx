import style from './header.module.scss'
import { ReactComponent as Hamburger } from 'public/icons/hamburger.svg';
import Menu from './menu'
import Tool from'./tool'
import HeaderLogo from './headerLogo';
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
          <HeaderLogo />
        </div>
        <div className={`${style.tool}`}>
          <Tool />
        </div>
        </nav>
      </header>
  )
}

export default Header