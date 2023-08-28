import {StyleSheet} from 'react-native';
import { colors } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.third
  },
  title_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {color: colors.gray, fontSize: 36},
  input_container: {
    flex:1
  }
});
