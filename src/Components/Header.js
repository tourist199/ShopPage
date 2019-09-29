import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="/">Start Bootstrap</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                        
                                <li className="nav-item ">
                                    <NavLink to="/" exact activeClassName="active" >Home
                                        <span className="sr-only">(current)</span>
                                    </NavLink>
                                </li>
                            
                            
                                <li className="nav-item">
                                    <NavLink activeClassName="active1" className="nav-link" to="/About">About</NavLink>
                                </li>
                   
                            
                            <li className="nav-item">
                                <a className="nav-link" href="/Services">Services</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/Contact">Contact</a>
                            </li>

                            <NavLink activeClassName="active1" to='/cart'>
                                <li className="nav-item">
                                    <p className>Cart({this.props.cart.length})<i class="fas fa-cart-arrow-down"></i></p>
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
