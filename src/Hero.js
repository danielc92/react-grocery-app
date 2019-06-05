import React, { Component } from 'react'

export default class Hero extends Component {
    render() {
        return (
            <React.Fragment>
                    <section className="hero is-info is-medium">
  <div className="hero-head">
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <a href="#" className="navbar-item">
            <strong>GROCERY APP</strong>
          </a>
          <span className="navbar-burger burger" data-target="navbarMenuHeroB">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroB" className="navbar-menu">
          <div className="navbar-end">
            <a className="navbar-item is-active">
              Home
            </a>
            <a href="#" className="navbar-item">
              About
            </a>
            <a href="#" className="navbar-item">
              Contact
            </a>
            <span className="navbar-item">
              <a href="#" className="button is-info is-inverted">
                <span className="icon">
                  <i className="fab fa-github"></i>
                </span>
                <span>Download</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </nav>
  </div>

  <div className="hero-body">
    <div className="container has-text-centered">
      <p className="title">
        Title
      </p>
      <p className="subtitle">
        Subtitle
      </p>
    </div>
  </div>


</section>

            </React.Fragment>
        )
    }
}
