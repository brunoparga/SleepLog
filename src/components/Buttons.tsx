import React from 'react';

import useButtonsState from '../hooks/useButtonsState';
import SmallButtonsView from '../styles/SmallButtonsView';
import AsleepView from '../styles/AsleepView';
import SmallButton from '../styles/SmallButton';

import LogEventButton from './LogEventButton';
import ShareButton from './ShareButton';
import DeleteButton from './DeleteButton';

function Buttons(): JSX.Element {
  const state = useButtonsState();

  const { entries, awake } = state;

  const awakeButtons = (
    <SmallButtonsView>
      <ShareButton />
      <DeleteButton />
    </SmallButtonsView>
  );

  const sleepTime = entries[
    entries.length - 1
  ]?.core.startTime.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });
  const asleepData = (
    <AsleepView>
      {`Sleep started
at ${sleepTime}.
Sweet dreams!`}
      <SmallButton title="Anti-nap" />
    </AsleepView>
  );

  return (
    <>
      <LogEventButton state={state} />
      {awake ? awakeButtons : asleepData}
    </>
  );
}

export default Buttons;
