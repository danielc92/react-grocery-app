import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Hero extends Component {
    render() {
        return (
            <React.Fragment>
                    <section className="hero is-info is-medium">
  <div className="hero-head">
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <a href="http://localhost:3000" className="navbar-item">
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
            <Link to="/" className="navbar-item">Home</Link>
            <Link to="/about" className="navbar-item">About</Link>
            <span className="navbar-item">
              <a href="https://github.com/danielc92/react-grocery-app" className="button is-info is-inverted">
                <span className="icon">
                  <i className="fab fa-github"></i>
                </span>
                <span>Source Code</span>
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
        React Grocery App
      </p>
      <p className="subtitle">
        Developed by Daniel Corcoran.
      </p>
    </div>
  </div>
</section>

            </React.Fragment>
        )
    }
}
