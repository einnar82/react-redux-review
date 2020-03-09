import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../redux/actions/posts";

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  viewPost = post => {
    this.props.history.push(`/post/${post.id}`);
  };
  render() {
    const { posts } = this.props;

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
      <h4 className="center">Loading...</h4>
    );

    return (
      <div className="container">
        <h4 className="center">Posts</h4>
        <div className="row">{postList}</div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  // mapStateToProps has 2 parameters, the redux state
  // and the component props
  return {
    posts: state.posts.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => dispatch(fetchPosts())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
