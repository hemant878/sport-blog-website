import React from 'react'
import '../CssCompound/Genralblog.css';
import { Link } from 'react-router-dom'

import { useState, useEffect } from 'react'

function Subblog() {



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
                        {updates.slice(0,4).map(update => {
                return (
                    
            <div className="subsudo2" key={update.id}>
                <div className="ss1">
                    <Link to={`/update/${update.id}`}><h2>{update.utitle}</h2> </Link>
                    <p className="p9">{update.publish}</p>

                   


                </div>
                <div className="imgg">
                    <img src={update.ucover} alt=""/>
                </div>
            </div>

        
            )
            })}

        </div>
    )
}

export default Subblog
