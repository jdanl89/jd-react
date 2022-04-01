import React from 'react'

const ExperienceSegment = (props) => {
    return(
        <React.Fragment>
            <div className="mb-2">
                <h4 className="display-6 fw-normal mb-1">{props.title}</h4>
                <p className="mb-1 fw-bold">
                    <span className="pe-2 me-2 border-end border-1 border-dark ">{props.company}</span>
                    <span>{props.timespan}</span>
                </p>
                {props.children}
            </div>
        </React.Fragment>
    )
}

export default ExperienceSegment;