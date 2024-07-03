import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import randomImage from '../assets/images/randomImage';
import EmptyScreen from '../component/emptyScreen';
import {useNavigation} from '@react-navigation/native';

const DATA = [
  {
    id: '1',
    place: 'Kerala',
    country: 'India',
  },
  {
    id: '2',
    place: 'Pune',
    country: 'India',
  },
  {
    id: '3',
    place: 'Delhi',
    country: 'India',
  },
  {
    id: '4',
    place: 'Mumbai',
    country: 'India',
  },
  {
    id: '5',
    place: 'Goa',
    country: 'India',
  },
  {
    id: '6',
    place: 'jaipur',
    country: 'India',
  },
];

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          flex: 0.06,
        }}>
        <Text style={{fontSize: 20, fontWeight: '600'}}>Expense tracker</Text>
        <TouchableOpacity
          style={{backgroundColor: 'white', borderRadius: 30, padding: 6}}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignContent: 'center',
          backgroundColor: '#b7d5fc',
          borderRadius: 25,
          marginHorizontal: 20,
          marginTop: 30,
          flex: 0.7,
        }}>
        <Image
          source={require('../assets/images/banner.png')}
          style={{
            width: 300,
            height: 300,
          }}
        />
      </View>
      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
            marginTop: 20,
          }}>
          <Text style={{fontSize: 20, fontWeight: '600'}}>Recent trip</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('addTrip')}
            style={{backgroundColor: 'white', borderRadius: 30, padding: 6}}>
            <Text>Add Trip</Text>
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            numColumns={2}
            contentContainerStyle={{paddingBottom: 20}}
            ListEmptyComponent={
              <EmptyScreen msg="You haven't recorded any trips yet" />
            }
            data={DATA}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('tripExpensesScreen', {...item})
                  }
                  style={{
                    justifyContent: 'space-between',
                    marginStart: 26,
                    backgroundColor: 'white',
                    marginVertical: 10,
                    borderRadius: 10,
                  }}>
                  <Image
                    source={randomImage()}
                    style={{width: 175, height: 150}}
                  />
                  <View style={{marginStart: 15, marginBottom: 10}}>
                    <Text style={{fontSize: 18, fontWeight: '600'}}>
                      {item.place}
                    </Text>
                    <Text style={{fontSize: 16}}>{item.country}</Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
