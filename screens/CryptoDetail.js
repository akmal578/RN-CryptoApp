import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  Animated,
} from "react-native";

import { dummyData, COLORS, SIZES, FONTS, icons } from "../constants";

const CryptoDetail = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>CryptoDetails</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Transaction")}>
          <Text>Navigate to Transaction</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});

export default CryptoDetail;
