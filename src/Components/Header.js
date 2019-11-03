import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../Css/Header.css";
class Header extends Component {
  render() {
    let quantityCart = this.props.listCart;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="/">
            Start Bootstrap
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink activeClassName="active" className="nav-link" to="/">
                  Thông báo(0)
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  exact
                  to="/"
                >
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/services"
                >
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/cart"
                  activeClassName="active"
                  className="nav-link"
                >
                  Giỏ hàng ({quantityCart.length})
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
export default Header;
