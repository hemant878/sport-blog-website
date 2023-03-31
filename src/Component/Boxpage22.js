import React, { Suspense, lazy } from 'react';

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../CssCompound/Box22.css'
import TweetEmbed from 'react-tweet-embed';
import { FacebookProvider, EmbeddedPost } from 'react-facebook';
import Navbar from './Navbar';
import { Helmet } from 'react-helmet';



// import { Link } from 'react-router-dom'
// import Navs from "./Navs"

// const Nav = lazy(() => import('./Navs'));


function Post() {

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
            <Helmet>
                <title>Public Reactions</title>
                <meta name="description" content="Funny Public Reaction" />
            </Helmet>
            <Navbar />


            <Link to="/boxpage22"> <h1 className="headh">Public Reaction</h1></Link>

            <div className></div>
            <div className="boxw">


                {educations.map(education => {
                    return (


                        <div className="boxw1" key={education.id}>



                          <h1 className="funh1">{education.etitle}</h1>

                            <div className="nntweet">
                                <TweetEmbed id={education.tweet1} />
                            </div>










                        </div>







                    )
                })}






            </div>

        </div>




    );
}

export default Post
