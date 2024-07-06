import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleSignup = () => {
    if (email && password) {
      navigation.goBack();
      navigation.navigate('Home');
    } else {
      //error massega
    }
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <Text
        style={{
          fontSize: 28,
          fontWeight: '600',
          textAlign: 'center',
          marginTop: 20,
        }}>
        Sign Up
      </Text>
      <View
        style={{
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          marginTop: 40,
          flex: 1,
        }}>
        <Image
          style={{width: 350, height: 350}}
          source={require('../assets/images/signup.png')}
        />
      </View>
      <View style={{flexDirection: 'column', marginVertical: 0, flex: 1}}>
        <Text style={{fontSize: 18, fontWeight: '600', marginStart: 15}}>
          Email
        </Text>
        <TextInput
          value={email}
          onChange={value => setEmail(value)}
          style={{
            padding: 20,
            margin: 20,
            borderRadius: 10,
            backgroundColor: 'white',
            width: 380,
          }}
        />
        <Text style={{fontSize: 18, fontWeight: '600', marginStart: 15}}>
          Password
        </Text>
        <TextInput
          value={password}
          onChange={value => setPassword(value)}
          style={{
            padding: 20,
            margin: 20,
            borderRadius: 10,
            backgroundColor: 'white',
            width: 380,
          }}
        />
      </View>

      <TouchableOpacity
        onPress={handleSignup}
        style={{
          backgroundColor: 'green',
          padding: 13,
          marginHorizontal: 10,
          borderRadius: 30,
          flex: 0.08,
        }}>
        <Text
          style={{
            fontSize: 20,
            textAlign: 'center',
            color: 'white',
            fontWeight: '600',
          }}>
          Sign Up
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignUp;
