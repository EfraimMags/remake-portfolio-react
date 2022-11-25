import bunny from '../assets/project_img/bunny.png'
import snail from '../assets/project_img/snil.png'
import coin from'../assets/project_img/coin.png'
import pooch from'../assets/project_img/pooch.png'
import monkey from '../assets/project_img/monkeybiz.png'

const Projects = () =>{
    return (
       
        <div className="container-fluid mt-5" id = "projects">
        <hr/>
          <div className = "row justify-content-center gap-1 mb-5">
            <div className="col-lg-3 col-md-4  ">
              <div className="row mb-1">
                <div className = "col">
                  <h1>My Projects</h1> 
                  <p className="lead"><span className="highlight">Personal projects and Freelance projects</span></p>
                  <p className="fs-6 ">The projects are the latest projects i did for me and some of the clients from 2020 until the current year</p>
                </div>
              </div>

              <div className="row">
                <div className = "col project-col card">
                  <img src={bunny} class="cardImg card-img-top card-image proj-img" alt="project 1" />
                  <div className="card-body btn-1">
                    <h5 className="card-title">Personal Project 1</h5>
                    <p className="card-text">Digital painting for shirt design</p>
                    <button className=" btn my-button">view project <i className="bi bi-eye"></i></button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 project-col justify-content-md-start card">
                <img src={snail} className=" cardImg card-img-top card-image proj-img" alt="project 1" />
                <div className="card-body btn-2">
                  <h5 className="card-title">Illustration For Instagram</h5>
                  <p className="card-text">creating kawaii animals, this project is for personal only. Its sole purpose is to give me another client butit turns out....</p>
                  <button  className="btn my-button">view project <i className="bi bi-eye"></i></button>
                </div>
            </div>

            <div className="col-lg-3 col-md-4 project-col justify-content-md-start card">
              <img src={coin} className=" cardImg card-img-top card-image proj-img" alt="project 1" />
              <div className="card-body btn-3">
                <h5 className="card-title">Boo Dating App App coin</h5>
                <p className="card-text">The Task is to create a graphic design for their coin app</p>
                <button  className="btn my-button">view project <i className="bi bi-eye"></i></button>
              </div>

            </div>
            <div className="col-lg-2 col-md-4">
              <div className="row mb-1">
                <div className="col project-col  justify-content-md-start card"> 
                  <img src={pooch} className=" cardImg card-img-top card-image proj-img" alt="project 1" />
                  <div className="card-body btn-4">
                  <h5 className="card-title">Pooch For Nfts</h5>
                  <button className="btn my-button">view project <i className="bi bi-eye"></i></button>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col project-col card"> 
                  <img src={monkey} className="cardImg card-img-top card-image proj-img" alt="project 1" />
                  <div className="card-body btn-5">
                  <h5 className="card-title">Monkey Nfts</h5>
                  <button className="btn my-button">view project   <i className="bi bi-eye"></i></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



    );
}

export default Projects;