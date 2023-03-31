import React from 'react'
import '../CssCompound/Genralblog.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';



import { useState, useEffect } from 'react'
import Subblog from './Subblog';



function EducationBlogs() {


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
        <div>
        <Navbar/>
             <div className="sudomain">
        <div className="sudo1">

        {educations.map(education => {
                return (
                    
                    
           
                    <div className="subsudo1" key={education.id}>
                <div className="ss">
                <Link to={`/education/${education.id}`}><h2 className="h9">{education.etitle}</h2>
                    
                    <p className="p8">{education.etitle} {education.etitle}</p> </Link>
                   
                    <p className="p9">{education.purchase_date} || {education.date}</p>


                </div>
                <div className="im">
                    <img src={education.ecover} alt=""/>
                </div>
            </div>







                )
            })}










        </div>

        <div className="sudo2">
            <h3>Popular in government service</h3>
    
         <Subblog/>



        </div>

    </div>
        </div>
    )
}




export default EducationBlogs
