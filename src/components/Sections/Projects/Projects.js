import React, { Fragment, useContext, useEffect } from "react";
import ProjectItem from "./ProjectItem";
import { Element } from 'react-scroll'
import RepoContext from "../../../context/repos/repoContext";

const Projects = () => {
    const repoContext = useContext(RepoContext);
    const { repos, getRepos } = repoContext;
    useEffect( () => {
      getRepos()
    }, []);
    let projects = (
      <h3>Fetching...</h3>
    );
    if(repos.length > 0){
      projects = (
          <Fragment>
              { repos.map( ({ node }, key) => (
                  <ProjectItem 
                  key={ key }
                  name={ node.name }
                  description={ node.description }
                  url={ node.url }
                  />
              )) }
          </Fragment>
      )
    }
    return (
      <Fragment>
        <Element id="projects-section" name="projects-section">
          <div className="section section-2">
              <div className="container section-content">
                  <h2>Projects</h2>
                  <div className="margin-y-2 grid-3">
                      { projects }
                  </div>
              </div>
          </div>
        </Element>
      </Fragment>
    )
}

export default Projects;