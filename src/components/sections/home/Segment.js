import React from 'react'

const Segment = (props) => {
    return(
        <React.Fragment>
            <div className={"row mb-4 " + props.classes} >
                <div className="col">
                    <div className=" bg-light ml-2 mt-3 p-4 shadow">
                        <h3 className="display-5">{props.title}</h3>
                        {props.children}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Segment;