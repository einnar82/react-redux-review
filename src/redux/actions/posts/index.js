import { fetchPostsService, deletePostService } from "../../services/posts";
//actions are payloads of information
const deletePostAction = id => {
  return {
    type: "DELETE_POST",
    payload: id
  };
};

const fetchPostAction = posts => {
  return {
    type: "GET_POSTS",
    payload: posts
  };
};

export const fetchPosts = () => {
  return async dispatch => {
    const response = await fetchPostsService();
    dispatch(fetchPostAction(response.data));
  };
};

export const deletePost = id => {
  return async dispatch => {
    const payload = await deletePostService(id);
    dispatch(deletePostAction(payload));
  };
};
