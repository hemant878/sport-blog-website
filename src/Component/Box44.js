// import React from 'react'
import React, { Suspense, lazy } from 'react';

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../CssCompound/Box22.css'


// import { Link } from 'react-router-dom'
// import Navs from "./Navs"

// const Nav = lazy(() => import('./Navs'));


function Box22() {

    const [educations, setEducations] = useState([])




    useEffect(() => {
        fetch('https://hemant878.pythonanywhere.com/blog/education/', {

            'method': 'GET',

            headers: {
                'Content-Type': 'application/json',


            }
        })
            .then(resp => resp.json())
            .then(resp => setEducations(resp))
            .catch(error => console.log(error))



    }, [])



    return (
        <div>

<Link  to="/education"> <h3 classNam="h3we">Funny Public Reaction</h3></Link>
          

            <div className="boxw">


                {educations.slice(0, 4).map(education => {
                    return (


                        <div className="boxw1" key={education.id}>

                        <Link to={`/education/${education.id}`}>
                                <img src={education.ecover} alt="" />
                                {/* <h3>{education.etitle}</h3> */}
                                <h3>{education.etitle}</h3> 
                      </Link>


                            



                        </div>







                    )
                })}






            </div>
        </div>




    );
}

export default Box22
