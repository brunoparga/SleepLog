import { useEffect, useState } from 'react';

import { BasicEntry, ButtonsState, CoreEntry } from '../types';
import { readEntryStrings, writeEmpty } from '../fileOps';

function parseEntry(entry: Record<string, Date | string>): BasicEntry {
  return {
    startTime: new Date(entry.startTime),
    endTime: new Date(entry.endTime),
  };
}

function useButtonsState(): ButtonsState {
  const [entries, setEntries] = useState([] as CoreEntry[]);
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
