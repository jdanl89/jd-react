import React from 'react'
import { Link } from "react-router-dom"

const PageNotFound = () => {
    return(
        <React.Fragment>
            <section className="content-container">
                <div className="container-fluid m-4">
                        <h2>Page Not Found</h2>
                        <p className="mt-4 m-0">Oops! The page you requested does not exist.</p>
                        <Link to="/">Go back to the homepage</Link>
                    </div>
            </section>
        </React.Fragment>
    )
}

export default PageNotFound;