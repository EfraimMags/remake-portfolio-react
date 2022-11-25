const Header = () => {
    return(
        
        <div className = "container-fluid navigation">
            <header className="d-flex flex-wrap justify-content-center py-1 mb-4 border-bottom border-light ">
              <a href="#" className=" logo d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                <h4 className="fw-bold mt-1 fs-6">EM</h4>
              </a>
              <ul class="nav nav-pills list">
                <li className="nav-1 nav-item" ><a href="#heroSec" className="nav-link" aria-current="page">Home</a></li>
                <li className="nav-2 nav-item" ><a href="#about" className="nav-link">About</a></li>
                <li className="nav-3 nav-item" ><a href="#tools" className="nav-link">Tools</a></li>
                <li className="nav-4 nav-item" ><a href="#projects" className="nav-link">Projects</a></li>
                <li className="nav-5 nav-item" ><a href="#contact" className="nav-link">Contact</a></li>
              </ul>
            </header>
          </div>

    );
}

export default Header;