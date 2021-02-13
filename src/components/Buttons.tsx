import React from 'react';
import { Button } from 'react-native-elements';

import { share, writeEmpty, writeLog } from '../fileOps';
import useButtonsState from '../hooks/useButtonsState';

function Buttons(): JSX.Element {
  const { times, setTimes, awake, setAwake } = useButtonsState();

  async function logEvent() {
    const newAwake = !awake;
    const newTimes = times.concat([{ awake: newAwake, time: new Date() }]);

    setAwake(newAwake);
    setTimes(newTimes);

    await writeLog(newTimes);
  }

  return (
    <>
      <Button onPress={logEvent} title={awake ? 'Go to bed' : 'Wake up'} />
      <Button onPress={share} title={'Share logs'} />
      <Button onPress={writeEmpty} title={'Delete logs'} />
    </>
  );
}

export default Buttons;
