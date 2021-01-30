import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import * as FileSystem from 'expo-file-system';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    alignItems: 'center',
  },

  title: {
    fontSize: 32,
    marginTop: 20,
  },

  buttonContainer: {
    margin: 20,
  },

  button: {
    height: 80,
    paddingHorizontal: 20,
  },

  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

function App(): React.ReactNode {
  const [times, setTimes] = useState([] as { awake: boolean; time: Date }[]);
  const [amAwake, setAmAwake] = useState(true);
  const currentState = amAwake ? 'awake' : 'asleep';

  const timeElements = times.map(({ awake, time }) => (
    <Text key={time.toISOString()} style={styles.item}>
      {awake ? 'Awake' : 'Asleep'} at {time.toISOString()}
    </Text>
  ));

  function onPress() {
    const newAmAwake = !amAwake;

    setAmAwake(newAmAwake);
    setTimes(times.concat([{ awake: newAmAwake, time: new Date() }]));
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sleep Log</Text>
      <Button
        containerStyle={styles.buttonContainer}
        buttonStyle={styles.button}
        onPress={onPress}
        title="Add new time!"
      />
      <Text>Currently {currentState}</Text>
      {timeElements}
    </ScrollView>
  );
}

// eslint-disable-next-line import/no-unused-modules
export default App;
