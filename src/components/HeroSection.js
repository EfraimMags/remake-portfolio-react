import monster from '../assets/monster.svg'
import behance from '../assets/behance.png'
import fb from '../assets/facebook-app-symbol.png'
import twitter from '../assets/twitter.png'
import github from '../assets/github.png'
const HeroSection = () =>{
    return (

        <div className=" container justify-content-center col-xxl-8 px-4 py-5" id = "heroSec">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="my-col col-md-12 col-xs-12 col-sm-12 col-lg-6 text-center">
              <img  id="hero-img"src ={monster} width="400px" height="400px" alt="monster"/>
            </div> 

            <div className="my-col col-lg-6">
              <h1 id="text"class="display-5 fw-bold lh-1 mb-3">Hi! I am Efraim</h1>
              <p className="lead">I design and create illustrations. I bring art and life to your business.<span className="highlight"> I'll help you bring more customers through design. </span>  </p>
              <div className="d-flex justify-content-md-start gap-2">
               <a href="https://www.behance.net/yepmags" rel="noopener noreferrer"> <img src = {behance} className="icons" alt="behance"/> </a>
               <a href="https://www.facebook.com/yipyipyeptpey " rel="noopener noreferrer"><img src = {fb} className="icons" alt="facebook"/> </a>
               <a href="/"><img src = {twitter} className="icons" alt="twitter" rel="noopener noreferrer"/> </a>
               <a href="https://github.com/EfraimMags" rel="git"><img src = {github} className="icons" alt="github"/> </a>
              </div>
              <div className="d-grid gap-1 d-md-flex justify-content-md-start">

              <a href ="#contact" rel="contact"> <button  className ="my-button btn  btn-lg px-4 me-md-2">Contact me </button></a>
              <a href ="#about" rel="about"> <button  className ="btn btn-outline-secondary btn-lg px-4">Get to know me</button></a> 
              </div>
            </div>
          </div>
         </div>
        
        
    );
}


export default HeroSection;