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
