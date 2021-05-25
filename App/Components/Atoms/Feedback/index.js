import Snackbar from 'react-native-snackbar';

const renderSnackBar = (message, button, onPress, state) => {
  Snackbar.show({
    text:
      state === 'simple'
        ? message
        : state === 'success'
        ? 'Success: ' + message
        : state === 'error'
        ? 'Error: ' + message
        : '',
    duration: Snackbar.LENGTH_LONG,
    numberOfLines: 3,
    textColor:
      state === 'simple'
        ? 'white'
        : state === 'success'
        ? '#20a241'
        : state === 'error'
        ? '#ff646a'
        : 'white',
    fontFamily: 'Heebo-Regular',
    action: {
      text: button || '',
      textColor: 'white',
      onPress: onPress || (() => {}),
    },
  });
};

const Feedback = {
  simple: (message, button, onPress) =>
    renderSnackBar(message, button, onPress, 'simple'),

  success: (message, button, onPress) => {
    renderSnackBar(message, button, onPress, 'success');
  },

  error: (message, button, onPress) =>
    renderSnackBar(message, button, onPress, 'error'),

  dismiss: () => {
    Snackbar.dismiss();
  },
};

export default Feedback;

/*
USAGE:

Feedback.simple('Message', 'Done', () => {})

*/
