import React from 'react';

import useButtonsState from '../hooks/useButtonsState';
import SmallButtonsView from '../styles/SmallButtonsView';

import LogEventButton from './LogEventButton';
import ShareButton from './ShareButton';
import DeleteButton from './DeleteButton';

function Buttons(): JSX.Element {
  const state = useButtonsState();

  // const { times, setTimes, awake, setAwake } = state;

  return (
    <>
      <LogEventButton state={state} />
      <SmallButtonsView>
        <ShareButton />
        <DeleteButton />
      </SmallButtonsView>
    </>
  );
}

export default Buttons;
