import './header.scss'
import './menu.scss'
import { ReactComponent as Logo } from './logo.svg';
import { ReactComponent as Tool } from './tools.svg';
import { ReactComponent as Search } from './search.svg';
import { ReactComponent as Cart } from './cart.svg';
import { ReactComponent as Mode } from './mode.svg';
import { ReactComponent as Hamburger } from './hamburger.svg';
import Menu from './menu.jsx'

 function Header() {
  return (
      <header className='header'>
        <nav className='navbar'>
          <div className="hamburger">
            <label for='hamburgerToggle' className='hamburgerToggleLabel'>
            <Hamburger className='hamburger'/>
            </label>
          </div>
          <input type="checkbox" className='hamburgerToggle'id="hamburgerToggle" />
        <Menu className='menu'/>
        <div className='headerLogo'>
          <Logo className='logo'/>
          <h2 className='logoTitle'>ALPHA Shop</h2>
        </div>
        <div className="tool">
          <Search />
          <Cart />
          <Mode />
        </div>
        </nav>
      </header>
  )
}

export default Header