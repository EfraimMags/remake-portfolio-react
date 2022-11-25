import profile from '../assets/profile.svg'

const About = () =>{
    return(

        <div className="my-container container-fluid about" id="about">
            <div className = "row justify-content-center">
              <div className="about-col col-6 text-center gap-3 mt-5 ">
                <img src={profile} alt="monster artist" className = "profilePict"/>
                <h1 className ="mt-5 ">About Me</h1>
                <p className ="lead">Hi I am a local graphic designer and illustrator, I have 1 year experience in video editing on a local news and public affairs and more than 3 years of freelancing. I used illustrator, photoshop, and adobe premiere for editing videos and designing. Right now I'm still improving my art style in digital painting, still progressing and learning new techniques</p>
              </div>
              <hr/>
            </div>
          </div>
        

    );

}

export default About;