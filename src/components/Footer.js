import './Footer.css'
import frblogo from '../assets/img/FRB LOGO.png'
import facebook from '../assets/img/Facebook_Logo_2023 (1).png'
import instagram from '../assets/img/instagram-icon-logo-free-png.webp'
import youtube from '../assets/img/youtube2.png'
import threads from '../assets/img/threads-icon.png'
import attherate from '../assets/img/flicker-icon.png'
import linkedin from '../assets/img/png-transparent-linkedin-logo-linkedin-logo-computer-icons-business-symbol-linkedin-icon-miscellaneous-blue-angle-thumbnail.png'
// import attherate from '../assets/img/2702027.webp'
import twitter from '../assets/img/free-twitter-logo-icon-2429-thumb.png'
import wifi from '../assets/img/rss-icon.png'
import gmail from '../assets/img/gmail2.png'
import usaGov from '../assets/img/USAGov@2x.png'
import openGov from '../assets/img/OpenGov@2x.png'
import MiddlePage from './MiddlePage'

function Footer() {
  return (
    <div className='container-fluid  container-box'>
     

      {/* <a id='back-top' className='icon-backTop icon-backtop' href='#' title='Scroll To Top'>
        <span className='sr-only'>Back to Top</span></a> */}
      <div className='container footer-container'>

        <img src={frblogo} className='footer' />

        <div className='row footer-content'>

          <div className='col-xs-12 col-sm-4'>
            <h6 className='footer-heading'>
              <span className='text-uppercase'>Board of Governors</span>
              <em> of the</em>
              <span className='text-uppercase'> Federal<br /> reserve system</span>
            </h6>
            <ul className='list-unstyled'>
              <li className='footer__listItem'>
                <a href='https://www.federalreserve.gov/monetarypolicy.htm' className='footer__link'>About the Fed</a>
                <a href='' className='footer__link'>News & Events</a>
                <a href='' className='footer__link'>Monetary Policy</a>
                <a href='' className='footer__link'>Supervision & regulation</a>
                <a href='' className='footer__link'>Payment System</a>
                <a href='' className='footer__link'>Economic Research</a>
                <a href='' className='footer__link'>Data</a>
                <a href='' className='footer__link'>Consumers & Communities</a>
              </li>

            </ul>
          </div>
          <div className='col-xs-12 col-sm-4'>
            <h6 className='footer-heading'>
              <span className='text-uppercase'>Tools and information</span>

              <span className='text-uppercase'></span>
            </h6>
            <ul className='list-unstyled'>
              <li className='footer__listItem'>
                <a href='' className='footer__link'>Contact</a>
                <a href='' className='footer__link'>Publications</a>
                <a href='' className='footer__link'>Freedom of Information(FOIA)</a>
                <a href='' className='footer__link'>Office of Inspector General</a>
                <a href='' className='footer__link'>Budget & Performance | Audit</a>
                <a href='' className='footer__link'>No FEAR Act</a>
                <a href='' className='footer__link'>Espanol</a>
                <a href='' className='footer__link'>Website Policies | Privacy Program</a>
                <a href='' className='footer__link'>Accessibility</a>
              </li>
            </ul>
          </div>
          <div className='col-xs-12 col-sm-4'>
            <div className='footer-social'>
              <h6 className='text-uppercase social-header'>Stay connected</h6>
              <a href='' className=''><img src={facebook} className='icons' /></a>
              <a href='' className=''><img src={instagram} className='icons' /></a>
              <a href='' className=''><img src={youtube} className='icons' /></a>
              <a href='' className=''><img src={attherate} className='icons' /></a>
              <a href='' className=''><img src={linkedin} className='icons' /></a>
              <a href='' className=''><img src={threads} className='icons' /></a>

              <a href='' className=''><img src={twitter} className='icons' /></a>
              <a href='' className=''><img src={wifi} className='icons' /></a>
              <a href='' className=''><img src={gmail} className='icons' /></a>

            </div>
            <a href='' className=''><img src={usaGov} className='logo' /></a>
            <a href='' className=''><img src={openGov} className='logo' /></a>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12 footer-line'>
            <p className='text-uppercase footer-text-footer'> Board of Governors
              <em className='text-lowercase'> of the </em>
              Federal reserve System
            </p>
            <p className=' footer-text-footer'>20th Street and Constitution Avenue N.W., Washington, DC 20551</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer
