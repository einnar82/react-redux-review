const initialState = {
  posts: []
};
const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [...state.posts, action.payload];
    case "GET_POSTS":
      return {
        ...state,
        posts: [...action.posts]
      };
    case "DELETE_POST":
      const newPosts = state.posts.filter(post => post.id !== action.id);
      return {
        ...state,
        posts: newPosts
      };
    default:
      return state;
  }
};

export default postsReducer;
