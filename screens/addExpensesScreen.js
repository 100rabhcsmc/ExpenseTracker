import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {categories} from '../constants';

const AddExpensesScreen = () => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const navigation = useNavigation();

  // const handleAddTrip = () => {
  //   if (title && amount && category) {
  //     navigation.goBack();
  //   } else {
  //     //error massega
  //   }
  // };

  return (
    <SafeAreaView>
      <Text
        style={{
          fontSize: 28,
          fontWeight: '600',
          textAlign: 'center',
        }}>
        Add Expense
      </Text>
      <View
        style={{
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          marginTop: 40,
        }}>
        <Image
          style={{width: 350, height: 350}}
          source={require('../assets/images/4.png')}
        />
      </View>
      <View style={{flexDirection: 'column'}}>
        <Text style={{fontSize: 18, fontWeight: '600', marginStart: 15}}>
          For What?
        </Text>
        <TextInput
          value={title}
          onChange={value => setTitle(value)}
          style={{
            padding: 20,
            margin: 20,
            borderRadius: 10,
            backgroundColor: 'white',
            width: 380,
          }}
        />
        <Text style={{fontSize: 18, fontWeight: '600', marginStart: 15}}>
          How Much?
        </Text>
        <TextInput
          value={amount}
          onChange={value => setAmount(value)}
          style={{
            padding: 20,
            margin: 20,
            borderRadius: 10,
            backgroundColor: 'white',
            width: 380,
          }}
        />
      </View>
      <View style={{marginStart: 20}}>
        <Text style={{fontSize: 18, fontWeight: '600'}}>Category</Text>
        <View
          style={{flexDirection: 'row', flexWrap: 'wrap', marginVertical: 10}}>
          {categories.map(item => {
            let bg = 'white';
            return (
              <TouchableOpacity
                onPress={() => setCategory(item.value)}
                style={[
                  styles.categoryContainer,
                  {
                    backgroundColor:
                      item.value === category ? '#a3e5ba' : 'white',
                  },
                ]}
                key={item.title}>
                <Text>{item.title}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <TouchableOpacity
        // onPress={handleAddTrip}
        style={{
          backgroundColor: 'green',
          padding: 13,
          marginHorizontal: 10,
          borderRadius: 30,
        }}>
        <Text
          style={{
            fontSize: 20,
            textAlign: 'center',
            color: 'white',
            fontWeight: '600',
          }}>
          Add Expenses
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AddExpensesScreen;

const styles = StyleSheet.create({
  categoryContainer: {
    marginHorizontal: 10,
    padding: 10,
    marginVertical: 5,
    borderRadius: 30,
  },
});
