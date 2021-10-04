import React, { Fragment } from "react";

function About() {
  return (
    <Fragment>
      <div className="card" style={{width: "18rem"}}>
        <div className="card-body">
          <h5 className="card-title">Social Network Inc</h5>
          <h6 className="card-subtitle mb-2 text-muted">version 1.0.0</h6>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </Fragment>
  );
}

export default About;
