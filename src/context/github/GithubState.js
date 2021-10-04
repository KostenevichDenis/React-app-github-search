import { GithubContext } from "./githubContext";
import { useReducer } from "react";
import { githubReducer } from "./githubReducer";
import {
  CLEAR_USERS,
  GET_REPOS,
  GET_USER,
  SEARCH_USERS,
  SET_LOADING,
} from "../alert/types";
import axios from "axios";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

const withCreds = url => {
    return `${url}client_ID=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
}

export const GithubState = ({ children }) => {
  const initialState = {
    user: {},
    users: [],
    loading: false,
    repos: [],
  };
  let [state, dispatch] = useReducer(githubReducer, initialState);
 
  /* console.log("state: ", state); */

  const search = async (value) => {
    setLoading();
    const response = await axios.get(
      withCreds(`https://api.github.com/search/users?q=${value}&`)
    );
    console.log("response data: ", response.data.items);
    dispatch({
      type: SEARCH_USERS,
      payload: response.data.items,
    });
  };

  const setLoading = () => dispatch({ type: SET_LOADING });

  const getUser = async (name) => {
    setLoading();
    const response = await axios.get(
        withCreds(`https://api.github.com/users/${name}?`)
      );
    //

    dispatch({
      type: GET_USER,
      payload: response.data,
    });
  };

  const getRepos = async (name) => {
    setLoading();

    const response = await axios.get(
        withCreds(`https://api.github.com/users/${name}/repos?per_page=10&`)
      );

    dispatch({
      type: GET_REPOS,
      payload: response.data,
    });
  };

  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  const { user, users, repos, loading } = state;

  return (
    <GithubContext.Provider
      value={{ search, getUser, getRepos, clearUsers, setLoading, user, users, repos, loading }}
    >
      {children}
    </GithubContext.Provider>
  );
};
