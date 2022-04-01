import React from 'react'

const Demographics = () => {
    return(
        <React.Fragment>
            <p>
                <i className="bi bi-geo-alt-fill"></i>
                <span className="ms-2 text-secondary">Omaha, Nebraska, United States</span>
            </p>
            <p>
                <i className="bi bi-envelope"></i>
                <a href="mailto:jasonedanley@hotmail.com?subject=Inquiry via JasonDanley.com" className="ms-2 text-secondary">jasonedanley@hotmail.com</a>
            </p>
            <p>
                <i className="bi bi-file-earmark-pdf text-danger"></i>
                <a href={require("../../../static/files/resume.pdf")} download="Resume - Jason Danley.pdf" className="ms-2 text-secondary">Download CV</a>
            </p>
            <p>
                <i className="bi bi-linkedin text-primary"></i>
                <a href="https://www.linkedin.com/in/jdanl/" target="blank" className="ms-2 text-secondary">View on LinkedIn</a>
            </p>
        </React.Fragment>
    )
}

export default Demographics;