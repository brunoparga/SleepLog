import {
  documentDirectory,
  readAsStringAsync,
  writeAsStringAsync,
} from 'expo-file-system';
import { shareAsync } from 'expo-sharing';

import { Time } from './types';

const logFile = `${documentDirectory as string}storedTimes.json`;

async function readTimeStrings(): Promise<Time<string>[]> {
  return JSON.parse(await readAsStringAsync(logFile)) as Time<string>[];
}

async function share(): Promise<void> {
  await shareAsync(logFile);
}

function writeEmpty(): void {
  writeAsStringAsync(logFile, JSON.stringify([])).catch(undefined);
}

async function writeLog(newTimes: Time<Date>[]): Promise<void> {
  const replacer = undefined;
  const twoSpaces = 2;

  await writeAsStringAsync(
    logFile,
    JSON.stringify(newTimes, replacer, twoSpaces)
  ).catch(undefined);
}

export { readTimeStrings, share, writeEmpty, writeLog };
