import {StyleSheet} from 'react-native';

const styles = (props) =>
  StyleSheet.create({
    divider: {
      height: props.height,
      width: props.width,
      backgroundColor: props.color,
    },
  });

export default styles;
