// import React from 'react'
import React, { Suspense, lazy } from 'react';

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import Navs from "./Navs"
import '../CssCompound/Box33.css'


// const Nav = lazy(() => import('./Navs'));


function Box33() {

    const [exams, setExams] = useState([])



    useEffect(() => {
        fetch('https://hemant878.pythonanywhere.com/blog/exam/', {

            'method': 'GET',

            headers: {
                'Content-Type': 'application/json',


            }
        })
            .then(resp => resp.json())
            .then(resp => setExams(resp))
            .catch(error => console.log(error))



    }, [])



    return (
        <div>


            {/* <h3 className="sporth3">Crazy Blog</h3> */}

            <div className="sport">

                {exams.slice(0, 1).map(exam => {
                    return (





                        <div className="sport1" key={exam.id}>
                        <div className="cricketpro1">
                       

                            <Link to={`/exam/${exam.id}`}>
                         


                                <img src={exam.tcover} alt="" />
                            </Link>

                            </div>

                            <Link to={`/exam/${exam.id}`}>
                            <div className="cricketpro2">
                               <div className="cricketbox1">
                                   <h1>SPORT</h1>
                               </div>
                               <div className="cricketbox2">
                               <h1>{exam.ttitle}</h1>

                               </div>
                               <div className="cricketbox3">
                                   <p>{exam.tsubtitle}</p>
                               </div>
                              

                            </div>
                            </Link>


                        </div>









                    )
                })}
                <h1 className="headline">TRENDING</h1>

                <div className="sport2">
                    {exams.slice(1, 2).map(exam => {
                        return (



                            <div className="subsport2" key={exam.id} >
                            <Link to={`/exam/${exam.id}`}>
                                    <div className="subsport2n">
                                    <div className="cricket1">
                                        <img src={exam.tcover} alt="" />
                                        </div>

                                        <div className="cricket2">
                                        <h1 className="cricket2h11" >{exam.ttitle}</h1>
                                        <p className="cricket2p11">{exam.tsubtitle}</p>

                                        </div>
                                    </div>
                                </Link>
                            </div>







                        )
                    })}

                </div>

                <div className="sport2">
                    {exams.slice(2, 3).map(exam => {
                        return (



                            <div className="subsport2" key={exam.id} >
                                <Link to={`/exam/${exam.id}`}>
                                    <div className="subsport2nn">
                                    <div className="cricket1">
                                        <img src={exam.tcover} alt="" />
                                        </div>

                                        <div className="cricket2">
                                        <h1 className="cricket2h1">{exam.ttitle}</h1>
                                        <p className="cricket2p">{exam.tsubtitle}</p>
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
