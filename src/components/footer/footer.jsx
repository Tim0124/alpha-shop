import { ReactComponent as Logo } from 'public/icons/logo.svg';
import { ReactComponent as Fb } from 'public/icons/fb.svg';
import { ReactComponent as Ig } from 'public/icons/ig.svg';
import { ReactComponent as Whatsapp } from 'public/icons/whatsapp.svg';
import './footer.scss'
import HeaderLogo from 'components/header/headerLogo';

function Footer () {
  return (
    <footer className="footerwrapper">
      <div className="footerContainer">
        <div className="footerLogo">
          <HeaderLogo />
        </div>
        <section className="footerSection">
          <h2 className="footerSectionTitle">客戶服務</h2>
          <div className="footerSectionContent">
            <a href="/" className="pageLink">運送服務</a>
            <a href="/" className="pageLink">退換貨相關</a>
            <a href="/" className="pageLink">付款資訊</a>
            <a href="/" className="pageLink">FAQ</a>
          </div>
        </section>
        <section className="footerSection">
          <h2 className="footerSectionTitle">關於我們</h2>
          <div className="footerSectionContent">
            <a href="/" className="pageLink">品牌故事</a>
            <a href="/" className="pageLink">媒體聯繫</a>
            <a href="/" className="pageLink">Press kit</a>
          </div>
        </section>
        <section className="footerSection">
          <h2 className="footerSectionTitle">資訊</h2>
          <div className="footerSectionContent">
            <a href="/" className="pageLink">隱私權政策</a>
            <a href="/" className="pageLink">Cookie</a>
            <a href="/" className="pageLink">GDPR</a>
          </div>
        </section>
        <section className="footerSection">
          <h2 className="footerSectionTitle">追蹤ALPHA Shop</h2>
          <div className="footerSectionContent">
            <a href="/" className="pageLink">+886 02123-45678</a>
            <div className="communityLink">
              <a href="/" className="facebookLink"><Fb /></a>
              <a href="/" className="instagramLink"><Ig/></a>
              <a href="/" className="whatsappLink"><Whatsapp /></a>
            </div>
            
          </div>
        </section>
      </div>
    </footer>
  )
}

export default Footer