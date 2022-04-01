import React from 'react'

const EducationSegment = (props) => {
    return(
        <React.Fragment>
            <div className="mb-2">
                <p className="mb-0">
                    <i className="bi bi-mortarboard-fill"></i>
                    <span className="ms-2"><strong>{props.degree}</strong></span>
                </p>
                <p className="ms-4 mb-0">
                    <span className="pe-2 border-end border-dark border-1">{props.school}</span>
                    <span className="ms-2 pe-2 border-end border-dark border-1">{props.timespan}</span>
                    <span className="ms-2">GPA: {props.gpa}</span>
                </p>
                <p className="ms-4 mb-0">{props.minor}</p>
            </div>
        </React.Fragment>
    )
}

export default EducationSegment;