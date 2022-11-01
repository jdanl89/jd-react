import React from 'react'

import headshot from '../../../static/images/headshot.jpg'
import './Header.scss'

const Header = () => {
    return (
        <React.Fragment>
            <div id="header" className="bg-dark bg-gradient text-light shadow">
                <div className="col m-4">
                    <div className="row justify-content-center">
                        {/* Profile Image */}
                        <div className="col-12 col-sm-auto text-sm-start text-center d-print-none">
                            <img src={headshot} className="img-thumbnail rounded-circle shadow-lg" alt="profile image" />
                        </div>

                        {/* Name and Title */}
                        <div className="col-12 col-sm-auto col-lg pt-4 pt-md-0 text-sm-start text-center">
                            <h1 className="display-1">Jason Danley</h1>
                            <h2 className="display-3 text-muted text-lowercase">Technical Lead</h2>
                        </div>

                        {/* Links */}
                        <div className="col-12 col-lg-auto pt-lg-4 pt-md-0 pt-4 text-center d-print-none">
                            <div className="row">
                                <div className="col">
                                    <a href="mailto:jasonedanley@hotmail.com?subject=Inquiry from JasonDanley.com" className="btn btn-primary shadow m-2"><i className="bi bi-envelope"></i><span className="ms-2">Email</span></a>
                                    <a href="skype:live:jasonedanley?chat" className="btn btn-outline-light shadow m-2"><i className="bi bi-skype"></i><span className="ms-2">Chat</span></a>
                                </div>
                            </div>
                            <div className="row">
                            <div className="col">
                                <a href="https://www.linkedin.com/in/jdanl" target="_blank" className="btn btn-dark btn-floating m-2" role="button">
                                    <i className="bi bi-linkedin"></i>
                                    <span className="visually-hidden">LinkedIn</span>
                                </a>
                                <a href="https://www.github.com/jdanl89" target="_blank" className="btn btn-dark btn-floating m-2" role="button">
                                    <i className="bi bi-github"></i>
                                    <span className="visually-hidden">Github</span>
                                </a>
                                <a href="https://www.facebook.com/jdanl" target="_blank" className="btn btn-dark btn-floating m-2" role="button">
                                    <i className="bi bi-facebook"></i>
                                    <span className="visually-hidden">Facebook</span>
                                </a>
                                <a href="https://www.twitter.com/_jdDev" target="_blank" className="btn btn-dark btn-floating m-2" role="button">
                                    <i className="bi bi-twitter"></i>
                                    <span className="visually-hidden">Twitter</span>
                                </a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Header;
