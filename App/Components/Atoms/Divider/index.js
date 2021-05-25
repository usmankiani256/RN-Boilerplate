import {View, Dimensions} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import React from 'react';
import {Colors} from 'Theme';
import {h} from 'Atoms/Common';

const {width} = Dimensions.get('window');

const Divider = (props) => {
  return <View style={styles(props).divider} />;
};

Divider.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  color: PropTypes.string,
};

Divider.defaultProps = {
  height: h.divider,
  width: width,
  color: Colors.background,
};

export default Divider;

/*
USAGE:

//* <Divider width={100} height={100} color="white" />

*/
