import React, { useReducer } from 'react';
import RepoContext from "./repoContext";
import repoReducer from "./repoReducer";
import {
    GET_REPOS
} from "../types";
import axios from "axios";

const RepoState = (props) => {
    const initialState = []
    const [state, dispatch] = useReducer(repoReducer, initialState);

    const getRepos = async () => {
        try {
            const config = {
                headers: {
                    "Content-Type" : "application/json"
                }
            }
            const prod = 'https://portfolio-back-end-service.herokuapp.com/';
            const dev = 'http://localhost:5000'
            const res = await axios.get(prod, {}, config);
            const { edges } = res.data;
            console.log(edges);
            dispatch({
                type: GET_REPOS,
                payload: edges
            })
        } catch(err){
            if(err) console.error(err);
        }
    }

    return(
        <RepoContext.Provider
            value={{
                repos: state,
                getRepos
            }}
        >
            { props.children }
        </RepoContext.Provider>
    )
}

export default RepoState;