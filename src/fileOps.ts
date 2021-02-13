import {
  documentDirectory,
  readAsStringAsync,
  writeAsStringAsync,
} from 'expo-file-system';
import { shareAsync } from 'expo-sharing';

import { CoreEntry } from './types';

const logFile = `${documentDirectory as string}storedTimes.json`;

async function readEntryStrings(): Promise<CoreEntry[]> {
  return JSON.parse(await readAsStringAsync(logFile)) as CoreEntry[];
}

async function share(): Promise<void> {
  await shareAsync(logFile);
}

function writeEmpty(): void {
  writeAsStringAsync(logFile, JSON.stringify([])).catch(undefined);
}

async function writeLog(newEntries: CoreEntry[]): Promise<void> {
  const replacer = undefined;
  const twoSpaces = 2;

  await writeAsStringAsync(
    logFile,
    JSON.stringify(newEntries, replacer, twoSpaces)
  ).catch(undefined);
}

export { readEntryStrings, share, writeEmpty, writeLog };
