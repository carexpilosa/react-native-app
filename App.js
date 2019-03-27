import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './components/Main';
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Main />
        <Text> Was das alles soll...</Text>
        <Text>Komische Erscheinungen oder wat</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
