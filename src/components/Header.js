import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

export default class Header extends Component {
  render() {
    return <div>
    <header>

        <nav className="navbar navbar-expand-lg navbar-dark bg-light fixed-top">
            <div className="container">
                <a className="navbar-brand logo-font" href="#">
                    KHOBOR
                </a>
             
                <button className="navbar-toggler order-first" type="button" data-toggle="collapse" data-target="#links"
                    aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa fa-bars"></i>
                </button>
               
                <button className="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#account"
                    aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa fa-user"></i>
                </button>

                <div className="collapse navbar-collapse" id="links">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="index.html">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Discover</a>
                        </li>
                    </ul>
                </div>
                <div className="collapse navbar-collapse" id="account">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item"><a className="nav-link" href="#">Register</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Log in</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
  </div>
  }
}
