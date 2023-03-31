// import React from 'react'
import React, { Suspense, lazy } from 'react';

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import Navs from "./Navs"
import '../CssCompound/Box33.css'


// const Nav = lazy(() => import('./Navs'));


function Box33() {

    const [genrals, setGenral] = useState([])




    useEffect(() => {
        fetch('https://hemant878.pythonanywhere.com/blog/genral/', {

            'method': 'GET',

            headers: {
                'Content-Type': 'application/json',


            }
        })
            .then(resp => resp.json())
            .then(resp => setGenral(resp))
            .catch(error => console.log(error))



    }, [])



    return (
        <div>


            <div className="sport">

               

                <div className="sport2">
                    {genrals.slice(3, 4).map(genral => {
                        return (



                            <div className="subsport2" key={genral.id} >
                            <Link to={`/genral/${genral.id}`}>
                                    <div className="subsport2n">
                                    <div className="cricket1">
                                        <img src={genral.cover} alt="" />
                                        </div>

                                        <div className="cricket2">
                                        <h1 className="cricket2h11" >{genral.title}</h1>
                                        <p className="cricket2p11">{genral.subtitle}</p>

                                        </div>
                                    </div>
                                </Link>
                            </div>







                        )
                    })}

                </div>

                <div className="sport2">
                    {genrals.slice(4, 5).map(genral => {
                        return (



                            <div className="subsport2" key={genral.id} >
                            <Link to={`/genral/${genral.id}`}>
                                    <div className="subsport2nn">
                                    <div className="cricket1">
                                        <img src={genral.cover} alt="" />
                                        </div>

                                        <div className="cricket2">
                                        <h1 className="cricket2h1">{genral.title}</h1>
                                        <p className="cricket2p">{genral.subtitle}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>







                        )
                    })}

                </div>


                
                <div className="sport2">
                    {genrals.slice(5, 6).map(genral => {
                        return (



                            <div className="subsport2" key={genral.id} >
                            <Link to={`/genral/${genral.id}`}>
                                    <div className="subsport2n">
                                    <div className="cricket1">
                                        <img src={genral.cover} alt="" />
                                        </div>

                                        <div className="cricket2">
                                        <h1 className="cricket2h11" >{genral.title}</h1>
                                        <p className="cricket2p11">{genral.subtitle}</p>

                                        </div>
                                    </div>
                                </Link>
                            </div>







                        )
                    })}

                </div>





            </div>
        </div>

    );
}

export default Box33
