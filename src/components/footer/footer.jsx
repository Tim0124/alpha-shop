import { ReactComponent as Fb } from 'public/icons/fb.svg';
import { ReactComponent as Ig } from 'public/icons/ig.svg';
import { ReactComponent as Whatsapp } from 'public/icons/whatsapp.svg';
import style from './footer.module.scss'
import ShopLogo from 'components/header/shopLogo';

function Footer () {
  return (
    <footer className={`${style.footerWrapper}`}>
      <div className={`${style.footerContainer}`}>
        <div className={`${style.footerLogo}`}>
          <ShopLogo />
        </div>
        <section className={`${style.footerSection}`}>
          <h2 className={`${style.footerSectionTitle}`}>客戶服務</h2>
          <div className={`${style.footerSectionContent}`}>
            <a href="/" className={`${style.pageLink}`}>運送服務</a>
            <a href="/" className={`${style.pageLink}`}>退換貨相關</a>
            <a href="/" className={`${style.pageLink}`}>付款資訊</a>
            <a href="/" className={`${style.pageLink}`}>FAQ</a>
          </div>
        </section>
        <section className={`${style.footerSection}`}>
          <h2 className={`${style.footerSectionTitle}`}>關於我們</h2>
          <div className={`${style.footerSectionContent}`}>
            <a href="/" className={`${style.pageLink}`}>品牌故事</a>
            <a href="/" className={`${style.pageLink}`}>媒體聯繫</a>
            <a href="/" className={`${style.pageLink}`}>Press kit</a>
          </div>
        </section>
        <section className={`${style.footerSection}`}>
          <h2 className={`${style.footerSectionTitle}`}>資訊</h2>
          <div className={`${style.footerSectionContent}`}>
            <a href="/" className={`${style.pageLink}`}>隱私權政策</a>
            <a href="/" className={`${style.pageLink}`}>Cookie</a>
            <a href="/" className={`${style.pageLink}`}>GDPR</a>
          </div>
        </section>
        <section className={`${style.footerSection}`}>
          <h2 className={`${style.footerSectionTitle}`}>追蹤ALPHA Shop</h2>
          <div className={`${style.footerSectionContent}`}>
            <a href="/" className={`${style.pageLink}`}>+886 02123-45678</a>
            <div className={`${style.communityLink}`}>
              <a href="/" className={`${style.facebookLink}`}><Fb /></a>
              <a href="/" className={`${style.instagramLink}`}><Ig/></a>
              <a href="/" className={`${style.whatsappLink}`}><Whatsapp /></a>
            </div>
          </div>
        </section>
      </div>
    </footer>
  )
}

export default Footer