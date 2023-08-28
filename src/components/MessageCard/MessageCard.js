import React from 'react';
import {View, Text} from 'react-native';
import styles from './MessageCard.style';
import {formatDistance, parseISO} from 'date-fns';
import trLocale from 'date-fns/locale/tr';

const MessageCard = ({username, date, message}) => {
  const formattedDate = formatDistance(parseISO(date), new Date(), {
    addSuffix: true,
    locale: trLocale,
  });

  return (
    <View style={styles.container}>
        <View style={styles.inner_container} >
            <Text style={styles.username}>{username}</Text>
            <Text style={styles.date}>{formattedDate}</Text>
        </View>
        <Text style={styles.message} >{message}</Text>
    </View>
  );
};

export default MessageCard;
