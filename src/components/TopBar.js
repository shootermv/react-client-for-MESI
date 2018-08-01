import React from 'react'
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
                  <li className="active">
                    <a className="top-a" href="/login">Log in</a>
                  </li>
                  <li><a className="top-a" href="/register">Register</a></li>
              </ul>
            </div>
        </div>
      </div>
  )
}
export default TopBar;

