import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    paddingHorizontal: 15,
  },
  empty_message_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '50%'
  },
  empty_message: {
    borderWidth: 1,
    fontSize: 24,
    color: colors.white,
    textAlign: 'center',
    padding: 50,
    borderColor: colors.white,
    borderRadius: 50,
  },
});
