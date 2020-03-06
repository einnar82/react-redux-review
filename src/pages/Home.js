import React from "react";
import { httpClient } from "../helpers/network";

class Home extends React.Component {
  state = {
    posts: []
  };
  componentDidMount() {
    httpClient({
      url: "/posts",
      method: "get"
    }).then(response => {
      this.setState({ posts: response.data });
    });
  }

  viewPost = post => {
    this.props.history.push(`/post/${post.id}`, post);
  };
  render() {
    const { posts } = this.state;

    const postList = posts.length ? (
      posts.map((item, key) => (
        <div
          className="col s12 m12 l12"
          key={key}
          style={{ cursor: "pointer" }}
          onClick={() => this.viewPost(item)}
        >
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{item.title}</span>
              <p>{item.body}</p>
            </div>
          </div>
        </div>
      ))
    ) : (
      <h4 className="center">No posts available</h4>
    );

    return (
      <div className="container">
        <h4 className="center">Posts</h4>
        <div className="row">{postList}</div>
      </div>
    );
  }
}
export default Home;
