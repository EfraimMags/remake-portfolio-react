const HeroSection = () =>{
    return (
    
        <div class=" container justify-content-center col-xxl-8 px-4 py-5" id = "heroSec">
          <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div class="my-col col-md-12 col-xs-12 col-sm-12 col-lg-6 text-center">
              <img  id="hero-img"src ={} width="400px" height="400px">
            </div> 
            <div class="my-col col-lg-6">
              <h1 id="text"class="display-5 fw-bold lh-1 mb-3"></h1>
              <p class="lead">I design and create illustrations. I bring art and life to your business.<span class="highlight"> I'll help you bring more customers through design. </span>  </p>
              <div class="d-flex justify-content-md-start gap-2">
               <a href="https://www.behance.net/yepmags"> <img src = {} class="icons"> </a>
               <a href="https://www.facebook.com/yipyipyeptpey"><img src = {} class="icons"> </a>
               <a href="#"><img src = {} class="icons"> </a>
               <a href="https://github.com/EfraimMags"><img src = {}class="icons"> </a>
              </div>
              <div class="d-grid gap-1 d-md-flex justify-content-md-start">
                <button  class="btn my-button btn-lg px-4 me-md-2">Contact me <i class="bi bi-arrow-right-circle"></i></button>
                <button  class="btn btn-outline-secondary btn-lg px-4">Get to know me</button>
              </div>
            </div>
          </div>
         </div>
        
        
    );
}


export default HeroSection;