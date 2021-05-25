import PropTypes from 'prop-types';
import React from 'react';
import {BallIndicator} from 'react-native-indicators';

const Loader = (props) => {
  return (
    <BallIndicator count={props.count} color={props.color} size={props.size} />
  );
};

Loader.propTypes = {
  count: PropTypes.number,
  color: PropTypes.string,
  size: PropTypes.number,
};

Loader.defaultProps = {
  count: 5,
  color: 'white',
  size: 20,
};

export default Loader;

/*
USAGE:

  <Loader
    count={5}
    color="white"
    size={}
  />

*/
