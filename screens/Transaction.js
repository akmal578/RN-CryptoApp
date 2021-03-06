import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const Transaction = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Transaction</Text>
      <TouchableOpacity onPress={() => navigation.navigate('CryptoDetail')}>
        <Text>Back to Crypto</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});

export default Transaction;
