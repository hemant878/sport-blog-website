import React from 'react'
import '../CssCompound/Mnav.css'
import { Link } from 'react-router-dom'


function Navbar() {
    return (
        <div>
              <header>
                <div className="container">
                    <input type="checkbox" name="" id="check"/>

                        <div className="logo-container">
                        <Link  to="/"><h3 className="logo">Crazy<span>Sportsman</span></h3></Link>
                        </div>

                        <div className="nav-btn">
                            <div className="nav-links">
                                <ul>
                                    <li className="nav-link">
                                       
                                  <Link  to="/">Home</Link>

                                    </li>




                                    <li className="nav-link" >
                                    <Link  to="/exam">Trending</Link>

                                    
                                    </li>




                                    <li className="nav-link" >
                                        <Link to="/boxpage22">Public Reaction</Link>
                                    
                                    </li>






                                    <li className="nav-link" >
                                        <Link to="/genral">Update</Link>
                                      
                                    </li>










                                </ul>
                            </div>


                        </div>

                        <div className="hamburger-menu-container">
                            <div className="hamburger-menu">
                                <div></div>
                            </div>
                        </div>
                
                    
                </div>
            </header>
        </div>
    )
}

export default Navbar
