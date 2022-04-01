import React from 'react'

import Header from '../sections/home/Header'
import About from '../sections/home/About'
import Demographics from '../sections/home/Demographics'
import Education from '../sections/home/Education'
import Experience from '../sections/home/Experience'
import Portfolio from '../sections/home/Portfolio'
import Services from '../sections/home/Services'

import Segment from '../sections/home/Segment'

const Home = () => {
    return(
        <React.Fragment>
            <div className="container-fluid">
                <div className="row">
                    <Header />
                </div>
                <div className="row mt-4 mb-4 mx-4">
                    <div className="col-lg-8">
                        <Segment title="About Me">
                            <About />
                        </Segment>
                        <Segment title="Work Experience">
                            <Experience />
                        </Segment>
                    </div>
                    <div className="col-lg-4">
                        <Segment classes="d-print-none" >
                            <Demographics />
                        </Segment>
                        <Segment title="Education">
                            <Education />
                        </Segment>
                        <Segment title="Services Offered">
                            <Services />
                        </Segment>
                        {/* <Segment title="Portfolio">
                            <Portfolio />
                        </Segment> */}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home;