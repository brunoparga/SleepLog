import {
  documentDirectory,
  readAsStringAsync,
  writeAsStringAsync,
} from 'expo-file-system';
import { shareAsync } from 'expo-sharing';

import { CoreEntry } from './types';

const logFile = `${documentDirectory as string}storedTimes.json`;

async function readEntryStrings(): Promise<CoreEntry<string>[]> {
  return JSON.parse(await readAsStringAsync(logFile)) as CoreEntry<string>[];
}

function share(): void {
  void shareAsync(logFile);
}

function writeEmpty(): void {
  writeAsStringAsync(logFile, JSON.stringify([])).catch(undefined);
}

function writeLog(newEntries: CoreEntry<Date>[]): void {
  const replacer = undefined;
  const twoSpaces = 2;

  void writeAsStringAsync(
    logFile,
    JSON.stringify(newEntries, replacer, twoSpaces)
  );
}

export { readEntryStrings, share, writeEmpty, writeLog };
