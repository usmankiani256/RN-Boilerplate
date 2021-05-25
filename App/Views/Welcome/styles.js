import {Colors, Layout} from 'Theme';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = {
  root: {
    backgroundColor: Colors.logoBackground,
    ...Layout.fill,
    ...Layout.center,
  },
  logoContainer: {
    height: height * 0.6,
    width: width,
    ...Layout.center,
    padding: 8,
  },
  logo: {
    width: 200,
    height: 200,
  },
  container: {
    height: height * 0.2,
    width: width,
    padding: 30,
  },
  loading: {
    height: height * 0.1,
  },
  title: {
    color: 'white',
  },
  titleCenter: {
    color: 'white',
    textAlign: 'center',
  },
  link: {
    color: Colors.primary,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  text: {
    color: 'white',
    fontSize: 13,
  },
  description: {
    color: 'white',
    paddingLeft: 15,
  },
};

export default styles;
