import {Layout} from 'Theme';

const styles = {
  button: {
    position: 'absolute',
    bottom: 60,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 20,
    backgroundColor: 'grey',
    ...Layout.center,
  },
  text: {
    fontSize: 14,
    color: 'white',
  },
};

export default styles;
