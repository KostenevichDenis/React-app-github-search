import React from "react";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";
import Repos from "../components/Repos";
import { GithubContext } from "../context/github/githubContext";

function Profile(props) {
  const github = useContext(GithubContext);
  const userName = props.match.params.name;
  /* console.log(`user name param in url: `, userName); */

  useEffect(() => {
    github.getUser(userName);
    github.getRepos(userName);
    console.log("effect");
    // eslint-disable-next-line
  }, []);

  if (github.loading) {
    return <p className="text-center">Loading...</p>;
  }

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    public_repos,
    public_gists,
    following,
  } = github.user;
  /* console.log(github); */
  return (
    <Fragment>
      <Link to="/" className="btn btn-link ">
        Home page
      </Link>

      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-som-3 text-center">
              <img style={{ width: "150px" }} src={avatar_url} alt={name} />
              <h1>{name}</h1>
              {location && <p>Location: {location}</p>}
            </div>
            <div>
              {bio && (
                <Fragment>
                  <h3>BIO</h3>
                  <p>{bio}</p>
                </Fragment>
              )}
              <a href={html_url} className="btn btn-dark" target="_blank" rel="noopener noreferrer">
                Open profile
              </a>
              <ul>
                {login && (
                  <li>
                    <strong>Username: </strong>
                    {login}
                  </li>
                )}
                {company && (
                  <li>
                    <strong>Company: </strong>
                    {company}
                  </li>
                )}
                {blog && (
                  <li>
                    <strong>Website: </strong>
                    {blog}
                  </li>
                )}
              </ul>

              <div className="badge bg-primary me-1">FolLowers: {followers}</div>
              <div className="badge bg-success me-1">Following: {following}</div>
              <div className="badge bg-info text-dark me-1">
                Repositories: {public_repos}
              </div>
              <div className="badge bg-dark me-1">Gists: {public_gists}</div>
            </div>
          </div>
        </div>
      </div>

      <Repos repos={github.repos}/>
    </Fragment>
  );
}

export default Profile;
