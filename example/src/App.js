import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import Iconly2 from 'react-native-iconly-2';

export default function App() {
  return (
    <View style={styles.container}>
      <Iconly2 Name="SearchBold" Color="tomato" Size={50} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
