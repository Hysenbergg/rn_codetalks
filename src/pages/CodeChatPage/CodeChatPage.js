import React from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './CodeChatPage.style';
import MessageCard from '../../components/MessageCard/MessageCard';
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import CustomModal from '../../components/CustomModal/CustomModal';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import ParseContentData from '../../utils/ParseContentData';

const CodeChatPage = ({route, navigation}) => {
  const [data, setData] = React.useState([]);
  const [visible, setVisible] = React.useState(false);

  const {room} = route.params;

  React.useEffect(() => {
    const reference = database().ref(`rooms/${room.id}/messages`);
    reference.on('value', snapshot => {
      const contentData = snapshot.val();
      const parsedData = ParseContentData(contentData || {});
      setData(parsedData);
    })
    navigation.setOptions({
      title: room.room_name
    })
  }, [])

  const handleInputToggle = () => {
    setVisible(!visible);
  };

  const handleSendTitle = text => {
    handleInputToggle();
    sendTitle(text);
  };

  const sendTitle = text => {
    try {
      const userMail = auth().currentUser.email;
      const contentObject = {
        message: text,
        userName: userMail.split('@')[0],
        date: new Date().toISOString(),
      };
      database().ref(`rooms/${room.id}/messages`).push(contentObject);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.title_container}>
        <Text style={styles.info}>{room.room_name} odası kuruldu!</Text>
      </View>
      <FlatList data={data} keyExtractor={item => item.id} renderItem={({item}) => (
        <MessageCard username={item.userName} date={item.date} message={item.message} />
      )} />
      <FloatingButton onPress={handleInputToggle} />
      <CustomModal
        visible={visible}
        placeholder="Mesajın.."
        onSend={handleSendTitle}
        onClose={handleInputToggle}
      />
    </View>
  );
};

export default CodeChatPage;
