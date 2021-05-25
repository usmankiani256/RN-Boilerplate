import {GET_USERS_FAILURE, GET_USERS_SUCCESS} from './type';
import getUsersService from 'Services/Users';

const getUsers = () => async (dispatch) => {
  try {
    const formattedResponse = await getUsersService();
    console.debug('Send data to Redux Store.');
    dispatch({
      type: GET_USERS_SUCCESS,
      payload: formattedResponse,
      success: true,
    });
  } catch (err) {
    console.debug('Send data to Redux Store.');
    dispatch({
      type: GET_USERS_FAILURE,
      payload: err.response || err.message || err,
      success: false,
    });
  }
};

export default getUsers;
