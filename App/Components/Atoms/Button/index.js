import {TouchableOpacity} from 'react-native';
import styles from './styles';
import React from 'react';
import * as Text from 'Atoms/Text';

const Button = (props) => {
  const {text, onPress} = props;

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.button}
      onPress={onPress}>
      <Text.Caption myStyle={styles.text}>{text}</Text.Caption>
    </TouchableOpacity>
  );
};

export default Button;
