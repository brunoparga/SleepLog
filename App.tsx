import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import {
  documentDirectory,
  readAsStringAsync,
  writeAsStringAsync,
} from 'expo-file-system';
import { shareAsync } from 'expo-sharing';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 40,
  },

  buttonContainer: {
    marginTop: 20,
  },

  button: {
    height: 100,
    width: 200,
  },

  buttonTitle: {
    fontSize: 28,
  },
});

type Time<T> = { awake: boolean; time: T };

function App(): React.ReactNode {
  const [times, setTimes] = useState([] as Time<Date>[]);
  const [awake, setAwake] = useState(true);
  const storedTimesFile = `${documentDirectory as string}storedTimes.json`;

  useEffect(
    function useReadTimes() {
      async function readStoredTimes(): void {
        try {
          const readTimeStrings = JSON.parse(
            await readAsStringAsync(storedTimesFile)
          ) as Time<string>[];

          const readTimes: Time<Date>[] = readTimeStrings.map((foo) => ({
            ...foo,
            time: new Date(foo.time),
          }));

          setTimes(readTimes);
          setAwake(readTimes[readTimes.length - 1].awake);
        } catch {
          writeAsStringAsync(storedTimesFile, JSON.stringify([])).catch(
            undefined
          );
        }
      }

      // eslint-disable-next-line putout/putout
      readStoredTimes();
    },
    [storedTimesFile]
  );

  async function onPress() {
    const newAwake = !awake;
    const newTimes = times.concat([{ awake: newAwake, time: new Date() }]);

    setAwake(newAwake);
    setTimes(newTimes);

    await writeAsStringAsync(
      storedTimesFile,
      // eslint-disable-next-line unicorn/no-null, no-magic-numbers
      JSON.stringify(newTimes, null, 2)
    );
  }

  async function share() {
    await shareAsync(storedTimesFile);
  }

  return (
    <View style={styles.container}>
      <Button
        raised
        containerStyle={styles.buttonContainer}
        buttonStyle={styles.button}
        titleStyle={styles.buttonTitle}
        onPress={onPress}
        title={awake ? 'Go to bed' : 'Wake up'}
      />
      <Button
        raised
        containerStyle={styles.buttonContainer}
        buttonStyle={styles.button}
        titleStyle={styles.buttonTitle}
        onPress={share}
        title={'Share logs'}
      />
      <Button
        raised
        containerStyle={styles.buttonContainer}
        buttonStyle={styles.button}
        titleStyle={styles.buttonTitle}
        onPress={() =>
          writeAsStringAsync(storedTimesFile, JSON.stringify([])).catch(
            undefined
          )
        }
        title={'Delete logs'}
      />
    </View>
  );
}

// eslint-disable-next-line import/no-unused-modules
export default App;
