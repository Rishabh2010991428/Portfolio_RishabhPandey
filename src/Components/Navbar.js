import React from 'react'
import "./Navbar.css";
function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-custom navbar-expand-lg fixed-top ">
        <div className="container-fluid">
          <a className="navbar-brand navbar-custom text-900 text-white" href="#">Rishabh Pandey</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <a className="nav-link hover:text-blue-600 navbar-custom" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link hover:text-blue-600 navbar-custom" href="#">Experience</a>
              </li>
              <li className="nav-item">
                <a className="nav-link hover:text-blue-600 navbar-custom" href="#">Education</a>
              </li>
              <li className="nav-item">
                <a className="nav-link hover:text-blue-600 navbar-custom" href="#">Certification</a>
              </li>
              <li className="nav-item">
                <a className="nav-link hover:text-blue-600 navbar-custom" href="#">Skill</a>
              </li>
              <li className="nav-item">
                <a className="nav-link hover:text-blue-600 navbar-custom" href="#">Contact</a>
              </li>
              {/* <li className="nav-item dropdown">
                <a className="nav-link text-white dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item text-white navbar-custom" href="#">Action</a></li>
                  <li><a className="dropdown-item text-white navbar-custom" href="#">Another action</a></li>
                  <li><a className="dropdown-item text-white navbar-custom" href="#">Something else here</a></li>
                </ul>
              </li> */}
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-warning" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar