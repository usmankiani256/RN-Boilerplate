import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  /* Row Layouts */
  row: {
    flexDirection: 'row',
  },
  /* Default Layouts */
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  alignCenter: {
    alignItems: 'center',
  },
  alignStart: {
    alignItems: 'flex-start',
  },
  alignSelfCenter: {
    alignSelf: 'center',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyAround: {
    justifyContent: 'space-around',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  justifyEvenly: {
    justifyContent: 'space-evenly',
  },
  /* Sizes Layouts */
  fill: {
    flex: 1,
  },
  full: {
    height: '100%',
    width: '100%',
  },
  fullWidth: {
    width: '100%',
  },
  fullHeight: {
    height: '100%',
  },
  /* Operation Layout */
  mirror: {
    transform: [{scaleX: -1}],
  },
  rotate90: {
    transform: [{rotate: '90deg'}],
  },
  rotate90Inverse: {
    transform: [{rotate: '-90deg'}],
  },
});
