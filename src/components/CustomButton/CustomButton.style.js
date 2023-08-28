import {StyleSheet} from 'react-native';
import { colors } from '../../styles/colors';

const base_style = StyleSheet.create({
  button: {
    marginHorizontal: 15,
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: 'center',
    marginVertical: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default {
  primary: StyleSheet.create({
    ...base_style,
    button: {
        ...base_style.button,
        backgroundColor: colors.primary,
    },
    title: {
        ...base_style.title,
        color: colors.white
    }
  }),
  secondary: StyleSheet.create({
    ...base_style,
    button: {
        ...base_style.button,
        backgroundColor: colors.white,
    },
    title: {
        ...base_style.title,
        color: colors.primary
    }
  })
};
