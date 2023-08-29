import React from 'react';
import {View, Text, Alert} from 'react-native';
import styles from './SignInPage.style';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';
import authErrorMessageParser from '../../utils/authErrorMessageParser';

const SignInPage = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const handleLogin = async () => {

    // giriş inputları boşsa
    if(email === '' || password === ''){
      showMessage({
        message: 'Eksik bir giriş yaptınız! Tekrar Deneyiniz.',
        type: 'danger'
      })
      return;
    }
    try {
      setLoading(true);
      await auth()
        .signInWithEmailAndPassword(email, password)
        .then(res => console.log(res))
        .catch(err => console.log(err));
      setLoading(false);
    } catch (error) {
      showMessage({
        message: authErrorMessageParser(error.code),
        type: 'danger'
      })
      setLoading(false);
    }
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
        <CustomButton
          title="Giriş Yap"
          loading={loading}
          onPress={handleLogin}
        />
        <CustomButton
          title="Kayıt Ol"
          loading={loading}
          onPress={() => navigation.navigate('SignUp')}
          theme="secondary"
        />
      </View>
    </View>
  );
};

export default SignInPage;
