import React from 'react';
import { Button } from 'react-native-elements';

import { writeLog } from '../fileOperations';
import { ButtonsState, CoreEntry } from '../types';

function goToBed(entries: CoreEntry<Date>[]): CoreEntry<Date>[] {
  return entries.concat({ core: { startTime: new Date() } });
}

function wakeUp(entries: CoreEntry<Date>[]): CoreEntry<Date>[] {
  const lastEntry = entries[entries.length - 1];

  // The last entry might have negative nap information that needs preserved
  const newEntry = {
    ...lastEntry,
    core: { ...lastEntry.core, endTime: new Date() },
  };

  const incompleteLastEntryIndex = -1;

  return entries.slice(0, incompleteLastEntryIndex).concat(newEntry);
}

function LogEventButton({ state }: { state: ButtonsState }): JSX.Element {
  const { entries, setEntries, awake, setAwake } = state;

  async function logCoreEvent() {
    const newEntries = awake ? goToBed(entries) : wakeUp(entries);

    setAwake(!awake);
    setEntries(newEntries);
    await writeLog(newEntries);
  }

  return (
    <Button onPress={logCoreEvent} title={awake ? 'Go to bed' : 'Wake up'} />
  );
}

export default LogEventButton;
