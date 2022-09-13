import React from "react";
import PropTypes from "prop-types";


const Navbar = ({ navbar }) => {
  return (
    <div className="col-12">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-light ">
        <div className="container">
          <a className="navbar-brand" href="#">{navbar.logo}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav text-light ">
              {
                navbar.options.map(({ link, label }, index) => {
                  return (
                    <li className="nav-item" key={index}><a className="nav-link" href={link}>{label}</a></li>)
                })
              }

            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
Navbar.propTypes = {
  navbar: PropTypes.object.isRequired
}
export default Navbar
