import { useEffect, useState } from 'react';

import { BasicEntry, ButtonsState, CoreEntry } from '../types';
import { readEntryStrings, writeEmpty } from '../fileOps';

function parseEntry(entry: BasicEntry<string>): BasicEntry<Date> {
  const start = { startTime: new Date(entry.startTime) };

  if (entry.endTime) {
    return { ...start, endTime: new Date(entry.endTime) };
  }

  return start;
}

function useButtonsState(): ButtonsState {
  const [entries, setEntries] = useState([] as CoreEntry<Date>[]);
  const [awake, setAwake] = useState(true);

  useEffect(() => {
    async function readEntries(): void {
      try {
        const entryStrings = await readEntryStrings();

        const entriesRead = entryStrings.map((entry) => ({
          core: parseEntry(entry.core),
          naps: entry.naps?.map((nap) => parseEntry(nap)),
          negativeNaps: entry.negativeNaps?.map((negNap) => parseEntry(negNap)),
        }));

        setEntries(entriesRead);

        const lastEntry = entriesRead[entriesRead.length - 1].core;

        setAwake(!lastEntry.endTime);
      } catch {
        // Async but it doesn't really matter
        writeEmpty();
      }
    }

    // eslint-disable-next-line putout/putout
    readEntries();
  }, []);

  return { entries, setEntries, awake, setAwake };
}

export default useButtonsState;
