import React from 'react';
import {TextInput, View} from 'react-native';
import {colors} from '../../styles/colors';
import styles from './CustomInput.style';

export default function CustomInput({value, onChangeText, placeholder, isSecure}) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.white}
        secureTextEntry={isSecure}
        autoCapitalize='none'
      />
    </View>
  );
}
