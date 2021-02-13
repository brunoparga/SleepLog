import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { Children } from '../types';

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: 200,
    alignItems: 'center',
  },

  text: {
    fontSize: 20,
    textAlign: 'center',
  },
});

function AsleepView({ children }: Children): JSX.Element {
  const [title, ...otherChildren] = children;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      {otherChildren}
    </View>
  );
}

export default AsleepView;
