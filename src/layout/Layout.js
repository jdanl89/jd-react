import React from 'react'
import Navbar from '../components/navigations/Navbar'
import Footer from '../components/navigations/Footer'

import './Layout.scss'

const Layout = (props) => {
    return(
        <React.Fragment>
            {/* <Navbar /> */}
            <main className="main-content">
                {props.children}
            </main>
            <Footer/>
        </React.Fragment>
    );
}

export default Layout;