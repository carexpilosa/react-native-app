import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './Header';

const headerTitle = 'Ick bin der Header, wa.';

const Main = () => {
  return (
    <View style={styles.centered}>
      <Header title={headerTitle} />
    </View>
  );
};

const styles = StyleSheet.create({
  centered: {
    alignItems: 'center'
  }
});

export default Main;
