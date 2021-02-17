import { useEffect, useState } from 'react';

import { BasicEntry, ButtonsState, CoreEntry } from '../types';
import { readEntryStrings, writeEmpty } from '../fileOperations';

function parseBasicEntry(entry: BasicEntry<string>): BasicEntry<Date> {
  const start = { startTime: new Date(entry.startTime) };

  if (entry.endTime) {
    return { ...start, endTime: new Date(entry.endTime) };
  }

  return start;
}

function parseCoreEntry(entry: CoreEntry<string>): CoreEntry<Date> {
  return {
    core: parseBasicEntry(entry.core),
    naps: entry.naps?.map((nap) => parseBasicEntry(nap)),
    negativeNaps: entry.negativeNaps?.map((negNap) => parseBasicEntry(negNap)),
  };
}

function useButtonsState(): ButtonsState {
  const [entries, setEntries] = useState([] as CoreEntry<Date>[]);
  const [awake, setAwake] = useState(true);

  useEffect(() => {
    async function readEntries(): void {
      try {
        const entryStrings = await readEntryStrings();

        const parsedEntries = entryStrings.map(parseCoreEntry);

        setEntries(parsedEntries);

        const lastEntry = parsedEntries[parsedEntries.length - 1].core;

        setAwake(Boolean(lastEntry.endTime));
      } catch {
        // Async but it doesn't really matter
        writeEmpty();
      }
    }

    // eslint-disable-next-line putout/putout
    void readEntries();
  }, []);

  return { entries, setEntries, awake, setAwake };
}

export default useButtonsState;
