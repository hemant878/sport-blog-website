// import React from 'react'
import React, { Suspense, lazy } from 'react';

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import Navs from "./Navs"
import '../CssCompound/Box33.css'


// const Nav = lazy(() => import('./Navs'));


function Box33() {

    const [updates, setUpdates] = useState([])




    useEffect(() => {
        fetch('https://hemant878.pythonanywhere.com/blog/update/', {

            'method': 'GET',

            headers: {
                'Content-Type': 'application/json',


            }
        })
            .then(resp => resp.json())
            .then(resp => setUpdates(resp))
            .catch(error => console.log(error))



    }, [])



    return (
        <div>


            {/* <h3 className="sporth3">Crazy Blog</h3> */}

            <div className="sport">

                {updates.slice(0, 1).map(update => {
                    return (





                        <div className="sport1" key={update.id}>
                            <div className="cricketpro1">


                                <Link to={`/update/${update.id}`}>



                                    <img src={update.ucover} alt="" />
                                 
                                </Link>

                            </div>
                            <Link to={`/update/${update.id}`}>
                            <div className="ironman">
                                 <div className="ironmandiv">SPORT</div>
                                <h1>{update.utitle}</h1>
                                <p>{update.usubtitle}</p>


                            </div>
                            </Link>
                            
                         
                        </div>









                    )
                })}








            </div>
        </div>

    );
}

export default Box33
