import React from "react";

const Post = ({ location }) => (
  <div className="container">
    <h4 className="center">Posts</h4>
    <div className="row">
      <div className="col s12 m12 l12" style={{ cursor: "pointer" }}>
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">{location.state.title}</span>
            <p>{location.state.body}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Post.defaultProps = {
  title: "None",
  body: "none"
};

export default Post;
