import React from 'react'
import '../CssCompound/Genralblog.css';
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';

import { useState, useEffect } from 'react'
import Navbar from './Navbar';
import Subblog from './Subblog';




function ExamBlogs() {


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
            <Helmet>
                <title>Trending Post</title>
                <meta name="description" content="Explore Trending Post" />
            </Helmet>
            <Navbar />
            <div className="sudomain">
                <div className="sudo1">

                    {exams.map(exam => {
                        return (



                            <div className="subsudo1" key={exam.id}>
                                <div className="ss">
                            <Link to={`/exam/${exam.id}`}><h2 className="h9">{exam.ttitle}</h2> 

                                        <p className="p8">{exam.ttitle}</p> </Link>
                         
                                    <p className="p9">{exam.purchase_date} || {exam.date}</p>


                                </div>
                                <div className="im">
                                    <img src={exam.tcover} alt="" />
                                </div>
                            </div>







                        )
                    })}










                </div>

                <div className="sudo2">
                    <Link to="/update">   <h3>Popular in government service</h3></Link>
                    

                    <Subblog />


                </div>

            </div>
        </div>
    )
}

export default ExamBlogs
