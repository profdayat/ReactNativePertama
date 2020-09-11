/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, Image, TextInput, StyleSheet} from 'react-native';
import lenovo from './lenovo.jpg';

const App = () => {
  return <StylingReactNativeComponent />;
};

const StylingReactNativeComponent = () => {
  return (
    <View>
      <Text style={styles.text}>Styling Component</Text>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: '#0abde3',
          borderWidth: 2,
          borderColor: '#f368e0',
          marginTop: 20,
          marginLeft: 20,
        }}
      />
      <View
        style={{
          padding: 12,
          backgroundColor: '#f2f2f2',
          width: 212,
          borderRadius: 8,
        }}>
        <Image
          source={lenovo}
          style={{width: 188, height: 107, borderRadius: 8}}
        />
        <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>
          Lenovo Yoga 510
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            color: '#f2994a',
            marginTop: 16,
          }}>
          Rp. 11.500.00,-
        </Text>
        <Text style={{fontSize: 12, fontWeight: '300', marginTop: 12}}>
          Malang
        </Text>
        <View
          style={{
            backgroundColor: '#6fcf97',
            paddingVertical: 6,
            borderRadius: 25,
            marginTop: 20,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: 'white',
              textAlign: 'center',
            }}>
            Beli
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#10ac84',
    marginLeft: 20,
    marginTop: 40,
  },
});

const SampleComponent = () => {
  return (
    <View>
      <View style={{width: 80, height: 80, backgroundColor: '#0abde3'}} />
      <Text>Hello</Text>
      <Text>Prof</Text>
      <Dayat />
      <Photo />
      <TextInput style={{borderWidth: 1}} />
      <BoxGreen />
      <Profile />
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

class BoxGreen extends Component {
  render() {
    return <Text>Ini Component dari class</Text>;
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <Image
          source={{uri: 'https://placeimg.com/100/100/animals'}}
          style={{width: 100, height: 100, borderRadius: 50}}
        />
        <Text style={{color: 'blue', fontSize: 24}}>Ini Hewan</Text>
      </View>
    );
  }
}

export default App;
