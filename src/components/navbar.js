import React from "react";
import { NavLink } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <div class="collapse navbar-collapse custom-navmenu" id="main-navbar">
          <div class="container py-2 py-md-5">
            <div class="row align-items-start">
              <div class="col-md-2">
                <nav id="nav">
                  <ul class="custom-menu">
                    <li>
                      <NavLink to="/" exact activeClassName="active">
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/works" activeClassName="active">
                        Works
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/about" activeClassName="active">
                        About Me
                      </NavLink>
                    </li>

                    <li>
                      <NavLink to="/contact" activeClassName="active">
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <nav class="navbar navbar-light custom-navbar">
          <div class="container">
            <a class="navbar-brand" href="/">
              <img
                src="assets/img/logo1.png"
                alt=""
                class="image"
              />
            </a>
            <a
              href="#"
              class="burger"
              data-bs-toggle="collapse"
              data-bs-target="#main-navbar"
            >
              <span></span>
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;

