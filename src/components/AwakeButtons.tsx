import React from 'react';

import SmallButtonsView from '../styles/SmallButtonsView';
import { ToDelete } from '../types';

import ShareButton from './ShareButton';
import DeleteButton from './DeleteButton';

function AwakeButtons({ numberOfEntries, setEntries }: ToDelete): JSX.Element {
  return (
    <SmallButtonsView>
      <ShareButton />
      <DeleteButton numberOfEntries={numberOfEntries} setEntries={setEntries} />
    </SmallButtonsView>
  );
}

export default AwakeButtons;
