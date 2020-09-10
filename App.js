/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, Image, TextInput} from 'react-native';

const App = () => {
  return (
    <View>
      <View style={{width: 80, height: 80, backgroundColor: '#0abde3'}} />
      <Text>Hello</Text>
      <Text>Prof</Text>
      <Dayat />
      <Photo />
      <TextInput style={{borderWidth: 1}} />
    </View>
  );
};

const Dayat = () => {
  return <Text>Dayat</Text>;
};

const Photo = () => {
  return (
    <Image
      source={{uri: 'https://placeimg.com/100/100/tech'}}
      style={{width: 100, height: 100}}
    />
  );
};

export default App;
