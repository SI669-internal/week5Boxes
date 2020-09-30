import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { externalStyles } from './ExternalStyle';

export function App1() {
  return (
    <View style={styles1.container}>
      <View style={styles1.view1} />
      <View style={styles1.view2} />
      <View style={styles1.view3} />
    </View>
  );
}

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
  },
  view1: {
    flex: 1,
    backgroundColor: 'pink',
  },
  view2: {
    flex: 1,
    backgroundColor: 'lightgreen',
  },
  view3: {
    flex: 1,
    backgroundColor: 'tan',
  }
});

export function App2() {
  return (
    <View style={styles2.container}>
      <View style={styles2.view1} />
      <View style={styles2.view2} />
      <View style={styles2.view3} />
    </View>
  );
}

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'skyblue',
  },
  view1: {
    flex: 0.2,
    backgroundColor: 'pink',
  },
  view2: {
    flex: 0.2,
    backgroundColor: 'lightgreen',
  },
  view3: {
    flex: 0.2,
    backgroundColor: 'tan',
  }
});

export function App3() {
  return (
    <View style={styles3.container}>
      <View style={styles3.view1} />
      <View style={styles3.view2} />
      <View style={styles3.view3} />
    </View>
  );
}

const styles3 = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'skyblue',
  },
  view1: {
    flex: 0.2,
    width: 200,
    backgroundColor: 'pink',
  },
  view2: {
    flex: 0.2,
    width: 200,
    backgroundColor: 'lightgreen',
  },
  view3: {
    flex: 0.2,
    width: 200,
    backgroundColor: 'tan',
  }
});

export function App4() {
  return (
    <View style={styles4.container}>
      <View style={styles4.view1} />
      <View style={styles4.view2} />
      <View style={styles4.view3} />
    </View>
  );
}

const styles4 = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'skyblue',
  },
  view1: {
    flex: 0.2,
    height: 200,
    backgroundColor: 'pink',
  },
  view2: {
    flex: 0.2,
    height: 200,
    backgroundColor: 'lightgreen',
  },
  view3: {
    flex: 0.2,
    height: 200,
    backgroundColor: 'tan',
  }
});

export function AppSilverAndGold() {
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

export default function AppWithImport() {
  let styles = externalStyles;
  return (
    <View style={externalStyles.body}>
      <View style={externalStyles.section}>
        <View style={externalStyles.boxLeft}>
          <Text>Magenta Box 175x175</Text>
        </View>
        <View style={externalStyles.boxLeft}>
          <Text>Magenta Box 175x175</Text>
        </View>
      </View>
      <View style={externalStyles.section}>
      <View style={externalStyles.boxRight}>
          <Text>Cyan Box 125x125</Text>
        </View>
        <View style={externalStyles.boxRight}>
          <Text>Cyan Box 125x125</Text>
        </View>
        <View style={externalStyles.boxRight}>
          <Text>Cyan Box 125x125</Text>
        </View>
      </View>
    </View>
  );
}

