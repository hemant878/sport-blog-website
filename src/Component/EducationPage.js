import React from 'react'
import {useState,useEffect} from 'react'
import '../CssCompound/Page.css';
import Nav2 from './Nav2';
import ReactHtmlParser from 'react-html-parser'




function EducationPage(props) {
    const[education,setEducation] = useState([])

  
    

    useEffect(() =>{
  

    const slug = props.match.params.id; 

        fetch(`https://hemant878.pythonanywhere.com/blog/education/${slug}`,{
            
            'method':'GET',
                 
            headers:{
             'Content-Type':'application/json',
            

            }
        } )
        .then(resp => resp.json()) 
        .then(resp => setEducation(resp))
        .catch(error => console.log(error))
        


    },[props.match.params.id]);

    
    
    return (
        
        <div>
            
       
     <Nav2/>
 
    <main>
        <div className="head">
            <h1>{education.etitle}</h1>
            <div className="imgblog">
                <img src={education.ecover} alt=""/>
                <h3>{education.esubtitle}</h3>
            </div>

            <div>
            <p className="pp9">{education.purchase_date}||{education.date}</p>
                
            </div>
        </div>
    </main>


    <div className="midimg">

        <img src={education.ecover} alt="" width="1880" height="1200"/>

    </div>





    <div className="paracenter c">
        <div className="a">
            <div>{ReactHtmlParser(education.title2)}</div>
        </div>
        {education.ecover2 != null ? 
        <div className="aimg">
            <img src={education.ecover2} alt="" width="1880" height="1200"/>
           
        </div>
        :
        <div className="aimg">
            <img   src=''  alt="" width="1800" height="1200" style={{display:'none'}}/>
           
        </div> 
        }
    </div>


    <div className="paracenter">
        <div className="a">
        <div>{ReactHtmlParser(education.title3)}</div>

        </div>
        {education.ecover3 != null ? 
        <div className="aimg">
            <img src={education.ecover3} alt="" width="1880" height="1200"/>
           
        </div>
        :
        <div className="aimg">
            <img   src=''  alt="" width="1800" height="1200" style={{display:'none'}}/>
           
        </div> 
        }
    </div>



    <div className="paracenter">
        <div className="a">
        <div>{ReactHtmlParser(education.title4)}</div>

        </div>
        {education.ecover4 != null ? 
        <div className="aimg">
            <img src={education.ecover4} alt="" width="1880" height="1200"/>
           
        </div>
        :
        <div className="aimg">
            <img   src=''  alt="" width="1800" height="1200" style={{display:'none'}}/>
           
        </div> 
        }
    </div>





    
    <div className="paracenter">
        <div className="a">
        <div>{ReactHtmlParser(education.title5)}</div>

        </div>
        {education.ecover5 != null ? 
        <div className="aimg">
            <img src={education.ecover5} alt="" width="1880" height="1200"/>
           
        </div>
        :
        <div className="aimg">
            <img   src=''  alt="" width="1800" height="1200" style={{display:'none'}}/>
           
        </div> 
        }
    </div>

     



        
     
        </div>
    );
}

export default EducationPage