import React from "react";
import "./landingBanner.css";
import { Link } from "react-scroll";
const LandingBanner = () => {
    return(
        <div className="landing">
            <div className="content">
                <h1>Hi! I am Ian Salazar</h1>
                <div>I develop web applications using HTML, CSS, JS, and back-end services using Python</div>
                <Link 
                    to="projects-section"
                    spy={ true }
                    smooth={ true }
                    duration={ 500 }
                    className="navbar-item"
                    activeClass="navbar-item-active"
                    >
                    <div className="button button-primary">View Projects</div>
                </Link>
            </div>
        </div>
    )
}

export default LandingBanner;