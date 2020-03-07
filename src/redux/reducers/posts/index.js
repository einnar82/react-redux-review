const initialState = {
  posts: []
};
const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_POST":
      return {
        ...state,
        posts: [...state.posts, action.payload]
      };
    case "GET_POSTS":
      return {
        ...state,
        posts: [...action.payload]
      };
    case "DELETE_POST":
      const updatedPosts = state.posts.filter(
        post => post.id !== action.payload.id
      );
      return {
        ...state,
        posts: updatedPosts
      };
    default:
      return state;
  }
};

export default postsReducer;
