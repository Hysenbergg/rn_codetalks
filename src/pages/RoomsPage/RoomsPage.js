import React from 'react';
import {View, FlatList} from 'react-native';
import styles from './RoomsPage.style';
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import RoomCard from '../../components/RoomCard/RoomCard';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import CustomModal from '../../components/CustomModal/CustomModal';
import ParseContentData from '../../utils/ParseContentData';

const RoomsPage = ({navigation}) => {
  const [data, setData] = React.useState([]);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    database().ref('rooms').on('value', snapshot => {
      const contentData = snapshot.val();
      const parsedData = ParseContentData(contentData || {});
      setData(parsedData);
    });
  }, []);

  const handleInputToggle = () => {
    setVisible(!visible);
  };

  const handleSendTitle = text => {
    handleInputToggle();
    sendTitle(text);
  };

  const sendTitle = text => {
    try {
      const reference = database().ref('rooms');
      reference.push({
        room_name: text,
      });
    } catch (error) {
      console.log(error.code);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <RoomCard
            title={item.room_name}
            onPress={() => navigation.navigate('ChatCode', {room: item})}
          />
        )}
        numColumns={2}
      />
      <FloatingButton onPress={handleInputToggle} />
      <CustomModal
        visible={visible}
        placeholder="Oda adı.."
        onSend={handleSendTitle}
        onClose={handleInputToggle}
      />
    </View>
  );
};

export default RoomsPage;
