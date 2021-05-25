import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {RootNavigator} from 'Navigators';
import InternetConnectionAlert from 'react-native-internet-connection-alert';
import store from 'Store';

const App = () => {
  return (
    <Provider store={store}>
      <InternetConnectionAlert
        payload={{}}
        tapToCloseEnabled={true}
        updateStatusBar={false}
        errorColor="#ff646a">
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </InternetConnectionAlert>
    </Provider>
  );
};

export default App;
