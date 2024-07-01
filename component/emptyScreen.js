import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const EmptyScreen = ({msg}) => {
  return (
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
      }}>
      <Image
        source={require('../assets/images/empty.png')}
        style={{width: 200, height: 200}}
      />
      <Text style={{color: 'black', fontSize: 16, fontWeight: '400'}}>
        {msg || 'data not found'}
      </Text>
    </View>
  );
};

export default EmptyScreen;

const styles = StyleSheet.create({});
