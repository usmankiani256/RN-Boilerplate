// Imports
import {View, Image, Linking, TouchableOpacity} from 'react-native';
import React from 'react';
import {Loader} from 'Atoms';
import * as Text from 'Atoms/Text';
import styles from './styles';
import utils from './utils';
import useService from './service';
import Button from 'Atoms/Button';

const Loading = () => (
  <View style={styles.root}>
    <View style={styles.loading}>
      <Loader />
      <Text.Caption myStyle={styles.title}>Fetching User Data...</Text.Caption>
    </View>
  </View>
);

const Success = ({name}) => {
  console.debug('User: ', name);

  return (
    <View style={styles.root}>
      <Text.Title myStyle={styles.titleCenter}>
        A complete demo user service to get you started.
      </Text.Title>
      <View style={styles.container}>
        <Text.Caption myStyle={styles.titleCenter}>
          Hello My name is {name} and I am a dummy user
        </Text.Caption>
      </View>
    </View>
  );
};

const Error = () => (
  <View style={styles.root}>
    <Text.Caption myStyle={{}}>Something went wrong!</Text.Caption>
  </View>
);

const visitDocs = () => {
  let url = 'https://github.com/usmankiani256/rn-starter/blob/master/Readme.MD';

  Linking.canOpenURL(url).then((supported) => {
    if (supported) {
      console.log('Open Docs.', url);
      Linking.openURL(url);
    } else {
      console.log("Don't know how to open URI: " + url);
    }
  });
};

const Welcome = () => {
  const {isLoading, user, success, refresh} = useService();

  return (
    <View style={styles.root}>
      <View style={styles.logoContainer}>
        <Image
          source={utils.logo}
          style={styles.logo}
          resizeMode="center"
          resizeMethod="resize"
        />
        <Text.Heading myStyle={styles.title}>{utils.heading}</Text.Heading>
        <Text.Title myStyle={styles.titleCenter}>
          {utils.description}
        </Text.Title>
        <TouchableOpacity onPress={visitDocs}>
          <Text.Title myStyle={styles.link}>Click to Get Started</Text.Title>
        </TouchableOpacity>
      </View>
      {isLoading && Loading()}
      {!isLoading && success === true && Success(user)}
      {!isLoading && success === false && Error()}
      {!isLoading && (
        <Button text={success ? 'Refresh' : 'Reload'} onPress={refresh} />
      )}
    </View>
  );
};

// Export
export default Welcome;
