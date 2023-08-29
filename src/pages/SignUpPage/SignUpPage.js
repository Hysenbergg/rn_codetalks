import React from 'react';
import {View, Text} from 'react-native';
import auth from '@react-native-firebase/auth';
import styles from './SignUpPage.style';
import {showMessage} from 'react-native-flash-message';
import authErrorMessageParser from '../../utils/authErrorMessageParser';

import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

const SignUpPage = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [repassword, setRepassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const handleSignUp = async () => {
    if (password !== repassword) {
      showMessage({
        message: 'Şifreler uyuşmuyorr',
        type: 'danger',
      });
      return;
    }
    if(email === '' || password === '') {
      showMessage({
        message: 'Eksik alan girdiniz. Tekrar deneyiniz.',
        type: 'danger'
      })
      return;
    }
    try {
      setLoading(true);
      await auth()
        .createUserWithEmailAndPassword(email, password)
        .then(res => console.log(res))
        .catch(err => console.log(err));
      setLoading(false);
      showMessage({
        message: 'Kayıt işlemi başarılı bir şekilde yapıldı.',
        type: 'success',
      });
    } catch (error) {
      console.log(error);
      showMessage({
        message: authErrorMessageParser(error.code),
        type: 'danger',
      })
      setLoading(false);
    }

    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.container}>
      <View style={styles.title_container}>
        <Text style={styles.title}>codetalks</Text>
      </View>
      <View style={styles.input_container}>
        <CustomInput
          value={email}
          onChangeText={setEmail}
          placeholder="e-postanızı giriniz.."
        />
        <CustomInput
          value={password}
          onChangeText={setPassword}
          placeholder="şifrenizi giriniz.."
          isSecure={true}
        />
        <CustomInput
          value={repassword}
          onChangeText={setRepassword}
          placeholder="şifrenizi tekrardan giriniz.."
          isSecure={true}
        />
        <CustomButton title="Kayıt Ol" onPress={handleSignUp} loading={loading} />
        <CustomButton
          title="Geri"
          onPress={() => navigation.goBack()}
          theme="secondary"
          loading={loading}
        />
      </View>
    </View>
  );
};

export default SignUpPage;
