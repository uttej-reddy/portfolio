import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link  font-weight-bold" href="#">
              Homes <span class="sr-only">(current)</span>
            </a>
            <a
              class="nav-item nav-link font-weight-bold"
              data-toggle="collapse"
              data-target="#navbarToggleExternalContent"
              href="#"
            >
              About Me
            </a>
            <a class="nav-item nav-link font-weight-bold" href="#">
              Projects
            </a>
            <a class="nav-item nav-link font-weight-bold" href="#">
              Interests
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
