import fb from '../assets/facebook-app-symbol.png'
import gitHub from '../assets/github.png'
import behance from '../assets/behance.png'
import twitter from '../assets/twitter.png'
const Footer = () =>{
    return(
        <div className="container-fluid footer ">
          <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col-md-4 d-flex align-items-center">
              <span className="mb-3 mb-md-0 text-muted">© 2022 EMAGS Dezignsssss, Inc</span>
            </div>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex gap-1">
              <li className="ms-3"><a className="text-muted" href="https://www.facebook.com/yipyipyeptpey"><img src={fb} className="icons" alt="facebook"/></a></li>
              <li className="ms-3"><a className="text-muted" href="https://github.com/EfraimMags"><img src={gitHub} className="icons" alt="gitHub"/></a></li>
              <li className="ms-3"><a className="text-muted" href="#"><img src={twitter} className="icons" alt="twitter"/></a></li>
              <li className="ms-3"><a className="text-muted" href="https://www.behance.net/yepmags"><img src={behance} className ="icons" alt="behance"/></a></li>
            </ul>
          </footer>
        </div>

    );


}

export default Footer;