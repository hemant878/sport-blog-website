import React from 'react'
import {useState,useEffect} from 'react'
import '../CssCompound/Page.css';
import Nav2 from './Nav2';
import ReactHtmlParser from 'react-html-parser'
import YouTube from "react-youtube";
import TweetEmbed from 'react-tweet-embed';
import { FacebookProvider, EmbeddedPost } from 'react-facebook';
import Footer from './Footer';
import { BoltLoader } from "react-awesome-loaders";







function GenralPage(props) {
    const[exam,setExam] = useState([])
   


  
    

    useEffect(() =>{
  

    const slug = props.match.params.id; 

        fetch(`https://hemant878.pythonanywhere.com/blog/exam/${slug}`,{
            
            'method':'GET',
                 
            headers:{
             'Content-Type':'application/json',
            

            }
        } )
        .then(resp => resp.json()) 
        .then(resp => setExam(resp))
        .catch(error => console.log(error))
        
    

    },[props.match.params.id]);


    const opts = {
        height: "400px",
        width: "100%",
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0
        }
      };
    
    
   
    return (



        <div>
          
                        <Nav2 />


                        <main>
                            <div className="head">
                                <h1>{exam.ttitle}</h1>
                                <div className="imgblog">
                                    <img src={exam.tcover} alt="" />
                                    <h3>{exam.tsubtitle}</h3>
                                </div>

                                <div>
                                    <p className="pp9">{exam.purchase_date}||{exam.date}</p>

                                </div>
                            </div>
                        </main>


                        <div className="midimg">

                            <img src={exam.tcover} alt="" width="1880" height="1200" />

                        </div>





                        <div className="paracenter c">
                            <div className="a">
                                <div>{ReactHtmlParser(exam.ttitle2)}</div>
                            </div>


                            <div className="aimg">
                                <YouTube videoId={exam.yt1} opts={opts} />
                            </div>


                        </div>


                        <div className="paracenter">
                            <div className="a">
                                <div>{ReactHtmlParser(exam.ttitle3)}</div>

                            </div>
                            {exam.tcover3 != null ?
                                <div className="aimg">
                                    <img src={exam.tcover3} alt="" width="1880" height="1200" />

                                </div>
                                :
                                <div className="aimg">
                                    <img src='' alt="" width="1800" height="1200" style={{ display: 'none' }} />

                                </div>
                            }
                        </div>



                        <div className="paracenter">
                            <div className="a">
                                <div>{ReactHtmlParser(exam.ttitle4)}</div>

                            </div>

                            <div className="aimg">

                                <TweetEmbed id={exam.tweet1} />



                            </div>

                        </div>




                        <div className="paracenter">
                            <div className="a">
                                <div>{ReactHtmlParser(exam.ttitle5)}</div>

                            </div>

                            <div className="aimg">
                                <TweetEmbed id={exam.tweet2} />


                            </div>

                        </div>




                        <div className="paracenter">
                            <div className="a">
                                

                            </div>

                            <div className="aimg">
                                <TweetEmbed id={exam.fb1} />


                            </div>

                        </div>




                        <div className="paracenter">
                            <div className="a">
                               

                            </div>

                            <div className="aimg">
                                <TweetEmbed id={exam.fb2} />


                            </div>

                        </div>




                        <div className="paracenter">
                            <div className="a">
                                

                            </div>

                            <div className="aimg">
                                <TweetEmbed id={exam.yt2} />


                            </div>

                        </div>




                        <div className="paracenter">
                            <div className="a">
                                <div>{ReactHtmlParser(exam.ttitle5)}</div>

                            </div>
                            {exam.tcover5 != null ?
                                <div className="aimg">
                                    <img src={exam.tcover5} alt="" width="1880" height="1200" />

                                </div>
                                :
                                <div className="aimg">
                                    <img src='' alt="" width="1800" height="1200" style={{ display: 'none' }} />

                                </div>
                            }
                        </div>


                        <div className="paracenter">


                            <div className="aimg">
                                <div className="crazyfacee" style={{ backgroundColor: 'white' }}>

                                    <FacebookProvider appId="1256004414839706">
                                        <EmbeddedPost href={exam.fb1} width='100%' height={398} style={{ border: 'none', overflow: 'hidden' }} scrolling="no" frameBorder={0} allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" />
                                    </FacebookProvider>
                                </div>


                            </div>

                        </div>






                        <Footer />
                    

            
        </div>
    );
}

export default GenralPage
