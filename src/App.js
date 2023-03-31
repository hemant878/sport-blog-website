import logo from './logo.svg';
import './App.css';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainBox from './Component/MainBox';
import MainNav from './Component/MainNav';
import Footer from './Component/Footer';
import GenralBlogs from './Component/GenralBlogs';
import EducationBlogs from './Component/EducationBlogs';
import EducationPage from './Component/EducationPage';
import { useState, useEffect } from 'react'

import UpdateBlogs from './Component/UpdateBlogs';
import UpdatePage from './Component/UpdatePage';
import Box22 from './Component/Box22'
import Boxpage22 from './Component/Boxpage22';
import TrendingPage from './Component/TrendingPage';
import Carouselpage from './Component/Carouselpage'
import TrendingPost from './Component/TrendingPost'
import Carouselpost from './Component/Carouselpost'
import Trendingblog from './Component/Trendingblog'
import { Helmet } from 'react-helmet';
import ReactGA from "react-ga";
import PacmanLoader from "react-spinners/PacmanLoader";
import { BoltLoader } from "react-awesome-loaders";
import ScrollToTop from './Component/ScrollToTop';



// import { googleAnalyticsActions } from "./google analytics/google-analytics-init";
// import parse from 'html-react-parser';











function App() {
  const [loading,setLoading] = useState(false)

  useEffect(() => {
    ReactGA.initialize('UA-212283066-1')
    ReactGA.pageview(window.location.pathname + window.location.search)



    setLoading(true)
    setTimeout(()=>{
        setLoading(false)
    }, 5000);

  }, []);


  return (
    <div className="App">
    {
      loading ? 
      <div className="aapp">
      <BoltLoader
        className={"loaderbolt"}
        boltColor={"white"}
        backgroundBlurColor={"white"}
        loading={loading}
      />
      </div>
      :
    
    

     
        <Router>
          <ScrollToTop/>
          <Helmet>
          <title>Crazysportsman | Home</title>

            <meta
              name="description"
              content="Sport pertains to any form of competitive physical activity " />
            <meta
              name="keywords" content="sport, crazysport, crazysportsman, Crazy, cricket" />
          </Helmet>

          <Switch>
            <Route path='/' component={MainNav} exact />
            <Route path='/exam/:id' component={TrendingPage} />
            <Route path='/genral/:id' component={Carouselpage} />
            <Route path='/education/:id' component={EducationPage} />

            <Route path='/update/:id' component={UpdatePage} />
            {/* <Route path ='/trending/:id' component = {TrendingPage} /> */}






            <Route path='/box' component={MainBox} />
            <Route path='/genral' component={GenralBlogs} />
            <Route path='/education' component={EducationBlogs} />

            <Route path='/update' component={UpdateBlogs} />
            {/* <Route path ='/reaction' component = {Freaction} /> */}
            <Route path='/boxpage22' component={Boxpage22} />
            <Route path='/trending' component={TrendingPost} />
            <Route path='/exam' component={Trendingblog} />
            <Route path='/https://twitter.com/HTighade'/>

            {/* <Route  path ='/genral/:id' component = {Carouselpost} /> */}









          


          </Switch>



        </Router>
    }
    </div>
  );
}

export default App;
