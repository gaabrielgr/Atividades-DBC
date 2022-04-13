const INITIAL_STATE = {
  auth: {
    token: "",
    auth: false,
    loading: true,
    error: false,
  },
};
const authReducer = (state = INITIAL_STATE, action) => {
  if (action.type === "SET_LOGIN") {
    return {
      ...state,
      auth: {
        token: action.token,
        auth: action.auth,
        loading: action.loading,
        error: action.error,
      },
    };
  }

  if (action.type === "SET_LOGOUT") {
    state = INITIAL_STATE;
    return state;
    /* return {
         ...state,
      auth: {
        token: action.token,
        auth: action.auth,
        loading: action.loading,
        error: action.error,
      }, 
    };*/
  }

  if (action.type === "SET_AUTH") {
    return {
      ...state,
      auth: {
        token: action.token,
        auth: action.auth,
        loading: action.loading,
        error: action.error,
      },
    };
  }
  return state;
};
export default authReducer;
