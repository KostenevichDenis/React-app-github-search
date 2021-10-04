import React from 'react'
import { Fragment } from 'react/cjs/react.production.min'

function Repos(props) {
    return (
        <Fragment>
            {props.repos.map((repo) => (
                <div className="card mb-3" key={repo.id}>
                    <div className="card-body">
                        <h5>
                            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
                        </h5>
                    </div>
                </div>
            ))}
        </Fragment>
    )
}

export default Repos
