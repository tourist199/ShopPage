import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'
import './Header.css'

class Header extends Component {
   
    render() {
        var listcart = this.props.listcart;
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="/">Start Bootstrap</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <NavLink  activeClassName="active1" to="/cart">
                                <li className="nav-item">
                                    <p className="nav-link">Cart ({listcart.length})</p>
                                </li>
                            </NavLink>
                            <NavLink activeClassName="active1" exact to="/" >
                                <li className="nav-item">
                                    <p className="nav-link">Home</p>
                                </li>
                            </NavLink>
                            <NavLink activeClassName="active1" to="/About">
                                <li className="nav-item">
                                    <p className="nav-link">About</p>
                                </li>
                            </NavLink>
                            <NavLink activeClassName="active1" to="/Services">
                                <li className="nav-item">
                                    <p className="nav-link" >Services</p>
                                </li>
                            </NavLink>
                            <NavLink activeClassName="active1" to="/Contact">
                                <li className="nav-item">
                                    <p className="nav-link">Contact</p>
                                </li>
                            </NavLink>
                        </ul>
                    </div>
                </div>
            </nav>

        )
    }
}
export default Header;
