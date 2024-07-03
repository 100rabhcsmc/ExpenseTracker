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
import ExpenseTrack from '../component/expenseTrack';

const DATA = [
  {
    id: '1',
    title: 'Ate sandwich',
    amount: 4,
    category: 'food',
  },
  {
    id: '2',
    title: 'Bought a jacket',
    amount: 60,
    category: 'shopping',
  },
  {
    id: '3',
    title: 'Aatche a movies',
    amount: 100,
    category: 'enterainment',
  },
];

const TripExpensesScreen = props => {
  const navigation = useNavigation();
  console.log('hhhhhh', props.route.params);
  const {id, place, country} = props.route.params;
  return (
    <SafeAreaView style={{flex: 1}}>
      <Text
        style={{
          fontSize: 25,
          fontWeight: '600',
          textAlign: 'center',
        }}>
        {place}
      </Text>
      <Text
        style={{
          textAlign: 'center',
        }}>
        {country}
      </Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignContent: 'center',
          //   backgroundColor: '#b7d5fc',
          borderRadius: 25,
          marginHorizontal: 20,
          marginTop: 30,
          flex: 0.7,
        }}>
        <Image
          source={require('../assets/images/7.png')}
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
          <Text style={{fontSize: 20, fontWeight: '600'}}>Expenses</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('addTrip')}
            style={{backgroundColor: 'white', borderRadius: 30, padding: 6}}>
            <Text>Add Expens</Text>
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            numColumns={0}
            contentContainerStyle={{paddingBottom: 20}}
            ListEmptyComponent={
              <EmptyScreen msg="You haven't recorded any expenses yet" />
            }
            data={DATA}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
              return <ExpenseTrack item={item} />;
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TripExpensesScreen;

const styles = StyleSheet.create({});
