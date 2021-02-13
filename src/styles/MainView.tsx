import React from 'react';
import { View, StyleSheet } from 'react-native';

import Buttons from '../components/Buttons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 40,
  },
});

function MainView(): JSX.Element {
  return (
    <View style={styles.container}>
      <Buttons />
    </View>
  );
}

export default MainView;
