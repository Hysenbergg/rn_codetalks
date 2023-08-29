import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './MessageCard.style';
import {formatDistance, parseISO} from 'date-fns';
import trLocale from 'date-fns/locale/tr';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../../styles/colors';

const MessageCard = ({username, date, message, onPress}) => {
  const formattedDate = formatDistance(parseISO(date), new Date(), {
    addSuffix: true,
    locale: trLocale,
  });

  return (
    <View style={styles.container}>
      <View style={styles.inner_container}>
        <MaterialCommunityIcons name="account-circle-outline" size={16} />
        <Text style={styles.username}>{username}</Text>
        <Text style={styles.date}>{formattedDate}</Text>
        <TouchableOpacity onPress={onPress}>
          <Ionicons name="trash-outline" size={16} color={colors.primary} />
        </TouchableOpacity>
      </View>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

export default MessageCard;
