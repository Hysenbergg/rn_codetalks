import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../styles/colors';

const dimension = Dimensions.get('window');

export default StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  container: {
    backgroundColor: colors.white,
    padding: 15,
    marginHorizontal: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: dimension.height / 3,
  },
  input_container: {
    flex: 1,
  },
});
