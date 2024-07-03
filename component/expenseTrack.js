import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {backgroundBG} from '../themes';

const ExpenseTrack = ({item}) => {
  return (
    <View
      style={[
        styles.mainContainer,
        {backgroundColor: backgroundBG[item.category]},
      ]}>
      <View>
        <Text style={{fontSize: 18, color: 'black', fontWeight: '600'}}>
          {item.title}
        </Text>
        <Text>{item.category}</Text>
      </View>
      <View>
        <Text>${item.amount}</Text>
      </View>
    </View>
  );
};

export default ExpenseTrack;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 15,
    padding: 20,
    borderRadius: 20,
  },
});
