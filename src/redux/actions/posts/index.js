import { httpClient } from "../../../helpers/network";
//action creators are the return data of actions
export const deletePost = id => {
  return {
    type: "DELETE_POST",
    id
  };
};

export const fetchPosts = () => {
  return (dispatch, getState) => {
    return httpClient({
      url: "/posts",
      method: "get"
    }).then(response => {
      dispatch({
        type: "GET_POSTS",
        posts: response.data
      });
    });
  };
};
