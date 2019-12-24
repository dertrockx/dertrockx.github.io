import React, { Fragment } from "react";
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import ProjectItem from "./ProjectItem";
import { Element } from 'react-scroll'

const REPOS = gql`
query{
    repositoryOwner(login: "dertrockx") {
    ... on User {
      pinnedRepositories(first:6) {
        edges {
          node {
            name,
            url,
            description
          }
        }
      }
    }
  }
}
`



const Projects = () => {
    const { loading, error, data } = useQuery(REPOS);
    let projects = <div>...</div>
    if(!loading && !error){
        const { edges } = data.repositoryOwner.pinnedRepositories;
        projects = (
            <Fragment>
                { edges.map( ({ node }, key) => (
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