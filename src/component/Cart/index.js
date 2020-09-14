import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import card from '../../assets/icons/shopping-cart.png';

const Cart = (props) => {
  return (
    <View>
      <View style={styles.cardWrapper}>
        <Image source={card} style={styles.iconCard} />
        <Text style={styles.notif}>{props.quantity}</Text>
      </View>
      <Text style={styles.text}>Keranjang Belanja Anda</Text>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  cardWrapper: {
    borderWidth: 1,
    borderColor: '#439801',
    width: 93,
    height: 93,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginTop: 40,
  },
  iconCard: {width: 50, height: 50},
  text: {fontSize: 12, color: '#777777', fontWeight: '700', marginTop: 8},
  notif: {
    fontSize: 12,
    color: 'white',
    backgroundColor: '#6fcf97',
    padding: 4,
    borderRadius: 25,
    width: 24,
    height: 24,
    position: 'absolute',
    top: 0,
    right: 0,
  },
});
