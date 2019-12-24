import React, { Fragment, useState } from "react";
import { Link } from 'react-scroll';



const Navbar = () => {
    // let itemClasses = ["navbar-items"]
    const [ classes, setClasses ] = useState(["navbar-items"]);

    const toggleNavbar = () => {
        
        if(!classes.includes('show')){
            setClasses( [ ...classes, "show" ] );
        } else {
            setClasses( ["navbar-items"] );
        }
    };
    const Links = (
        <Fragment>
            <Link 
                to="about-section"
                spy={ true }
                smooth={ true }
                duration={ 500 }
                className="navbar-item"
                activeClass="navbar-item-active"
                onClick={ toggleNavbar }
            >
                <div>
                    About
                </div>
            </Link>
            <Link 
                to="projects-section"
                spy={ true }
                smooth={ true }
                duration={ 500 }
                className="navbar-item"
                activeClass="navbar-item-active"
                onClick={ toggleNavbar }
                >
                Projects
            </Link>
            <Link 
                to="contact-section"
                spy={ true }
                smooth={ true }
                duration={ 500 }
                className="navbar-item"
                activeClass="navbar-item-active"
                onClick={ toggleNavbar }
            >
                Contact
            </Link>
        </Fragment>
    )
    
    return(
        <nav className="navbar">
            <div className="navbar-brand">Ian Salazar</div>
            <div className="burger" onClick={ toggleNavbar }>
                <i className="fa fa-bars" />
            </div>
            <div className={ classes.join(' ') }>
                { Links }
            </div>
        </nav>
    )
}


export default Navbar;