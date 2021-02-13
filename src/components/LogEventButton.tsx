import React from 'react';
import { Button } from 'react-native-elements';

import { writeLog } from '../fileOps';
import { ButtonsState } from '../types';

function LogEventButton({ state }: { state: ButtonsState }): JSX.Element {
  const { entries, setEntries, awake, setAwake } = state;

  async function logCoreEvent() {
    if (awake) {
      // Going to bed
      const newEntries = entries.concat({ core: { startTime: new Date() } });

      setEntries(newEntries);
      await writeLog(newEntries);
    } else {
      // Waking up
      const lastEntry = entries[entries.length - 1];

      const newEntry = {
        ...lastEntry,
        core: { ...lastEntry.core, endTime: new Date() },
      };

      // eslint-disable-next-line no-magic-numbers
      const newEntries = entries.slice(0, -1).concat(newEntry);

      setEntries(newEntries);
      await writeLog(newEntries);
    }

    setAwake(!awake);
  }

  return (
    <Button onPress={logCoreEvent} title={awake ? 'Go to bed' : 'Wake up'} />
  );
}

export default LogEventButton;
