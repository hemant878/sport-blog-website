import React from 'react'
import '../CssCompound/Page.css';
import { Link } from 'react-router-dom'



function Nav2() {
    return (
        <div>
            
            <header className="header">
                <div className="header__container">


                    <Link to="/" className="header__logo">Home</Link>


                    <div className="header__toggle">
                        <i className='bx bx-menu' id="header-toggle"></i>
                    </div>
                </div>
            </header>


            <div className="nav" id="navbar">
                <nav className="nav__container">
                    <div>
                        <Link to="/" className="nav__link nav__logo">
                            {/* <i className='bx bxs-disc nav__icon'></i> */}
                            <span className="nav__logo-name">Crazy Sportsman.com</span>
                        </Link>

                        <div className="nav__list">
                            <div className="nav__items">
                                <h3 className="nav__subtitle">Profile</h3>

                                <Link to="/" className="nav__link active">
                                    <i className='bx bx-home nav__icon'></i>
                                    <span className="nav__name">Home</span>
                                </Link>

                                <div className="nav__dropdown">
                                    <Link to="/exam" className="nav__link">
                                        <box-icon name='food-menu' type='solid'></box-icon>
                                        <i className='bx bx-food-menu nav__icon'></i>

                                        <span className="nav__name">Trending</span>
                                        <i className='bx bx-chevron-down nav__icon nav__dropdown-icon'></i>
                                    </Link>

                                    {/* <div className="nav__dropdown-collapse">
                                        <div className="nav__dropdown-content">
                                            <a href="#" className="nav__dropdown-item">Passwords</a>
                                            <a href="#" className="nav__dropdown-item">Mail</a>
                                            <a href="#" className="nav__dropdown-item">Accounts</a>
                                        </div>
                                    </div> */}
                                </div>
                                <div className="nav__dropdown">
                                    <Link to="/boxpage22" className="nav__link">

                                        <i className='bx bx-book nav__icon'></i>

                                        <span className="nav__name">Public Reaction</span>
                                        <i className='bx bx-chevron-down nav__icon nav__dropdown-icon'></i>
                                    </Link>

                                   
                                </div>
                                <div className="nav__dropdown">
                                    <Link to="/genral" className="nav__link">

                                        <i className='bx bx-laptop nav__icon'></i>

                                        <span className="nav__name">Update</span>
                                        <i className='bx bx-chevron-down nav__icon nav__dropdown-icon'></i>
                                    </Link>

                                  
                                </div>




        







                                <div className="nav__items">
                                    <h3 className="nav__subtitle">Contact</h3>



                                    <a href="#" className="nav__link">
                                        <i className='bx bx-conversation nav__icon'></i>
                                        <span className="nav__name">Contact</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Nav2
