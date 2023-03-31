import React from 'react'
import '../CssCompound/Genralblog.css';
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';

import { useState, useEffect } from 'react'
import Navbar from './Navbar';
import Subblog from './Subblog';
// background-color: cornflowerblue;



function GenralBlogs() {


    const [genrals, setGenrals] = useState([])




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

            <Helmet>
                <title>Updated Blog</title>
                <meta name="description" content="Recently Added Blog" />
            </Helmet>
            <Navbar />
            <div className="sudomain">
                <div className="sudo1">

                    {genrals.map(genral => {
                        return (



                            <div className="subsudo1" key={genral.id}>
                                <div className="ss">
                                 <Link to={`/genral/${genral.id}`}><h2 className="h9">{genral.title}</h2>


                                        <p className="p8">{genral.subtitle}</p></Link>
              
                                    <p className="p9">{genral.purchase_date} || {genral.date}</p>





                                </div>
                                <div className="im">
                                    <img src={genral.cover} alt="" />
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

export default GenralBlogs
