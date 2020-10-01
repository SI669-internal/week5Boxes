
import { StyleSheet } from 'react-native';

export const externalStyles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'black'
  },
  section: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: "space-evenly"
  },
  boxLeft: {
    height: 175,
    width: 175,
    backgroundColor: 'magenta',
    alignItems: 'center',
    justifyContent: 'center'
  },
  boxRight: {
    height: 125,
    width: 125,
    backgroundColor: 'cyan',
    alignItems: 'center',
    justifyContent: 'center'
  }
});