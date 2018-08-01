import React from 'react'
import { NavLink } from "react-router-dom";
import './topbar.css'

const TopBar = () => {
  return (
      <div className="navbar navbar-default navbar-fixed-top lplp">
        <div className="container">
            <div className="navbar-header">
              <a href="../" className="navbar-brand">Mesi</a>
              <button type="button" className="navbar-toggle">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <div className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li activeClassName="active">
                  <NavLink to="/login" className="top-a">Log in</NavLink>
                </li>
                <li>
                  <NavLink to="/register" className="top-a">Register</NavLink>
                </li>
              </ul>
            </div>
        </div>
      </div>
  )
}
export default TopBar;

