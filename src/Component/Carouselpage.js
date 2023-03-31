import React from 'react'
import { useState, useEffect } from 'react'
import '../CssCompound/Page.css';
import Nav2 from './Nav2';
import ReactHtmlParser from 'react-html-parser'
import YouTube from "react-youtube";
import TweetEmbed from 'react-tweet-embed';
import { FacebookProvider, EmbeddedPost } from 'react-facebook';
import Footer from './Footer';
import Box22 from './Box22'







function CrazyPage(props) {
    const [genral, setGenral] = useState([])




    useEffect(() => {


        const slug = props.match.params.id;

        fetch(`https://hemant878.pythonanywhere.com/blog/genral/${slug}`, {

            'method': 'GET',

            headers: {
                'Content-Type': 'application/json',


            }
        })
            .then(resp => resp.json())
            .then(resp => setGenral(resp))
            .catch(error => console.log(error))



    }, [props.match.params.id]);


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
                    <h1>{genral.title}</h1>
                    <div className="imgblog">
                        <img src={genral.cover} alt="" />
                        <h3>{genral.subtitle}</h3>
                    </div>

                    <div>
                        <p className="pp9">{genral.purchase_date}||{genral.date}</p>

                    </div>
                </div>
            </main>


            <div className="midimg">

                <img src={genral.cover} alt="" width="1880" height="1200" />

            </div>





            <div className="paracenter c">
                <div className="a">
                    <div>{ReactHtmlParser(genral.title2)}</div>
                </div>


                <div className="aimg">
                    <YouTube videoId={genral.yt1} opts={opts} />
                </div>


            </div>


            <div className="paracenter">
                <div className="a">
                    <div>{ReactHtmlParser(genral.title3)}</div>

                </div>
                {genral.cover3 != null ?
                    <div className="aimg">
                        <img src={genral.cover3} alt="" width="1880" height="1200" />

                    </div>
                    :
                    <div className="aimg">
                        <img src='' alt="" width="1800" height="1200" style={{ display: 'none' }} />

                    </div>
                }
            </div>



            <div className="paracenter">
                <div className="a">
                    <div>{ReactHtmlParser(genral.genral)}</div>

                </div>

                <div className="aimg">

                    <TweetEmbed id={genral.tweet1} />



                </div>

            </div>




            <div className="paracenter">
                <div className="a">
                    <div>{ReactHtmlParser(genral.title5)}</div>

                </div>

                <div className="aimg">
                    <TweetEmbed id={genral.tweet2} />


                </div>

            </div>



            <div className="paracenter">
                <div className="a">
                   

                </div>

                <div className="aimg">
                    <TweetEmbed id={genral.fb1} />


                </div>

            </div>



            <div className="paracenter">
                <div className="a">
                   

                </div>

                <div className="aimg">
                    <TweetEmbed id={genral.fb2} />


                </div>

            </div>

            <div className="paracenter">
                <div className="a">
                   

                </div>

                <div className="aimg">
                    <TweetEmbed id={genral.yt2} />


                </div>

            </div>





            <div className="paracenter">
                <div className="a">
                    <div>{ReactHtmlParser(genral.title5)}</div>

                </div>
                {genral.cover5 != null ?
                    <div className="aimg">
                        <img src={genral.cover5} alt="" width="1880" height="1200" />

                    </div>
                    :
                    <div className="aimg">
                        <img src='' alt="" width="1800" height="1200" style={{ display: 'none' }} />

                    </div>
                }
            </div>


            <div className="paracenter">


                <div className="aimg">
                    <div style={{ backgroundColor: 'white' }}>

                    <FacebookProvider appId="1256004414839706">
                                        <EmbeddedPost href={genral.fb1}  width="100%" height={398} style={{border: 'none', overflow: 'hidden'}} scrolling="no" frameBorder={0} allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" />
                                    </FacebookProvider>
                    </div>


                </div>

            </div>


           



            <Footer />


        </div>
    );
}

export default CrazyPage
