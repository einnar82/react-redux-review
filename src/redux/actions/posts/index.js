import { httpClient } from "../../../helpers/network";
//action creators are the return data of actions
export const deletePostAction = id => {
  return {
    type: "DELETE_POST",
    payload: id
  };
};

export const fetchPostAction = posts => {
  return {
    type: "GET_POSTS",
    payload: posts
  };
};

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
