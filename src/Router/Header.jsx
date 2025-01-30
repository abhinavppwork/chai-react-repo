import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
        <Link className="navbar-brand text-success" to="#">Brand</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link text-success active" to="">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-success" to="login">Login</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-success" to="register">Register</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-success" to="technologies">Technologies</Link>
                </li>
            </ul>
        </div>
    </div>
</nav>
    </div>
  )
}

export default Header
