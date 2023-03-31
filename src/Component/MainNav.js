import React from 'react'

import '../CssCompound/Mnav.css'
import Footer from './Footer'
import GenralBlogs from './GenralBlogs'
import MainBox from './MainBox'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'




function MainNav() {
    return (

        <div>
            <Navbar />
            <main>
             
                    {/* <div className="overlayz"></div> */}
                   
            </main>
            {/* <CenterBlog /> */}
            {/* <GenralBlogs/> */}
            <MainBox />
            <Footer />

        </div>

    )
}

export default MainNav
