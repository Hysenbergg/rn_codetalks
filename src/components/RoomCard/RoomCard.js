import React from 'react';
import { Text, TouchableOpacity} from 'react-native';
import styles from './RoomCard.style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../../styles/colors';

const RoomCard = ({title, onPress, onDelete}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={onDelete}>
        <Ionicons name="trash-outline" size={24} color={colors.primary} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default RoomCard;
