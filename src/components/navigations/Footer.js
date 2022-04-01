import React from 'react'

const Footer = () => {
    return(
        <footer className="text-lg-start text-white bg-dark py-2 d-print-none">
            <div className="container-fluid text-center">
                <div className="row">
                    <div className="col">
                        <a href="mailto:jasonedanley@hotmail.com?subject=Inquiry from JasonDanley.com" target="_blank" className="btn btn-dark btn-floating m-2" role="button">
                            <i className="bi bi-envelope"></i>
                            <span className="visually-hidden">Email</span>
                        </a>
                        <a href="skype:live:jasonedanley?chat" target="_blank" className="btn btn-dark btn-floating m-2" role="button">
                            <i className="bi bi-skype"></i>
                            <span className="visually-hidden">Skype</span>
                        </a>
                        <a href="https://www.linkedin.com/in/jdanl" target="_blank" className="btn btn-dark btn-floating m-2" role="button">
                            <i className="bi bi-linkedin"></i>
                            <span className="visually-hidden">LinkedIn</span>
                        </a>
                        <a href="https://www.github/jdanl89" target="_blank" className="btn btn-dark btn-floating m-2" role="button">
                            <i className="bi bi-github"></i>
                            <span className="visually-hidden">Github</span>
                        </a>
                        <a href="https://www.facebook.com/jdanl" target="_blank" className="btn btn-dark btn-floating m-2" role="button">
                            <i className="bi bi-facebook"></i>
                            <span className="visually-hidden">Facebook</span>
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <span className="text-white-50 m2">&copy; 2022 Jason Danley. All rights reserved.</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;