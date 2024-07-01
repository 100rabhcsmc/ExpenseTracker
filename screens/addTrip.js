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

const AddTrip = () => {
  const [place, setplace] = useState('');
  const [country, setcountry] = useState('');
  const navigation = useNavigation();

  const handleAddTrip = () => {
    if (place && country) {
      navigation.navigate('Home');
    } else {
      //error massega
    }
  };
  return (
    <SafeAreaView>
      <Text
        style={{
          fontSize: 28,
          fontWeight: '600',
          textAlign: 'center',
        }}>
        Add Trip
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
      <View style={{flexDirection: 'column', marginVertical: 30}}>
        <Text style={{fontSize: 18, fontWeight: '600', marginStart: 15}}>
          Where on Earth?
        </Text>
        <TextInput
          value={place}
          onChange={value => setplace(value)}
          style={{
            padding: 20,
            margin: 20,
            borderRadius: 10,
            backgroundColor: 'white',
            width: 380,
          }}
        />
        <Text style={{fontSize: 18, fontWeight: '600', marginStart: 15}}>
          Which country
        </Text>
        <TextInput
          value={country}
          onChange={value => setcountry(value)}
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
        onPress={handleAddTrip}
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
          Add Trip
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AddTrip;
