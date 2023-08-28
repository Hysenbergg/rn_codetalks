import React from 'react';
import {Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import styles from './CustomButton.style';

export default function CustomButton({title, loading, onPress, theme = 'primary'}) {
  return (
    <TouchableOpacity style={styles[theme].button} onPress={onPress} disabled={loading}>
      {
        loading ? (
          <ActivityIndicator color='white' />
        ) : (
          <Text style={styles[theme].title}>{title}</Text>
        )
      }
      
    </TouchableOpacity>
  );
}
