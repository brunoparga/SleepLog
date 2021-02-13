import React from 'react';
import { Button } from 'react-native-elements';

import { writeLog } from '../fileOps';
import { ButtonsState } from '../types';

function LogEventButton({ state }: { state: ButtonsState }): JSX.Element {
  const { times, setTimes, awake, setAwake } = state;

  async function logEvent() {
    const newAwake = !awake;
    const newTimes = times.concat([{ awake: newAwake, time: new Date() }]);

    setAwake(newAwake);
    setTimes(newTimes);

    await writeLog(newTimes);
  }

  return <Button onPress={logEvent} title={awake ? 'Go to bed' : 'Wake up'} />;
}

export default LogEventButton;
