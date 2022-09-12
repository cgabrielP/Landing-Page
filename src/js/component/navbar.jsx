import React from "react";

const Navbar = () => {
    return(
<div className="col-12">
<nav className="navbar navbar-expand-lg navbar-dark bg-dark text-light ">
  <div className="container-fluid ">
      <a className="navbar-brand" href="#">Start Bootstrap</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav text-light">
          <li className="nav-item">
            <a className="nav-link " aria-current="page" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#">Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#">Contacts</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>
    )}
    export default Navbar
    