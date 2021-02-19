import React from 'react';

import useButtonsState from '../hooks/useButtonsState';

import LogEventButton from './LogEventButton';
import AwakeButtons from './AwakeButtons';
import AsleepButtons from './AsleepButtons';

function Buttons(): JSX.Element {
  const state = useButtonsState();

  const { entries, setEntries, awake } = state;

  return (
    <>
      <LogEventButton state={state} />
      {awake ? (
        <AwakeButtons
          numberOfEntries={entries.length}
          setEntries={setEntries}
        />
      ) : (
        <AsleepButtons entries={entries} />
      )}
    </>
  );
}

export default Buttons;
