import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white border-bottom border-dark shadow d-print-none">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand mx-2">Jason Danley</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-content" aria-controls="#navbar-content" aria-expanded="false" aria-label="Toggle Navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="navbar-content" className="collapse navbar-collapse">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbar-portfolio" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Portfolio
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark" aria-labelledby="navbar-portfolio">
                                <li><Link to="/Portfolio" className="dropdown-item">Portfolio Item</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;