import React, { Suspense, lazy } from 'react';

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../CssCompound/Box22.css'
import TweetEmbed from 'react-tweet-embed';
import { FacebookProvider, EmbeddedPost } from 'react-facebook';


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

            <Link to="/boxpage22"> <h1 className="headh">Public Reaction</h1></Link>

          
            <div className="boxw">


                {educations.slice(0, 6).map(education => {
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
            <div>
                <Link to="/boxpage22"> <button className="boxbtn55">See More</button></Link>

            </div>
        </div>




    );
}

export default Post
