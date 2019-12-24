import React, { Fragment } from "react";
import { Element } from 'react-scroll'
import Me from "../../assets/me.png";
const About = () => {
    return (
        <Fragment>
            <Element id="about-section" name="about-section">
                <div className="section section-1">
                    <div className="container section-content">
                        <h2>About Me</h2>
                        <div className="margin-y-2 grid-2-8">
                            <div>
                                <img 
                                    src={ Me }
                                    width="200"
                                    alt="avatar" 
                                    className="circular-image"
                                />
                            </div>
                            <div className="text-justified">
                                <p className="text-indent">
                                    I'm a freelance web developer based in Los Baños, Laguna, Philippines. 
                                    I am currently studying BS Computer Science in the University of the Philippines (UPLB) Los Baños.
                                </p>
                                <p className="text-indent">
                                    I also join hackathons with my friends because we enjoy thrill of making solutions in a short amount of time. 
                                    In this year, I joined <a href="https://hack4rice2019.irri.org/">Hack4Rice</a> and <a href="https://www.spaceappschallenge.org/">NASA Space Apps Challenge: Online Participation</a>.
                                    In most of my projects, I use React for the front-end and either Django or Express for the back-end. 
                                    For databases, I am more familiar in using PostgresQL than MongoDB. 
                                </p>
                                <p className="text-indent">
                                    Other than that, I also enjoy reading books. Especially financial literacy books like Rich Dad Poor Dad and business-related books like The Lean Startup.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Element>
        </Fragment>
    )
}

export default About;