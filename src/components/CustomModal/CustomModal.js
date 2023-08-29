import React from 'react';
import {View, TextInput} from 'react-native';
import Modal from 'react-native-modal';
import CustomButton from '../CustomButton/CustomButton';
import styles from './CustomModal.style';

const CustomModal = ({visible, placeholder, onSend, onClose}) => {
  const [text, setText] = React.useState('');

  const handleSubmit = () => {
    onSend(text);
    setText('');
  }

  return (
    <Modal
      swipeDirection="down"
      style={styles.modal}
      isVisible={visible}
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}>
      <View style={styles.container}>
        <View style={styles.input_container}>
          <TextInput
            style={styles.input}
            value={text}
            onChangeText={setText}
            placeholder={placeholder}
            multiline={true}
            autoCapitalize='none'
          />
        </View>
        <CustomButton title="Ekle" onPress={handleSubmit} />
      </View>
    </Modal>
  );
};

export default CustomModal;
