import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deletePost } from "../redux/actions/posts";

class Post extends React.Component {
  handleDeletePost = id => {
    this.props.deletePost(id);
    this.props.history.push("/");
  };

  render() {
    const { post } = this.props;
    return (
      <div className="container">
        <h4 className="center">Posts</h4>
        <div className="row">
          <div className="col s12 m12 l12" style={{ cursor: "pointer" }}>
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">{post.title}</span>
                <p>{post.body}</p>
              </div>
              <div className="card-action">
                <Link to="/">Back</Link>
                <button
                  className="btn gray"
                  onClick={() => this.handleDeletePost(post.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Post.defaultProps = {
  post: {
    title: "None",
    body: "none"
  }
};

const mapStateToProps = (state, ownProps) => {
  //ownProps is the component props
  //state is the redux state
  const postId = ownProps.match.params.post_id;
  return {
    post: state.posts.posts.find(post => post.id === Number(postId))
  };
};

//dispatch actions without calling the store.dispatch() method
const mapDispatchToProps = dispatch => {
  return {
    deletePost: id => dispatch(deletePost(Number(id)))
  };
};

//connect() is a HOC for react-redux for connecting state and actions to components
export default connect(mapStateToProps, mapDispatchToProps)(Post);
