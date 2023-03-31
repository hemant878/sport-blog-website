import React from 'react'
import '../CssCompound/Genralblog.css';
import { Link } from 'react-router-dom'

import { useState, useEffect } from 'react'
import Navbar from './Navbar';
import Subblog from './Subblog';
import { Helmet } from 'react-helmet';





function ExamBlogs() {


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
        <Navbar/>
             <div className="sudomain">
        <div className="sudo1">

        {updates.slice(0,4).map(update => {
                return (
                    
                    
           
                    <div className="subsudo1" key={update.id}>
                <div className="ss">
               <Link to={`/update/${update.id}`}><h2 className="h9">{update.utitle}</h2>

                    <p className="p8">{update.utitle}</p> </Link>
                
                    <p className="p9">{update.purchase_date} || {update.date}</p>


                </div>
                <div className="im">
                    <img src={update.ucover} alt=""/>
                </div>
            </div>







                )
            })}










        </div>

        <div className="sudo2">
        <Link to="/update">   <h3>Popular in government service</h3></Link>
        
    
            <Subblog/>


        </div>

    </div>
        </div>
    )
}

export default ExamBlogs
