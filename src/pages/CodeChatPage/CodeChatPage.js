import React from 'react';
import {View, Text, ScrollView, Alert} from 'react-native';
import styles from './CodeChatPage.style';
import MessageCard from '../../components/MessageCard/MessageCard';
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import CustomModal from '../../components/CustomModal/CustomModal';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import ParseContentData from '../../utils/ParseContentData';
import {colors} from '../../styles/colors';
import {showMessage} from 'react-native-flash-message';

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
    });
    navigation.setOptions({
      title: room.room_name,
    });
  }, []);

  // veritabanından gelen mesaj yoksa yani boşsa gösterilecek ve doluysa mesaj kutularının gösterileceği comp.
  const renderMessageList = () => {
    if (data.length === 0) {
      return (
        <View style={styles.empty_message_container}>
          <Text style={styles.empty_message}>
            Henüz mesaj yazılmadı ilk mesajı yazmak ister misiniz?
          </Text>
        </View>
      );
    } else {
      return data.map((item, index) => (
        <MessageCard
          key={index}
          username={item.userName}
          date={item.date}
          message={item.message}
          onPress={() => {
            DenemeFunction(item.id, room.id)
          }}
        />
      ));
    }
  };

  const DenemeFunction = (id, room_id) => {
    const messageRef = database().ref(`rooms/${room_id}/messages/${id}`);
    messageRef
      .remove()
      .then(() =>
        showMessage({
          message: 'Mesaj silindi.',
          type: 'success',
        }),
      )
      .catch(error => console.log(error));
  };

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
      <ScrollView>{renderMessageList()}</ScrollView>
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
