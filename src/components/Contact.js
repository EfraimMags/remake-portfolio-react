const Contacts = () =>{
    return(

        <div className="mb-4 container"  id ="contact">
          <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
          <p className="text-center w-responsive mx-auto mb-5"><span className="highlight">Are you interested? </span>Please do not hesitate to contact me directly. I will come back to you within
              a matter of hours to help you.</p>

          <div className="row">
              <div className="col-md-9 mb-md-0 mb-5">
                  <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                      <div className="row ">
                          <div className="col-md-6">
                              <div className="md-form mb-0">
                                  <input type="text" id="name" name="name" className="form-control" placeholder="Full Name"/>
                              </div>
                          </div>
                          <div className="col-md-6">
                              <div className="md-form mb-0">
                                <input type="text" id="email" name="email" className="form-control" placeholder="Email"/>
                              </div>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-md-12  mt-2">
                              <div className="md-form mb-0">
                                  <input type="text" id="subject" name="subject" className="form-control" placeholder="subject"/>
                              </div>
                          </div>
                      </div>
                      <div className="row mt-2">
                          <div className="col-md-12">
                              <div className="md-form">
                                  <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea" placeholder="Message"></textarea>
                              </div>
                          </div>
                      </div>
                  </form>

                  <div className="text-center text-md-left mt-3">
                      <a href="#" className="btn my-button" onclick="document.getElementById('contact-form').submit();">Send</a>
                  </div>

              </div>

              <div className="col-md-3 text-center">
                  <ul className="list-unstyled mb-0">
                      <li><i className="fas fa-map-marker-alt fa-2x"></i>
                          <p>Davao Oriental, Martinez phase 8, Adjesum village, Mati city</p>
                      </li>
                      <li><i className="fas fa-phone mt-4 fa-2x"></i>
                          <p>+369237722191</p>
                      </li>
                      <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                          <p>emagdagasng@gmail.com</p>
                      </li>
                  </ul>
              </div>
          </div>
        </div>
    );

}

export default Contacts;