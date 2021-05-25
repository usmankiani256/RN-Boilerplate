import api from '../api';
import UsersFormatter from 'Formatter/Users';

const getUsersService = () => {
  return api
    .get('users')
    .then((response) => {
      console.debug('Users fetched successfully.');

      let formattedResponse = UsersFormatter.get(response.data);
      console.debug('Users formatted successfully.');

      return formattedResponse;
    })
    .catch((err) => {
      console.warn('Users fetch failed.');
      console.log('Get Users Error: ', err.response || err.message || err);
      return err;
    });
};

export default getUsersService;
