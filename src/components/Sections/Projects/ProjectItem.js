import React from 'react'
import PropTypes from 'prop-types'
import "./projectItem.css";

const ProjectItem = ({ name, description, url }) => {
    return(
        <div className="bg-light" id="projectItem">            
            <div id="header" className="text-center text-header">{ name }</div>
            <div className="text-left text-indent" id="description">
                { description === null ? "No Description provided" : description }
            </div>
            <div id="footnote">
                <a 
                    className="button button-primary button-block" 
                    href={ url }
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View Project
                </a>
            </div>
        </div>
    )
}

ProjectItem.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
}

export default ProjectItem;
