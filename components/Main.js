import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'native-base';
import Header from './Header';

const headerTitle = 'DAS IST EIN HEADER';

const Main = () => {
  return (
    <View style={styles.centered}>
      <Header title={headerTitle} />
      <Button
        style={{ padding: 8, alignSelf: 'center' }}
        onPress={() => alert('pressed me once more...')}
      >
        <Text style={{ color: 'yellow' }}>mein zentraler Button</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  centered: {
    alignItems: 'center'
  }
});

export default Main;
