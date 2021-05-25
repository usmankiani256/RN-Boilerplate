import { GET_USERS_FAILURE, GET_USERS_SUCCESS } from "Actions/Users/type";

const initialState = {
  isLoading: true,
  data: null,
  success: null,
};

const Users = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: payload,
        success: true,
      };
    case GET_USERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        data: payload,
        success: false,
      };
    default:
      return state;
  }
};

export default Users;
