import { fetchPostAction, deletePostAction } from "../../actions/posts";
import { httpClient } from "../../../helpers/network";

export const fetchPosts = () => {
  return (dispatch, getState) => {
    return httpClient({
      url: "/posts",
      method: "get"
    }).then(response => {
      dispatch(fetchPostAction(response.data));
    });
  };
};

export const deletePost = id => {
  return (dispatch, getState) => {
    return httpClient({
      url: `/posts/${id}`,
      method: "delete"
    }).then(response => {
      dispatch(deletePostAction(id));
    });
  };
};
