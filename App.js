import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
  <View style={styles.body}>
    <View style={styles.section}>
      <View style={styles.boxLeft}>
        <Text>Silver Box 175x175</Text>
      </View>
      <View style={styles.boxLeft}>
        <Text>Silver Box 175x175</Text>
      </View>
    </View>
    <View style={styles.section}>
    <View style={styles.boxRight}>
        <Text>Gold Box 125x125</Text>
      </View>
      <View style={styles.boxRight}>
        <Text>Gold Box 125x125</Text>
      </View>
      <View style={styles.boxRight}>
        <Text>Gold Box 125x125</Text>
      </View>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'row',
  },
  section: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: "space-evenly"
  },
  boxLeft: {
    height: 175,
    width: 175,
    backgroundColor: 'silver',
    alignItems: 'center',
    justifyContent: 'center'
  },
  boxRight: {
    height: 125,
    width: 125,
    backgroundColor: 'gold',
    alignItems: 'center',
    justifyContent: 'center'

  }
});