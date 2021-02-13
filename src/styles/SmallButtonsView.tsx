import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Children } from '../types';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 200,
  },
});

function SmallButtonsView({ children }: Children): JSX.Element {
  return <View style={styles.container}>{children}</View>;
}

export default SmallButtonsView;
