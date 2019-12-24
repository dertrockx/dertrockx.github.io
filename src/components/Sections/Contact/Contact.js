import React, { Fragment } from 'react'
import ContactForm from "./ContactForm";
import { Element } from "react-scroll";
const Contact = () => {
    return(
        <Fragment>
            <Element id="contact-section" name="contact-section">
                <div className="section section-1">
                    <div className="container section-content">
                        <h2>Contact Me</h2>
                        <div className="margin-y-2 grid-1">
                            {/*
                            <div>
                                <ContactForm />
                            </div>
                            */}
                            <div className="">
                                <div className="form-container">
                                    <h3>My e-mails</h3>
                                    <div className="card bg-primary">
                                        iansalazar67@gmail.com
                                    </div>
                                    <div className="card bg-primary">
                                        iisalazar@up.edu.ph
                                    </div>
                                </div>
                                <div className="">
                                    <h3>Reach me through my social accounts</h3>
                                    <div className="margin-y-1">
                                        <a 
                                            href="https://linkedin.com/in/ian-salazar-22373b19a"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <button 
                                                className="button button-link button-circular button-secondary social-link"
                                            >
                                                <i className="fa fa-linkedin" />
                                            </button>
                                        </a>
                                        <a 
                                            href="https://www.facebook.com/salazar.ian.i"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <button 
                                                className="button button-link button-circular button-secondary social-link"
                                            >
                                                <i className="fa fa-facebook" />
                                            </button>
                                        </a>
                                        <a 
                                            href="https://github.com/dertrockx"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <button className="button button-link button-circular button-secondary social-link">
                                                <i className="fa fa-github" />
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Element>
        </Fragment>
        
    )
}

export default Contact;