import React from 'react'
import { Link } from 'react-router-dom'




const Header = () => {
    return (

        <nav className="  navbar navbar-expand-lg navbar-dark bg-dark ">
            <Link className="navbar-brand text-danger" to="/">Miikka & Leke </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon "></span>
            </button>

            <div className="collapse navbar-collapse " id="navbarTogglerDemo02">

                <ul className="navbar-nav mr-auto mt-2 mt-lg-0 float-left ">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/product">Product <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/partner">Partner </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/livedemo">Livedemo</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/pricing">Price</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/signup"> Sign Up</Link>
                    </li>
                   
                </ul>
            </div>


        </nav>

    )
}

export default Header