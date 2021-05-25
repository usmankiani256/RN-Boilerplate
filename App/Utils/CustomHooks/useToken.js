import {useState, useEffect} from 'react';
import Preferences from 'Config/preferences';

const preferences = new Preferences();

const useToken = () => {
  const [get, setTokenData] = useState();

  useEffect(() => {
    preferences.getToken().then((token) => {
      if (token) setTokenData(token);
      else setTokenData(undefined);
    });
  }, []);

  const set = (tokenData) => {
    preferences.setToken(tokenData);
  };

  const reset = () => {
    preferences.removeToken();
  };

  return {get, set, reset};
};

export default useToken;
