const initialState = {
  users: []
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USERS":
      console.log("Fetching users");
      return {
        ...state,
        users: []
      };

    default:
      return state;
  }
};

export default usersReducer;
