import React from 'react'
import { Link } from 'react-router-dom'

import '../CssCompound/Footers.css';

function Footer() {
    return (
        <div>
            <div className="snav">

                <div className="snavbox1">
                    <h2 className="cchh1">CRAZYSPORTSMAN.COM</h2>

                </div>


                <div className="snavbox2">
                    <div className="sbox1">
                        <h3>Menu</h3>

                        <Link to="/exam"> <li>Tranding</li></Link>
                        <Link to="/boxpage22"> <li>Public_Reaction</li></Link>
                        <Link to="/genral"> <li>Update</li></Link>


                    </div>



                    <div className="sbox1">
                        <h3>Follow Us</h3>

                        <a href="" className="cd">
                            {/* <img src="h.png" alt=""/> */}
                            <li>facebook</li>
                        </a>

                        <a href="" className="cd">
                            {/* <img src="h.png" alt=""/> */}
                            <li>instagram</li>
                        </a>

                        <Link to="/https://twitter.com/HTighade" className="cd">
                            <li>twitter</li>
                        </Link>
                    </div>

                </div>

























            </div>
        </div>
    )
}

export default Footer
