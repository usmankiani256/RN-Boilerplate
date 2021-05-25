// Imports
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import getUsers from 'Actions/Users';

const useService = () => {
  const dispatch = useDispatch();

  const Users = useSelector((state) => state.Users);
  const {isLoading, data, success} = Users;

  success && console.debug('Send data to UI');

  let user = success ? data[Math.floor(Math.random() * 10)] : data;

  useEffect(() => {
    console.debug('Fetch Users.');
    dispatch(getUsers());
  }, []);

  const refresh = () => {
    console.debug('Re-Fetch Users.');
    dispatch(getUsers());
  };

  return {isLoading, user, success, refresh};
};

// Export
export default useService;
