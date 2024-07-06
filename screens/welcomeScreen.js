import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const WelcomeScreen = () => {
  const naviagtion = useNavigation();
  return (
    <SafeAreaView>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Image source={require('../assets/images/welcome.gif')} />
      </View>

      <View style={{}}>
        <Text style={{fontSize: 30, fontWeight: '600', textAlign: 'center'}}>
          Expense Tracker
        </Text>
        <TouchableOpacity
          onPress={() => naviagtion.navigate('signIn')}
          style={{
            backgroundColor: 'green',
            padding: 12,
            marginTop: 40,
            marginHorizontal: 20,
            borderRadius: 30,
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '600',
              color: 'white',
              textAlign: 'center',
            }}>
            Sign In
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => naviagtion.navigate('signUp')}
          style={{
            backgroundColor: 'green',
            padding: 12,
            marginTop: 24,
            marginHorizontal: 20,
            borderRadius: 30,
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '600',
              color: 'white',
              textAlign: 'center',
            }}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
