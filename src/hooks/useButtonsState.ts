import { useEffect, useState } from 'react';

import { ButtonsState, Time } from '../types';
import { readTimeStrings, writeEmpty } from '../fileOps';

function useButtonsState(): ButtonsState {
  const [times, setTimes] = useState([] as Time<Date>[]);
  const [awake, setAwake] = useState(true);

  useEffect(function useReadTimes() {
    async function readStoredTimes(): void {
      try {
        const timeStrings = await readTimeStrings();

        const readTimes: Time<Date>[] = timeStrings.map((timeItem) => ({
          ...timeItem,
          time: new Date(timeItem.time),
        }));

        setTimes(readTimes);
        setAwake(readTimes[readTimes.length - 1].awake);
      } catch {
        // Async but it doesn't really matter
        writeEmpty();
      }
    }

    // eslint-disable-next-line putout/putout
    readStoredTimes();
  }, []);

  return { times, setTimes, awake, setAwake };
}

export default useButtonsState;
