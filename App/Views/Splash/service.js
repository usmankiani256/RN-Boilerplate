// Imports
import {CommonActions} from '@react-navigation/native';
import {useEffect} from 'react';
import utils from './utils';
import SplashScreen from 'react-native-splash-screen';

const useService = ({navigation}) => {
  useEffect(() => {
    console.debug('Hide splash screen.');
    SplashScreen.hide();

    console.debug('Navigate to Welcome.');
    navigation.dispatch(CommonActions.reset(utils.navigateToWelcome));
  }, []);

  return;
};

// Export
export default useService;
