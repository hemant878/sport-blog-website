import React, { Suspense, lazy } from 'react';

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../CssCompound/Box22.css'
import TweetEmbed from 'react-tweet-embed';
import { FacebookProvider, EmbeddedPost } from 'react-facebook';


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

        <div className="ssbox">

            <Link to="/education"> <h1 className="headh">Public Reaction</h1></Link>

            <div className></div>
            <div className="boxw">


                {educations.slice(0, 5).map(education => {
                    return (


                        <div className="boxw1" key={education.id}>



                            <Link to={`/education/${education.id}`}>
                                {/* <img className = "boxw1img"src={education.ecover} alt="" /> */}
                                {/* <h3>{education.etitle}</h3> */}
                                {/* <h3>{education.etitle}</h3> */}

                                <div>
                                    <TweetEmbed id={education.etitle} />
                                </div>

                                <div style={{backgroundColor:'white'}}>

                                    <FacebookProvider appId="1256004414839706">
                                        <EmbeddedPost href="https://www.facebook.com/photo?fbid=420138492804148&set=a.305807924237206"  width={500} height={398} style={{border: 'none', overflow: 'hidden'}} scrolling="no" frameBorder={0} allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" />
                                    </FacebookProvider>
                                </div>



                            </Link>






                        </div>







                    )
                })}






            </div>
            <div>
                <Link to="/boxpage22"> <button className="boxbtn55">See More</button></Link>

            </div>
        </div>




    );
}

export default Box22