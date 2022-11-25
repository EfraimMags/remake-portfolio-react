import ae from '../assets/skills/after-effects.png'
import ap from '../assets/skills/photoshop.png'
import ai from '../assets/skills/illustrator.png'
import pr from '../assets/skills/premiere-pro.png'
import aa from '../assets/skills/adobe-animate.png'
const Tools = () =>{
    return(
        <div className=" container mt-5 " id="tools">
        <div className="row justify-content-center">
          <div className="col text-center"><h1>Tools</h1></div></div>
        <div className = " row justify-content-center gap-3 mb-5">
          <div  className="skill-col skill-col-1 col-lg-2 col-md-4 text-center gap-3 mt-5 ">
            <img className="icon-skills toolImg" src={ap} alt="photoshop" />
            <p>adobe photoshop</p>
          </div>
          <div  className="skill-col skill-col-2 col-lg-2 col-md-4 text-center gap-3 mt-5 ">
            <img className="icon-skills toolImg"src={ae} alt="after Effects" />
            <p>adobe after-effects</p>
          </div>
          <div  className="skill-col skill-col-3 col-lg-2 col-md-4 text-center gap-3 mt-5 ">
            <img className="icon-skills toolImg"src={ai} alt="Illustrator" />
            <p>adobe illustrator</p>
          </div>
          <div  className="skill-col skill-col-4 col-lg-2 col-md-4 text-center gap-3 mt-5 ">
            <img className="icon-skills toolImg"src={pr} alt="adobe priemere" />
            <p>adobe priemere pro</p>
          </div>
          <div  className="skill-col skill-col-5 col-lg-2 col-md-4 text-center gap-3 mt-5 ">
            <img className="icon-skills toolImg"src={aa} alt="[hotoshop" />
            <p>adobe animate</p>
          </div>
        </div>
      </div>

    );
}

export default Tools;