// import React from 'react'
import React, { Suspense, lazy } from 'react';


import { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../CssCompound/Box11.css'



import Carousel from 'react-elastic-carousel';
import Subbox11 from './Subbox11'
import Bigpost from './Bigpost'


// import Navs from "./Navs"

// const Nav = lazy(() => import('./Navs'));


function Box11() {

    const [genrals, setGenrals] = useState([])

    
    const breakPoints = [
        {width: 500 , itemsToShow:1},
        {width: 750 , itemsToShow:1},
        {width: 1200 , itemsToShow:2.2}
        // {width: 500 , itemsToShow:1},

    ];


    useEffect(() => {
        fetch('https://hemant878.pythonanywhere.com/blog/genral/', {

            'method': 'GET',

            headers: {
                'Content-Type': 'application/json',


            }
        })
            .then(resp => resp.json())
            .then(resp => setGenrals(resp))
            .catch(error => console.log(error))



    }, [])



    return (
        <div>
        <div className="mainspot">
            <Link to="/education"><h1 className="headkk">Businessman</h1></Link>

            <Carousel breakPoints={breakPoints}>














                <div className="mmq">


                    {/* <Link to="/education"><h3>Businessman jjjjjjjjjjjjjjj</h3></Link> */}
                    <div className="mainq">
                        <div className="mainqq1">


                            {genrals.slice(0, 1).map(genral => {
                                return (


                                    <div key={genral.id}>

                                        <Link to={`/genral/${genral.id}`}>

                                            <div className="mainq1">
                                                {/* <h1>{genral.title}</h1> */}
                                                <img src={genral.cover} alt="" />
                                                <h1>{genral.title}</h1>

                                                {/* <p>{genral.title2}</p> */}
                                            </div>


                                        </Link>

                                    </div>







                                )
                            })}
                        </div>





                    </div>
                </div>













                <div className="mmq">


                    {/* <Link to="/education"><h3>Businessman jjjjjjjjjjjjjjj</h3></Link> */}
                    <div className="mainq">
                        <div className="mainqq1">


                            {genrals.slice(1, 2).map(genral => {
                                return (


                                    <div key={genral.id}>

                                        <Link to={`/genral/${genral.id}`}>

                                            <div className="mainq1">
                                                
                                                <img src={genral.cover} alt="" />
                                                <h1>{genral.title}</h1>

                                                {/* <p>{genral.title2}</p> */}
                                            </div>


                                        </Link>

                                    </div>







                                )
                            })}
                        </div>





                    </div>
                </div>





















                <div className="mmq">


                    {/* <Link to="/education"><h3>Businessman jjjjjjjjjjjjjjj</h3></Link> */}
                    <div className="mainq">
                        <div className="mainqq1">


                            {genrals.slice(2, 3).map(genral => {
                                return (


                                    <div key={genral.id}>

                                        <Link to={`/genral/${genral.id}`}>

                                            <div className="mainq1">
                                                {/* <h1>{genral.title}</h1> */}
                                                <img src={genral.cover} alt="" />
                                                <h1>{genral.title}</h1>

                                                {/* <p>{genral.title2}</p> */}
                                            </div>


                                        </Link>

                                    </div>







                                )
                            })}
                        </div>





                    </div>
                </div>








            </Carousel>








    


        </div>
        <Subbox11/>
        <Bigpost/>
       
        </div>

    );
}

export default Box11
