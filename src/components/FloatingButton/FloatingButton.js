import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../../styles/colors';
import styles from './FloatingButton.style';

const FloatingButton = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <MaterialCommunityIcons name='plus' size={36} color={colors.white} />
    </TouchableOpacity>
  );
};

export default FloatingButton;
