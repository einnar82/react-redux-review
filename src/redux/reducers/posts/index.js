const initialState = {
  posts: []
};

// We don't want to mutate our application state
// that's why we create a copy of our state and
// destructure or spread the state in able to return
// the current state
const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_POST":
      return {
        ...state,
        posts: [...state.posts, action.payload]
      };
    case "GET_POSTS":
      console.log(action);
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
